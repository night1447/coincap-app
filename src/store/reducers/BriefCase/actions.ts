import Slice from './slice.ts';
import { IAdditionalCoin } from './types.ts';

const actions = Slice.actions;

const addCoinAction = (coin: IAdditionalCoin) => actions.addCoin(coin);
const removeCoinAction = (coin: IAdditionalCoin) => actions.removeCoin(coin);
const changeTotalAction = (total: number) => actions.changeTotal(total);

export { addCoinAction, removeCoinAction, changeTotalAction };
