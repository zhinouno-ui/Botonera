import React from 'react';
import type { PairedRecord } from './tipos';

interface ResultsTableProps {
  data: PairedRecord[];
  ignoredIds: Set<string>;
  onToggleIgnore: (id: string) => void;
}

const formatAmount = (amount: number | undefined | null) => {
  if (amount === null || typeof amount === 'undefined') return '';
  return amount.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const formatTime = (d: Date | null | undefined): string => {
  if (!d || isNaN(d.getTime())) return '';
  const pad = (num: number) => num.toString().padStart(2, '0');
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
};

const iconEye = <svg fill="currentColor" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.816 1.097-2.074 2.157-3.642 2.766C9.646 11.668 8.028 12.5 6 12.5c-2.028 0-3.646-.832-5.008-2.234A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg>;
const iconEyeSlash = <svg fill="currentColor" viewBox="0 0 16 16"><path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM11.21 11.21A3.5 3.5 0 0 1 6.79 6.79l-1.615-1.615a3.5 3.5 0 0 1-4.474-4.474L.173 2.065a1 1 0 0 1 1.414-1.414l12.486 12.486a1 1 0 0 1-1.414 1.414L11.21 11.21z"/><path d="M16 8s-3-5.5-8-5.5a7.027 7.027 0 0 0-2.79.588l.607.607A3.5 3.5 0 0 1 8 5.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.816 1.097-2.074 2.157-3.642 2.766C9.646 11.668 8.028 12.5 6 12.5c-.313 0-.62-.014-.924-.04L4.69 14.33A12.64 12.64 0 0 0 8 15c5 0 8-5.5 8-5.5z"/></svg>;


const getStatusBadge = (status: PairedRecord['status'], isAdmin: boolean) => {
  if (isAdmin) return <span className="state-ok">✔ ADMIN</span>;
  switch (status) {
    case 'OK': return <span className="state-ok">✔ OK</span>;
    case 'MISSING_CHUNIOR': return <span className="state-bad">❌ Falta CH</span>;
    case 'MISSING_AGENT': return <span className="state-warn">❌ Falta AG</span>;
    default: return null;
  }
};

const getRowClass = (status: PairedRecord['status'], isAdmin: boolean, isIgnored: boolean) => {
    let className = '';
    if (isAdmin) className = 'ok';
    else if (status === 'OK') className = 'ok';
    else if (status === 'MISSING_CHUNIOR') className = 'miss-chunior';
    else if (status === 'MISSING_AGENT') className = 'miss-agente';

    if (isIgnored) className += ' ignored';
    return className;
};

export const TablaDeResultados: React.FC<ResultsTableProps> = ({ data, ignoredIds, onToggleIgnore }) => {
  return (
    <div className="table-wrap">
      <table role="table">
        <thead>
          <tr>
            <th style={{minWidth:'50px'}}>Agente</th>
            <th style={{minWidth:'60px'}}>Turno</th>
            <th style={{minWidth:'100px'}}>Agente hora</th>
            <th style={{minWidth:'120px'}}>Agente usuario</th>
            <th style={{minWidth:'90px'}}>Agente monto</th>
            <th style={{minWidth:'100px'}}>Chunior hora</th>
            <th style={{minWidth:'120px'}}>Chunior usuario</th>
            <th style={{minWidth:'90px'}}>Chunior monto</th>
            <th style={{minWidth:'100px'}}>Operador</th>
            <th style={{minWidth:'100px'}}>Billetera</th>
            <th style={{minWidth:'80px'}}>Estado</th>
            <th style={{width:'50px'}}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
                <td colSpan={12} className="text-center p-8">No hay registros que coincidan con los filtros.</td>
            </tr>
          ) : (
            data.map(p => {
              const { agent, chunior } = p;
              const turn = agent?.turn || chunior?.turn || '';
              const isIgnored = ignoredIds.has(p.id);
              const isAdmin = agent?.isAdminCharge ?? false;

              return (
                <tr key={p.id} className={getRowClass(p.status, isAdmin, isIgnored)}>
                  <td>{agent?.agent.toUpperCase() || ''}</td>
                  <td>{turn}</td>
                  <td>{formatTime(agent?.fechaObj)}</td>
                  <td>{isAdmin ? 'CARGA ADMIN' : (agent?.usuario || '')}</td>
                  <td>$ {formatAmount(agent?.monto)}</td>
                  <td>{formatTime(chunior?.fechaObj)}</td>
                  <td>{chunior?.usuario || ''}</td>
                  <td>$ {formatAmount(chunior?.monto)}</td>
                  <td>{chunior?.operator.toUpperCase() || ''}</td>
                  <td>{chunior?.wallet || ''}</td>
                  <td>{getStatusBadge(p.status, isAdmin)}</td>
                  <td>
                    {p.status !== 'OK' && !isAdmin && (
                        <button 
                            className="action-btn"
                            title={isIgnored ? 'Incluir en cálculo' : 'Ignorar en cálculo'}
                            onClick={() => onToggleIgnore(p.id)}
                        >
                            {isIgnored ? iconEye : iconEyeSlash}
                        </button>
                    )}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};
