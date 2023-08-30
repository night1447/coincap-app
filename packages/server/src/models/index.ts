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

export type IInterval =
    | 'm1'
    | 'm5'
    | 'm15'
    | 'm30'
    | 'h1'
    | 'h2'
    | 'h6'
    | 'h12'
    | 'd1';

export interface ISettings {
    limit?: number;
    offset?: number;
    page?: number;
    step?: number;
    ids?: string[];
}

export interface IHistorySettings {
    interval?: IInterval,
    id: string
}

export interface IHistory {
    priceUsd: string;
    time: number;
}
