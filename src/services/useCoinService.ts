import $api from '../api';
import { trpc } from '../lib/trpc.ts';

const BASE_STEP = 30;
export const CoinService = () => {
    const coins = trpc.coins.getCoins.useQuery;
    const coin = trpc.coins.getCoin.useQuery;
    const history = trpc.coins.getCoin.useQuery;
    return { coins, coin, history };
};
export const useCoinService = () => {
    const getAllCoins = async (limit?: number) => {
        return await $api.getCoins({ limit });
    };
    const getCoinById = async (id: string) => {
        return await $api.getCoin(id);
    };
    const getCertainCoins = async (ids: string[]) => {
        return await $api.getCoins({ ids });
    };
    const getHistoryCoin = async (id: string) => {
        return await $api.getHistory(id);
    };
    const getCertainPageCoins = async (page: number) => {
        return await $api.getCoins({ page, step: BASE_STEP });
    };
    return { getAllCoins, getCoinById, getCertainCoins, getHistoryCoin, getCertainPageCoins };
};


