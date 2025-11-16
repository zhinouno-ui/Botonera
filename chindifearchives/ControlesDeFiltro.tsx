import React from 'react';
import type { Filters, AvailableFilters } from './tipos';

interface FilterControlsProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  availableFilters: AvailableFilters;
  totalRecords: number;
  pairedCount: number;
  discrepancyCount: number;
}

const FilterSelect: React.FC<{ label: string; name: keyof Filters; value: string; options: { value: string; label: string }[]; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }> = ({ label, name, value, options, onChange }) => (
  <div>
    <label htmlFor={name} className="text-xs text-[var(--muted)] block mb-1">{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-[var(--glass)] border border-[var(--border-color)] rounded-md py-1.5 px-2 text-sm text-white"
    >
      {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
    </select>
  </div>
);

export const ControlesDeFiltro: React.FC<FilterControlsProps> = ({ filters, setFilters, availableFilters, totalRecords, pairedCount, discrepancyCount }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filters">
       <div className="badge">Registros totales: <span>{totalRecords}</span></div>
      <FilterSelect label="Fecha" name="date" value={filters.date} onChange={handleFilterChange} options={[
        { value: '__ALL', label: 'Todos los días' },
        ...availableFilters.dates.map(d => ({ value: d, label: d })),
      ]} />
      <FilterSelect label="Agente" name="agent" value={filters.agent} onChange={handleFilterChange} options={[
        { value: '__ALL', label: 'Todos' },
        ...availableFilters.agents.map(a => ({ value: a, label: a.toUpperCase() })),
      ]} />
      <FilterSelect label="Operador" name="operator" value={filters.operator} onChange={handleFilterChange} options={[
        { value: '__ALL', label: 'Todos' },
        ...availableFilters.operators.map(o => ({ value: o, label: o.toUpperCase() })),
      ]} />
      <FilterSelect label="Billetera" name="wallet" value={filters.wallet} onChange={handleFilterChange} options={[
        { value: '__ALL', label: 'Todas' },
        ...availableFilters.wallets.map(w => ({ value: w, label: w.toUpperCase() })),
      ]} />
      <FilterSelect label="Turno" name="turn" value={filters.turn} onChange={handleFilterChange} options={[
        { value: '__ALL', label: 'Todos' },
        { value: 'TM', label: 'Mañana (06-14)' },
        { value: 'TT', label: 'Tarde (14-22)' },
        { value: 'TN', label: 'Noche (22-06)' },
      ]} />
      <FilterSelect label="Estado" name="status" value={filters.status} onChange={handleFilterChange} options={[
        { value: '__ALL', label: 'Todos' },
        { value: 'OK', label: 'OK' },
        { value: 'MISSING_CHUNIOR', label: 'Falta en Chunior' },
        { value: 'MISSING_AGENT', label: 'Falta en Agente' },
      ]} />
      <FilterSelect label="Tipo Mov." name="movement" value={filters.movement} onChange={handleFilterChange} options={[
        { value: '__ALL', label: 'Todos' },
        { value: 'INGRESO', label: 'Ingresos' },
        { value: 'EGRESO', label: 'Egresos' },
      ]} />
      <div style={{marginLeft: 'auto'}} className="badge">
        Emparejados: <span>{pairedCount}</span> · Discrepancias: <span>{discrepancyCount}</span>
      </div>
    </div>
  );
};
