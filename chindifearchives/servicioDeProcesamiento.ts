import * as XLSX from 'xlsx';
import type { AgentRecord, ChuniorRecord, PairedRecord, SummaryData, AvailableFilters, Turno } from '../types';
import { headerStyle, statusStyles, currencyFormat } from '../utils/excelStyles';


// --- UTILITY FUNCTIONS ---

const readFileAsText = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(String(e.target?.result || ''));
    reader.onerror = reject;
    reader.readAsText(file, 'utf-8');
  });
};

const splitLines = (text: string): string[] => {
  return text.replace(/^\uFEFF/, '').split(/\r?\n/).filter(l => l.trim() !== '');
};

const parseCSVLine = (line: string, delimiter = ','): string[] => {
    const out: string[] = [];
    let cur = '', inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            if (inQuotes && line[i + 1] === '"') { cur += '"'; i++; continue; }
            inQuotes = !inQuotes; continue;
        }
        if (ch === delimiter && !inQuotes) { out.push(cur.trim()); cur = ''; continue; }
        cur += ch;
    }
    out.push(cur.trim());
    return out;
};

const parseAmountRaw = (raw: string | null | undefined): number => {
    if (raw === null || raw === undefined) return 0;
    let s = String(raw).trim();
    if (!s) return 0;
    s = s.replace(/[^\d,\.-]/g, '');
    if (s.includes(',')) {
        s = s.replace(/\./g, '').replace(',', '.');
    }
    const n = parseFloat(s);
    return isNaN(n) ? 0 : n;
};

const getTurnoFromDate = (d: Date | null): Turno => {
  if (!d || isNaN(d.getTime())) return '';
  const h = d.getHours();
  if (h >= 6 && h < 14) return 'TM';
  if (h >= 14 && h < 22) return 'TT';
  return 'TN';
};

const formatTime = (d: Date | null): string => {
  if(!d || isNaN(d.getTime())) return ''; 
  const pad = (num: number) => String(num).padStart(2, '0');
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
};

const csvSafe = (v: any): string => {
  if (v === null || v === undefined) return '';
  let s = String(v).replace(/"/g, '""');
  if (s.includes(',') || s.includes('"') || s.includes('\n')) s = `"${s}"`;
  return s;
};


// --- PARSING LOGIC ---

const parseAgentLines = (lines: string[], agentName: string): AgentRecord[] => {
  const records: AgentRecord[] = [];
  let startIndex = 0;
  let format: 'sub' | 'main' | null = null;

  if (lines.length === 0) return records;
  if (lines[0].toLowerCase().startsWith('sep=')) startIndex = 1;
  
  const headerLine = lines[startIndex];
  if (headerLine) {
    const headerCols = parseCSVLine(headerLine);
    if (headerCols[3]?.toLowerCase() === 'cantidad' && headerCols[6]?.toLowerCase() === 'alias del jugador') {
      format = 'sub';
    } else if (headerCols[2]?.toLowerCase() === 'cantidad' && headerCols[4]?.toLowerCase() === 'alias') {
      format = 'main';
    } else {
      console.warn(`Could not determine CSV format for ${agentName}, skipping file.`);
      return records;
    }
    startIndex++;
  }

  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim() || !line.includes(',')) continue;
    const cols = parseCSVLine(line);
    if (cols.length < 5) continue;

    const fechaRaw = (cols[0] || '').trim();
    const montoRaw = format === 'sub' ? cols[3] : cols[2];
    const usuarioRaw = format === 'sub' ? cols[6] : cols[4];
    const tipoRaw = format === 'sub' ? cols[1] : cols[3];
    
    const monto = parseAmountRaw(montoRaw);
    const usuario = (usuarioRaw || '').toLowerCase().trim();
    const isAdminCharge = /te cargaron/i.test(tipoRaw || '');
    
    let fechaObj: Date | null = null;
    if (fechaRaw) {
        const attempt = new Date(fechaRaw.replace(' ', 'T'));
        fechaObj = isNaN(attempt.getTime()) ? new Date(fechaRaw) : attempt;
        if (isNaN(fechaObj.getTime())) fechaObj = null;
    }

    records.push({
      origen: 'AGENT',
      agent: agentName,
      fecha: fechaRaw,
      fechaObj,
      monto,
      usuario,
      turn: getTurnoFromDate(fechaObj),
      movementType: monto < 0 ? 'EGRESO' : 'INGRESO',
      isAdminCharge,
    });
  }
  return records;
};

