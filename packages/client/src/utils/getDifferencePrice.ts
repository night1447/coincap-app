import getStylePriceDifference from './getStylePriceDifference';
import { IAdditionalCoin, ICurrency } from '../models';

export interface IDifference {
    percent: number;
    value: string;
    className: string;
}

export const initialState: IDifference = {
    percent: 0,
    value: '+0',
    className: getStylePriceDifference('0'),
};

const getDifferencePrice = (coins: IAdditionalCoin[], currentCoins: ICurrency[]): IDifference => {
    let totalValue: number = 0;
    let totalPercent: number = 0;
    if (coins.length >= 1) {
        const sortedCoins = coins.sort((first, second) => {
            if (first.price <= second.price) {
                return 1;
            }
            return -1;
        });
        currentCoins.map((currentCoin, index) => {
            const count = sortedCoins[index].count;
            const different = (-sortedCoins[index].price + +currentCoin.priceUsd);
            const value = +(different * count).toPrecision(2);
            const percent = different / +sortedCoins[index].price;
            totalValue += value;
            totalPercent += percent;
        });

        const sign = totalValue >= 0 ? '+' : '-';
        return {
            percent: +totalPercent.toPrecision(2),
            value: `${sign}${Math.abs(totalValue)}`,
            className: getStylePriceDifference(totalValue.toString()),
        };
    }
    return initialState;
};
export default getDifferencePrice;
