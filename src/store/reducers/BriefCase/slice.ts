import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICoin } from '../../../models';
import { IWallet } from './types.ts';


const initialState: IWallet = {
    coins: [],
    count: 0,
};

const Slice = createSlice({
    name: 'briefCase',
    initialState: initialState,
    reducers: {
        addCoin(state, action: PayloadAction<ICoin>) {
            const findingCoinIndex = state.coins.findIndex(coin => coin.coin.id === action.payload.coin.id);
            if (findingCoinIndex !== -1) {
                state.coins[findingCoinIndex].count += action.payload.count;
            } else {
                state.coins.push(action.payload);
                state.count += 1;
            }
        },
        removeCoin(state, action: PayloadAction<string>) {
            state.coins = state.coins.filter(coin => coin.coin.id !== action.payload);
            state.count -= 1;
        },
    },
});

export default Slice;