const parseChuniorLines = (lines: string[]): ChuniorRecord[] => {
    const records: ChuniorRecord[] = [];
    for (const raw of lines) {
        if (!raw.trim()) continue;
        let parts = raw.split(/\t+/).map(p => p.trim()).filter(Boolean);
        if (parts.length < 2) {
            parts = raw.split(/\s{2,}/).map(p => p.trim()).filter(Boolean);
        }

        if (parts.length > 0 && /^\d{7,}$/.test(parts[0])) {
            parts.shift();
        }

        if (parts.length >= 2 && /^\d{2}-\d{2}-\d{4}$/.test(parts[0]) && /^\d{2}:\d{2}:\d{2}$/.test(parts[1])) {
            parts[0] = parts[0] + ' ' + parts[1];
            parts.splice(1, 1);
        }

        if (parts.length < 4) {
            console.warn("Skipping malformed Chunior line:", raw);
            continue;
        }

        const [fechaRaw, operator, walletRaw, montoRaw, usuarioRaw] = parts;
        let wallet = (walletRaw || '').replace(/.*-\s*/, '').trim();
        if (!wallet) wallet = (walletRaw || '').trim();
        const monto = parseAmountRaw(montoRaw);
        const usuario = (usuarioRaw || '').toLowerCase().trim();

        let fechaObj: Date | null = null;
        if (fechaRaw) {
            const m = fechaRaw.match(/(\d{2})-(\d{2})-(\d{4})\s+(\d{2}:\d{2}:\d{2})/);
            if (m) fechaObj = new Date(`${m[3]}-${m[2]}-${m[1]}T${m[4]}`);
            else {
                const attempt = new Date(fechaRaw.replace(' ', 'T'));
                if (!isNaN(attempt.getTime())) fechaObj = attempt;
            }
        }
        records.push({
            origen: 'CHUNIOR',
            fecha: fechaRaw,
            fechaObj,
            monto,
            usuario,
            operator: (operator || '').toLowerCase().trim(),
            wallet: wallet.toUpperCase().trim(),
            turn: getTurnoFromDate(fechaObj),
            movementType: monto < 0 ? 'EGRESO' : 'INGRESO',
        });
    }
    return records;
};


// --- CORE PROCESSING ---

