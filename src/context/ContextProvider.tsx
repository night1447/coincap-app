import { FC, PropsWithChildren, useEffect, useState } from 'react';
import Context from './index.ts';
import { addLocalStorage, getLocalStorage } from '../utils/localStorage.ts';
import createCoinIds from '../utils/createCoinIds.ts';
import { IAdditionalCoin, IBriefCase } from '../models';
import useCoinService from '../services/useCoinService.ts';

const epsilon = 1e-100;
const getInitialState = () => {
    const defaultState: IBriefCase = {
        coins: [],
        count: 0,
        total: 0,
    };
    const initialState: IBriefCase = getLocalStorage('briefCase') ? JSON.parse(getLocalStorage('briefCase') as string) : defaultState;
    return initialState;
};
const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [briefCase, setBriefCase] = useState<IBriefCase>(getInitialState());
    const { getCertainCoins } = useCoinService();
    const removeCoinHandler = (payload: IAdditionalCoin) => {
        setBriefCase((state) => {
            const newState: IBriefCase = {
                ...state,
            };
            newState.total = state.total - payload.price * payload.count;

            if (Math.abs(newState.total) < epsilon) {
                newState.total = 0;
            }
            newState.coins = state.coins.filter(item => item.coinId !== payload.coinId);
            newState.count -= 1;
            return newState;
        });

    };
    const addCoinHandler = (payload: IAdditionalCoin) => {
        setBriefCase((state) => {
            const newState: IBriefCase = {
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
        setBriefCase((prevState) => ({
            ...prevState,
            total: payload,
        }));
    };
    useEffect(() => {
        if (briefCase.coins.length) {
            getCertainCoins(createCoinIds(briefCase.coins)).then(items => {
                const currentSum = items.reduce((currentSum, item, index) => currentSum + +item.priceUsd * briefCase.coins[index].count, 0);
                changeTotalHandler(currentSum);
            });
        }
    }, [briefCase.coins]);

    useEffect(() => {
        addLocalStorage('briefCase', JSON.stringify(briefCase));
    }, [briefCase]);

    return (
        <Context.Provider value={{
            ...briefCase,
            removeCoin: removeCoinHandler,
            changeTotal: changeTotalHandler,
            addCoin: addCoinHandler,
        }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
