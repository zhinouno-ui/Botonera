import React, { useState, useMemo, useCallback } from 'react';
import type { PairedRecord, SummaryData, Filters, AvailableFilters } from './types';
import { processData, generateCSV, generateStyledExcel } from './services/processingService';
import { Summary } from './components/Summary';
import { FilterControls } from './components/FilterControls';
import { ResultsTable } from './components/ResultsTable';

const App: React.FC = () => {
  const [agentFiles, setAgentFiles] = useState<FileList | null>(null);
  const [chuniorText, setChuniorText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const [allPairedData, setAllPairedData] = useState<PairedRecord[]>([]);
  const [summary, setSummary] = useState<SummaryData | null>(null);
  const [availableFilters, setAvailableFilters] = useState<AvailableFilters>({ dates: [], agents: [], operators: [], wallets: [] });
  const [ignoredIds, setIgnoredIds] = useState<Set<string>>(new Set());


  const [filters, setFilters] = useState<Filters>({
    date: '__ALL',
    agent: '__ALL',
    operator: '__ALL',
    wallet: '__ALL',
    turn: '__ALL',
    status: '__ALL',
    movement: '__ALL',
  });

  const handleProcess = useCallback(async () => {
    if (!agentFiles?.length && !chuniorText.trim()) {
      alert('Por favor, carga al menos un archivo de AGENTE o pega texto de CHUNIOR.');
      return;
    }
    setIsLoading(true);
    setIgnoredIds(new Set()); // Reset ignored IDs on new process
    try {
      const { pairedData, summaryData, availableFiltersData } = await processData(agentFiles, chuniorText);
      setAllPairedData(pairedData);
      
      setAvailableFilters(availableFiltersData);
      setFilters({
        date: '__ALL', agent: '__ALL', operator: '__ALL', wallet: '__ALL',
        turn: '__ALL', status: '__ALL', movement: '__ALL',
      });
    } catch (error) {
      console.error("Error processing data:", error);
      alert(`Ocurrió un error al procesar los datos: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  }, [agentFiles, chuniorText]);

  const filteredData = useMemo(() => {
    return allPairedData.filter(p => {
      const a = p.agent, c = p.chunior;
      if (filters.date !== '__ALL') {
          const recordDate = a?.fechaObj || c?.fechaObj;
          if (!recordDate) return false;
          const recordDateStr = `${recordDate.getFullYear()}-${String(recordDate.getMonth() + 1).padStart(2, '0')}-${String(recordDate.getDate()).padStart(2, '0')}`;
          if (recordDateStr !== filters.date) return false;
      }
      if (filters.agent !== '__ALL' && (!a || a.agent !== filters.agent)) return false;
      if (filters.operator !== '__ALL' && (!c || c.operator !== filters.operator)) return false;
      if (filters.wallet !== '__ALL' && (!c || c.wallet !== filters.wallet)) return false;
      if (filters.turn !== '__ALL') {
          const t = a?.turn || c?.turn || '';
          if (t !== filters.turn) return false;
      }
      if (filters.status !== '__ALL') {
          if (a?.isAdminCharge) {
              return filters.status === 'OK';
          }
          return p.status === filters.status;
      }
      if (filters.movement !== '__ALL' && p.movementType !== filters.movement) return false;
      return true;
    });
  }, [allPairedData, filters]);
  
  const activeFilteredData = useMemo(() => {
    return filteredData.filter(p => !ignoredIds.has(p.id));
  }, [filteredData, ignoredIds]);

  const calculatedSummary = useMemo<SummaryData | null>(() => {
    if (allPairedData.length === 0) return null;
    
    let agentTotal = 0, chuniorTotal = 0, agentIncome = 0, chuniorIncome = 0;
    let agentOutcome = 0, chuniorOutcome = 0, adminTotal = 0;
    
    activeFilteredData.forEach(p => {
      if (p.agent) {
        if(p.agent.isAdminCharge) {
            adminTotal += p.agent.monto;
        } else {
            agentTotal += p.agent.monto;
            p.agent.monto >= 0 ? agentIncome += p.agent.monto : agentOutcome += p.agent.monto;
        }
      }
      if (p.chunior) {
        chuniorTotal += p.chunior.monto;
        p.chunior.monto >= 0 ? chuniorIncome += p.chunior.monto : chuniorOutcome += p.chunior.monto;
      }
    });

    const pairedCount = filteredData.filter(p => !p.agent?.isAdminCharge && p.status === 'OK').length;
    const discrepancyCount = filteredData.filter(p => !p.agent?.isAdminCharge && p.status !== 'OK').length;

    return {
        agentTotal, chuniorTotal, adminTotal,
        totalDifference: agentTotal - chuniorTotal,
        agentIncome, chuniorIncome,
        incomeDifference: agentIncome - chuniorIncome,
        agentOutcome, chuniorOutcome,
        outcomeDifference: agentOutcome - chuniorOutcome,
        pairedCount, discrepancyCount,
    }
  }, [allPairedData, activeFilteredData, filteredData]);


  const handleExportCSV = useCallback(() => {
    if (!activeFilteredData.length) {
      alert('No hay datos activos para exportar.');
      return;
    }
    generateCSV(activeFilteredData);
  }, [activeFilteredData]);

  const handleExportExcel = useCallback(() => {
    if (!activeFilteredData.length) {
      alert('No hay datos activos para exportar.');
      return;
    }
    generateStyledExcel(activeFilteredData);
  }, [activeFilteredData]);

  const toggleIgnore = useCallback((id: string) => {
    setIgnoredIds(prev => {
        const newSet = new Set(prev);
        if (newSet.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        return newSet;
    });
  }, []);

  const hasInputs = useMemo(() => (agentFiles && agentFiles.length > 0) || chuniorText.trim() !== '', [agentFiles, chuniorText]);
  const hasResults = useMemo(() => allPairedData.length > 0, [allPairedData]);

  return (
    <div className="wrap">
      <h1 className="text-2xl font-bold text-white mb-2">Comparador AGENTE ⇄ CHUNIOR - ChinDiferencia</h1>
      
      <div className="card space-y-4">
        {/* Inputs and Actions */}
        <div className="row">
          <div style={{flex:1, minWidth:'280px'}}>
            <label htmlFor="agentFiles" className="text-sm text-[var(--muted)] block mb-2">Cargar CSV(s) AGENTE</label>
            <input 
              id="agentFiles" 
              type="file" 
              accept=".csv" 
              multiple 
              onChange={(e) => setAgentFiles(e.target.files)}
            />
            <p className="notes">Nombra los archivos (ej. `agente_chino.csv`) para identificar la fuente.</p>
          </div>

          <div style={{flex:1, minWidth:'300px'}}>
            <label htmlFor="chuniorText" className="text-sm text-[var(--muted)] block mb-2">Pegar texto CHUNIOR</label>
            <textarea 
              id="chuniorText" 
              placeholder="Pega aquí las líneas copiadas de Chunior..." 
              value={chuniorText}
              onChange={(e) => setChuniorText(e.target.value)}
            ></textarea>
            <p className="notes">Ej: <code>7007867 10-11-2025 13:48:45...</code></p>
          </div>
          
          <div style={{width: '220px'}}>
            <label className="text-sm text-[var(--muted)] block mb-2">Acciones</label>
            <div className="controls-vertical">
              <button 
                onClick={handleProcess} 
                disabled={isLoading || !hasInputs}
                className="btn small"
              >
                {isLoading ? 'Procesando...' : 'Procesar y emparejar'}
              </button>
              <button 
                onClick={handleExportCSV}
                disabled={!hasResults}
                className="btn small"
                style={{background:'linear-gradient(90deg,#f59e0b,#f97316)'}}
              >
                Exportar CSV
              </button>
              <button
                onClick={handleExportExcel}
                disabled={!hasResults}
                className="btn small"
              >
                Exportar Excel
              </button>
            </div>
          </div>
        </div>

        {/* Summary */}
        {calculatedSummary && <Summary summary={calculatedSummary} />}

        {/* Filters and Table */}
        {allPairedData.length > 0 && (
          <div className="pt-4 border-t border-[var(--border-color)]">
              <FilterControls 
                filters={filters} 
                setFilters={setFilters} 
                availableFilters={availableFilters} 
                totalRecords={filteredData.length}
                pairedCount={calculatedSummary?.pairedCount ?? 0}
                discrepancyCount={calculatedSummary?.discrepancyCount ?? 0}
              />
              <ResultsTable 
                data={filteredData} 
                ignoredIds={ignoredIds}
                onToggleIgnore={toggleIgnore}
              />
              <div className="notes">
                <p>• Matching por <strong>usuario normalizado</strong> y <strong>monto exacto</strong>.</p>
                <p>• Turnos: Mañana (06-14), Tarde (14-22), Noche (22-06).</p>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
