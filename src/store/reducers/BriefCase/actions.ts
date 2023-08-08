import Slice from './slice.ts';
import { ICoin } from '../../../models';

const actions = Slice.actions;

const addCoinAction = (coin: ICoin) => actions.addCoin(coin);
const removeCoinAction = (coinId: string) => actions.removeCoin(coinId);

export { addCoinAction, removeCoinAction };
