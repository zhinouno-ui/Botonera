import React from 'react';
import type { SummaryData } from './tipos';

interface SummaryCardProps {
  label: string;
  value: number;
  colorClass?: string;
  isCurrency?: boolean;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ label, value, colorClass = 'text-[var(--text)]', isCurrency = true }) => {
  const formattedValue = isCurrency
    ? value.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : value.toString();

  return (
    <div className="summary .badge">
      <span>{label}</span>
      <strong className={colorClass}>{formattedValue}</strong>
    </div>
  );
};

interface ResumenProps {
  summary: SummaryData;
}

export const Resumen: React.FC<ResumenProps> = ({ summary }) => {
  return (
    <div className="summary">
      <SummaryCard label="Total Agente" value={summary.agentTotal} />
      <SummaryCard label="Total Chunior" value={summary.chuniorTotal} />
      <SummaryCard label="Diferencia Total" value={summary.totalDifference} colorClass={summary.totalDifference !== 0 ? 'diff' : 'ok'} />
      <SummaryCard label="Recargas Admin" value={summary.adminTotal} colorClass="warn" />
      <div className="col-span-full"></div>
      <SummaryCard label="Ingresos Agente" value={summary.agentIncome} colorClass="ok" />
      <SummaryCard label="Ingresos Chunior" value={summary.chuniorIncome} colorClass="ok" />
      <SummaryCard label="Dif. Ingresos" value={summary.incomeDifference} colorClass={summary.incomeDifference !== 0 ? 'diff' : 'ok'} />
      <div className="col-span-full md:col-span-1"></div>
      <SummaryCard label="Egresos Agente" value={summary.agentOutcome} colorClass="bad" />
      <SummaryCard label="Egresos Chunior" value={summary.chuniorOutcome} colorClass="bad" />
      <SummaryCard label="Dif. Egresos" value={summary.outcomeDifference} colorClass={summary.outcomeDifference !== 0 ? 'diff' : 'ok'} />
    </div>
  );
};
