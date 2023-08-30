import { PropsWithChildren, useEffect, useState } from 'react';

import { IAdditionalCoin, IBag } from '../models';
import { CoinService } from '../services/CoinService.ts';
import Context from './index';
import { addLocalStorage, getLocalStorage } from '../utils/localStorage';
import createCoinIds from '../utils/createCoinIds';

const epsilon = 1e-100000;
const getInitialState = () => {
    const defaultState: IBag = {
        coins: [],
        count: 0,
        total: 0,
    };
    const initialState: IBag = getLocalStorage('bag') ? JSON.parse(getLocalStorage('bag') as string) : defaultState;
    return initialState;
};
const ContextProvider = ({ children }: PropsWithChildren) => {
    const [bag, setBag] = useState<IBag>(getInitialState());
    const coins = CoinService().coins({ ids: createCoinIds(bag.coins) });
    const removeCoinHandler = (payload: IAdditionalCoin) => {
        setBag((state) => {
            const newState: IBag = {
                ...state,
            };
            newState.total = state.total - payload.price * payload.count;

            if (Math.abs(newState.total) < epsilon || newState.total < 0) {
                newState.total = 0;
            }
            newState.coins = state.coins.filter(item => item.coinId !== payload.coinId);
            newState.count -= 1;
            return newState;
        });

    };
    const addCoinHandler = (payload: IAdditionalCoin) => {
        setBag((state) => {
            const newState: IBag = {
                ...state,
            };
            const findingCoinIndex = state.coins.findIndex(coin => coin.coinId === payload.coinId);
            if (findingCoinIndex !== -1) {
                newState.coins[findingCoinIndex].count += payload.count;
                newState.coins[findingCoinIndex].price = payload.price;
            } else {
                newState.coins.push(payload);
                newState.count += 1;
            }
            newState.total = state.total + payload.price * payload.count;
            return newState;
        });
    };
    const changeTotalHandler = (payload: number) => {
        setBag((prevState) => ({
            ...prevState,
            total: payload,
        }));
    };
    useEffect(() => {
        if (bag.coins.length) {
            if (coins.data) {
                const currentSum = coins.data.reduce((currentSum, item, index) => currentSum + +item.priceUsd * bag.coins[index].count, 0);
                changeTotalHandler(currentSum);
            }
        }
    }, [bag.coins]);

    useEffect(() => {
        addLocalStorage('bag', JSON.stringify(bag));
    }, [bag]);

    return (
        <Context.Provider value={{
            ...bag,
            removeCoin: removeCoinHandler,
            changeTotal: changeTotalHandler,
            addCoin: addCoinHandler,
        }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
