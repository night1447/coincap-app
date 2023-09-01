import { createContext } from 'react';
import { IAdditionalCoin, IBag } from '../models';

export interface IContext extends IBag {
    removeCoin: (payload: IAdditionalCoin) => void,
    changeTotal: (payload: number) => void,
    addCoin: (payload: IAdditionalCoin) => void,
}

const initialState: IContext = {
    coins: [],
    count: 0,
    total: 0,
    removeCoin: () => {
    },
    addCoin: () => {
    },
    changeTotal: () => {
    },
};
const context = createContext(initialState);
export default context;
