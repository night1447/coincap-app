import getStylePriceDifference from './getStylePriceDifference.ts';
import { ICurrency } from '../models';
import { IAdditionalCoin } from '../store/reducers/BriefCase/types.ts';

export interface IDifference {
    percent: number;
    value: string;
    className: string;
}

const getDifferencePrice = (coins: IAdditionalCoin[], coin: ICurrency): IDifference => {
    const findingIndex = coins.findIndex(item => item.coinId === coin.id);
    if (findingIndex !== -1) {
        const currentCoin = coins[findingIndex];
        const count = currentCoin.count;
        const different = (-currentCoin.price + +coin.priceUsd);
        const value = +(different * count).toPrecision(2);
        const percent = different / +currentCoin.price;
        const sign = value >= 0 ? '+' : '-';
        return {
            percent: +percent.toPrecision(2),
            value: `${sign}${Math.abs(value)}`,
            className: getStylePriceDifference(value.toString()),
        };
    }
    return {
        percent: 0,
        value: `+0`,
        className: getStylePriceDifference('0'),
    };
};
export default getDifferencePrice;
