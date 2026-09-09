import type { PortfolioSummary } from "@/types/portfolio";

export function calcPortfolioSummary(
  holdings: { marketValue: number; costBasis: number }[]
): PortfolioSummary {
  const marketValue = holdings.reduce((sum, h) => sum + h.marketValue, 0);
  const costBasis = holdings.reduce((sum, h) => sum + h.costBasis, 0);
  const unrealizedGainLoss = marketValue - costBasis;
  const unrealizedGainLossPct =
    costBasis === 0 ? 0 : unrealizedGainLoss / costBasis;

  return {
    marketValue,
    costBasis,
    unrealizedGainLoss,
    unrealizedGainLossPct,
  };
}

export function estimatedMonthlyInterest(balance: number, apy: number) {
  return balance * (apy / 12);
}
