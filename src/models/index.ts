export interface ICurrency {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  priceUsd: number;
  supply: number;
  maxSupply: number | null;
  marketCapUsd: number;
  volumeUsd24Hr: number;
  changePercent24Hr: number;
  vwap24Hr: number;
}

export interface IHistory {
  priceUsd: string;
  time: number;
}

export interface IBriefCase {
  coins: IAdditionalCoin[];
  total: number;
  count: number;
}

export interface ICoin {
  coinId: string;
  count: number;
}

export interface IAdditionalCoin extends ICoin {
  price: number;
}

export interface IWideCoin {
  coin: ICurrency;
  count: number;
}
