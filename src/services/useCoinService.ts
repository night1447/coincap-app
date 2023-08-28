import { trpc } from '../lib/trpc.ts';

const BASE_STEP = 30;
export const useCoinService = () => {
    const query = trpc.coins.getCoins.useQuery({});
    const coinQuery = trpc.coins.getCoin.useQuery({ id: 'bitcoin' });
    const historyQuery = trpc.coins.getHistory.useQuery({ id: 'bitcoin' });
    const getAllCoins = async (limit?: number) => {
        return await query.data;

    };
    const getCoinById = async (id: string) => {
        return await coinQuery.data;
    };
    const getCertainCoins = async (ids: string[]) => {
        return await query.data;
    };
    const getHistoryCoin = async (id: string) => {
        return await historyQuery.data;
    };
    const getCertainPageCoins = async (page: number) => {
        return await query.data;
    };
    return { getAllCoins, getCoinById, getCertainCoins, getHistoryCoin, getCertainPageCoins };
};

