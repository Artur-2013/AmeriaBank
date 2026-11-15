// cash = կանխիկ, nonCash = անկանխիկ; buy = առք, sell = վաճառք
export const rates = [
  { code: "USD", cash: { buy: 357.5, sell: 362.5 }, nonCash: { buy: 357.5, sell: 362.5 } },
  { code: "EUR", cash: { buy: 391.5, sell: 405.5 }, nonCash: { buy: 391.5, sell: 405.5 } },
  { code: "GBP", cash: { buy: 466.5, sell: 486.5 }, nonCash: { buy: 466.5, sell: 486.5 } },
  { code: "RUB", cash: { buy: 4.13, sell: 4.45 }, nonCash: { buy: 4.24, sell: 4.54 } },
  { code: "GEL", cash: { buy: 133.5, sell: 144.0 }, nonCash: null },
];

export const format = (n) => (n == null ? "" : n.toFixed(2));