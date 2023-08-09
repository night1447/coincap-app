import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { IAdditionalCoin, IBriefCase } from '../../store/reducers/BriefCase/types.ts';
import Context from '../../context';
import getRoundingNumber from '../../utils/getRoundingNumber.ts';
import { addLocalStorage, getLocalStorage } from '../../utils/localStorage.ts';

const init: IBriefCase = {
    coins: [],
    count: 0,
    total: 0,
};

const initialState: IBriefCase = JSON.parse(getLocalStorage('briefCase') || '') || init;

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [briefCase, setBriefCase] = useState<IBriefCase>(initialState);
    const removeCoinHandler = (payload: IAdditionalCoin) => {
        setBriefCase((state) => {
            const newState: IBriefCase = {
                ...state,
            };
            newState.coins = state.coins.filter(coin => coin.coinId !== payload.coinId);
            newState.total = getRoundingNumber(state.total - payload.price * payload.count);
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
            newState.total = getRoundingNumber(state.total + payload.price * payload.count);
            console.log(newState);
            return newState;
        });
    };
    const changeTotalHandler = (payload: number) => {
        setBriefCase((prevState) => ({
            ...prevState,
            total: getRoundingNumber(payload),
        }));
    };
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
