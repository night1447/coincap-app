import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdditionalCoin, IBriefCase } from './types.ts';
import getRoundingNumber from '../../../utils/getRoundingNumber.ts';


const initialState: IBriefCase = {
    coins: [],
    count: 0,
    total: 0,
};

const Slice = createSlice({
    name: 'briefCase',
    initialState: initialState,
    reducers: {
        addCoin(state, action: PayloadAction<IAdditionalCoin>) {
            const findingCoinIndex = state.coins.findIndex(coin => coin.coinId === action.payload.coinId);
            if (findingCoinIndex !== -1) {
                state.coins[findingCoinIndex].count += action.payload.count;
                state.coins[findingCoinIndex].price = action.payload.price;
            } else {
                state.coins.push(action.payload);
                state.count += 1;
            }
            state.total = getRoundingNumber(state.total + action.payload.price * action.payload.count);
        },
        removeCoin(state, action: PayloadAction<IAdditionalCoin>) {
            state.coins = state.coins.filter(coin => coin.coinId !== action.payload.coinId);
            state.total = getRoundingNumber(state.total - action.payload.price * action.payload.count);
            state.count -= 1;
        },
        changeTotal(state, action: PayloadAction<number>) {
            state.total = getRoundingNumber(action.payload);
        },
    },
});

export default Slice;
