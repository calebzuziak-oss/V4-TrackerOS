export type AccountType = "HYSA" | "BROKERAGE" | "ROTH_IRA";

export type SecurityType = "STOCK" | "ETF" | "MUTUAL_FUND";

export interface AccountSummary {
  id: string;
  name: string;
  type: AccountType;
  balance: number;
  currency: string;
  apy?: number;
}

export interface HoldingRow {
  id: string;
  ticker: string;
  name: string;
  securityType: SecurityType;
  shares: number;
  avgCost: number;
  currentPrice: number;
  marketValue: number;
  totalReturnPct: number;
  allocationPct: number;
  dividendYield?: number;
}

export interface PortfolioSummary {
  marketValue: number;
  costBasis: number;
  unrealizedGainLoss: number;
  unrealizedGainLossPct: number;
}
