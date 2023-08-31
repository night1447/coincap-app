import $api from '../api/api.ts';

const BASE_STEP = 30;
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
