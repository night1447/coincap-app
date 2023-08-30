import { trpc } from '../lib/trpc.ts';

export const CoinService = () => {
    const coins = trpc.coins.getCoins.useQuery;
    const coin = trpc.coins.getCoin.useQuery;
    const history = trpc.coins.getHistory.useQuery;
    return { coins, coin, history };
};

