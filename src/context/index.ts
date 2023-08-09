import { createContext } from 'react';
import { IAdditionalCoin, IBriefCase } from '../models';

interface IContext extends IBriefCase {
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
