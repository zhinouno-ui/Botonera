export interface BaseRecord {
  origen: 'AGENT' | 'CHUNIOR';
  fecha: string;
  fechaObj: Date | null;
  monto: number;
  usuario: string;
  turn: Turno;
  movementType: Movimiento;
}

export interface AgentRecord extends BaseRecord {
  origen: 'AGENT';
  agent: string;
  isAdminCharge: boolean;
}

export interface ChuniorRecord extends BaseRecord {
  origen: 'CHUNIOR';
  operator: string;
  wallet: string;
}

export interface PairedRecord {
  id: string;
  agent: AgentRecord | null;
  chunior: ChuniorRecord | null;
  status: Estado;
  movementType: Movimiento;
}

export interface SummaryData {
  agentTotal: number;
  chuniorTotal: number;
  totalDifference: number;
  adminTotal: number;
  agentIncome: number;
  chuniorIncome: number;
  incomeDifference: number;
  agentOutcome: number;
  chuniorOutcome: number;
  outcomeDifference: number;
  pairedCount: number;
  discrepancyCount: number;
}

export interface Filters {
  date: string;
  agent: string;
  operator: string;
  wallet: string;
  turn: Turno | '__ALL';
  status: Estado | '__ALL';
  movement: Movimiento | '__ALL';
}

export interface AvailableFilters {
  dates: string[];
  agents: string[];
  operators: string[];
  wallets: string[];
}

export type Turno = 'TM' | 'TT' | 'TN' | '';
export type Estado = 'OK' | 'MISSING_CHUNIOR' | 'MISSING_AGENT';
export type Movimiento = 'INGRESO' | 'EGRESO';
