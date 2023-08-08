export interface ICurrency {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  priceUsd: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export interface IHistory {
  priceUsd: string;
  time: number;
}

export interface ICoin {
  coinId: string;
  count: number;
}

export interface IWideCoin {
  coin: ICurrency;
  count: number;
}