export const processData = async (agentFiles: FileList | null, chuniorText: string) => {
  let allAgentRows: AgentRecord[] = [];
  if (agentFiles) {
    for (const file of Array.from(agentFiles)) {
      const text = await readFileAsText(file);
      const lines = splitLines(text);
      const agentNameMatch = file.name.match(/(?:agente|subagente)_?([a-zA-Z0-9]+)/i);
      const agentName = agentNameMatch?.[1]?.toLowerCase() || file.name.replace(/\.csv$/i, '');
      allAgentRows.push(...parseAgentLines(lines, agentName));
    }
  }

  const chuniorRows = parseChuniorLines(splitLines(chuniorText));
  
  const pairedData: PairedRecord[] = [];
  const matchedChuniorIndices = new Set<number>();
  let idCounter = 0;

  allAgentRows.forEach(a => {
    if (a.isAdminCharge) {
        pairedData.push({ id: `admin-${idCounter++}`, agent: a, chunior: null, status: 'OK', movementType: a.movementType });
    } else {
        let matchedIndex = -1;
        for (let j = 0; j < chuniorRows.length; j++) {
            if (matchedChuniorIndices.has(j)) continue;
            const c = chuniorRows[j];
            if (a.usuario && c.usuario && a.usuario === c.usuario && Math.abs(a.monto - c.monto) < 0.01) {
                matchedIndex = j;
                break;
            }
        }
        if (matchedIndex !== -1) {
            matchedChuniorIndices.add(matchedIndex);
            pairedData.push({ id: `match-${idCounter++}`, agent: a, chunior: chuniorRows[matchedIndex], status: 'OK', movementType: a.movementType });
        } else {
            pairedData.push({ id: `agent-miss-${idCounter++}`, agent: a, chunior: null, status: 'MISSING_CHUNIOR', movementType: a.movementType });
        }
    }
  });

  for (let j = 0; j < chuniorRows.length; j++) {
    if (!matchedChuniorIndices.has(j)) {
      pairedData.push({ id: `chunior-miss-${idCounter++}`, agent: null, chunior: chuniorRows[j], status: 'MISSING_AGENT', movementType: chuniorRows[j].movementType });
    }
  }
  
  pairedData.sort((a, b) => {
      const dateA = a.agent?.fechaObj || a.chunior?.fechaObj;
      const dateB = b.agent?.fechaObj || b.chunior?.fechaObj;
      return (dateA?.getTime() || 0) - (dateB?.getTime() || 0);
  });

  const availableFiltersData: AvailableFilters = {
    dates: [...new Set(pairedData.map(p => {
        const d = p.agent?.fechaObj || p.chunior?.fechaObj;
        return d ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` : '';
    }).filter(Boolean))].sort(),
    agents: [...new Set(allAgentRows.filter(r => r.agent).map(r => r.agent))].sort(),
    operators: [...new Set(chuniorRows.filter(r => r.operator).map(r => r.operator))].sort(),
    wallets: [...new Set(chuniorRows.filter(r => r.wallet).map(r => r.wallet))].sort(),
  };

  return { pairedData, summaryData: {} as SummaryData, availableFiltersData };
};


// --- EXPORT LOGIC ---

export const generateCSV = (data: PairedRecord[]) => {
  const headers = ['AGENTE_NOMBRE', 'TURNO', 'AGENTE_HORA', 'AGENTE_USUARIO', 'AGENTE_MONTO', 'CHUNIOR_HORA', 'CHUNIOR_USUARIO', 'CHUNIOR_MONTO', 'OPERADOR', 'BILLETERA', 'ESTADO', 'TIPO_MOVIMIENTO'];
  const rows = [headers.join(',')];

  for (const p of data) {
    const a = p.agent;
    const c = p.chunior;
    const estado = a?.isAdminCharge ? 'ADMIN_CHARGE' : p.status;
    const row = [
      a?.agent?.toUpperCase(),
      a?.turn || c?.turn,
      a?.fechaObj?.toISOString(),
      a?.isAdminCharge ? 'CARGA ADMIN' : a?.usuario,
      a?.monto?.toFixed(2),
      c?.fechaObj?.toISOString(),
      c?.usuario,
      c?.monto?.toFixed(2),
      c?.operator?.toUpperCase(),
      c?.wallet,
      estado,
      p.movementType,
    ].map(csvSafe).join(',');
    rows.push(row);
  }

  const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `comparacion_${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const generateStyledExcel = (data: PairedRecord[]) => {
  const headers = ['Agente', 'Turno', 'Fecha', 'Hora Agente', 'Usuario Agente', 'Monto Agente', 'Hora Chunior', 'Usuario Chunior', 'Monto Chunior', 'Operador', 'Billetera', 'Estado'];
  
  const mappedData = data.map(p => {
    const a = p.agent;
    const c = p.chunior;
    const recordDate = a?.fechaObj || c?.fechaObj;
    const estado = a?.isAdminCharge ? 'ADMIN_CHARGE' : p.status;
    return {
      agente: a?.agent?.toUpperCase() || '',
      turno: a?.turn || c?.turn || '',
      fecha: recordDate ? new Date(recordDate.getFullYear(), recordDate.getMonth(), recordDate.getDate()) : null,
      horaAgente: a?.fechaObj ? formatTime(a.fechaObj) : '',
      usuarioAgente: a?.isAdminCharge ? 'CARGA ADMIN' : (a?.usuario || ''),
      montoAgente: a?.monto ?? null,
      horaChunior: c?.fechaObj ? formatTime(c.fechaObj) : '',
      usuarioChunior: c?.usuario || '',
      montoChunior: c?.monto ?? null,
      operador: c?.operator?.toUpperCase() || '',
      billetera: c?.wallet || '',
      estado: estado,
    };
  });

  const ws = XLSX.utils.json_to_sheet(mappedData, { header: headers, skipHeader: true });

  // Add headers manually to apply styles
  XLSX.utils.sheet_add_aoa(ws, [headers], { origin: 'A1' });
  
  // Apply styles
  const range = XLSX.utils.decode_range(ws['!ref'] || 'A1');
  for (let R = 0; R <= range.e.r; ++R) {
    for (let C = 0; C <= range.e.c; ++C) {
      const cell_address = { c: C, r: R };
      const cell_ref = XLSX.utils.encode_cell(cell_address);
      const cell = ws[cell_ref];
      
      if (R === 0) { // Header row
        cell.s = headerStyle;
      } else { // Data rows
        const rowData = mappedData[R - 1];
        if (rowData) {
            const statusKey = rowData.estado as keyof typeof statusStyles;
            cell.s = statusStyles[statusKey] || statusStyles.DEFAULT;

            // Apply specific format for currency columns
            if (C === 5 || C === 8) { // Monto Agente & Monto Chunior
                cell.z = currencyFormat;
                cell.t = 'n';
            }
            if (C === 2) { // Fecha column
              cell.t = 'd';
              cell.z = 'dd/mm/yyyy';
            }
        }
      }
    }
  }

  // Auto-fit columns
  const colWidths = headers.map((h, i) => {
      const dataCol = mappedData.map(row => {
          const key = Object.keys(row)[i];
          const value = row[key as keyof typeof row];
          if (value === null || value === undefined) return 0;
          if (typeof value === 'number') return 12; // Fixed width for numbers
          return String(value).length;
      });
      return { wch: Math.max(h.length, ...dataCol) + 2 };
  });
  ws['!cols'] = colWidths;

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Comparacion');

  const fileName = `comparacion_${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.xlsx`;
  XLSX.writeFile(wb, fileName);
};
