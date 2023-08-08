import { ICoin, ICurrency } from '../models';
import getRoundingNumber from './getRoundingNumber.ts';
import getStylePriceDifference from './getStylePriceDifference.ts';
import styles from './utils.module.scss';

export interface IDifference {
    percent: number;
    value: string;
    className: string;
}

const getDifferencePrice = (coin: ICurrency, briefCaseCoins: ICoin[]): IDifference => {
    const findingIndex = briefCaseCoins.findIndex(item => item.coin.id === coin.id);
    if (findingIndex !== -1) {
        const currentCoin = briefCaseCoins[findingIndex];
        const percent = +coin.changePercent24Hr;
        const count = currentCoin.count;
        const price = +coin.priceUsd;
        const value = getRoundingNumber(((1 + percent / 100) * count * price) - count * price, 5);
        const sign = percent < 0 ? '-' : '+';
        return {
            percent: getRoundingNumber(+percent),
            value: `${sign}${value}`,
            className: getStylePriceDifference(percent.toString()),
        };
    } else {
        return {
            percent: 0,
            value: '+0',
            className: styles.neutral,
        };
    }
};
export default getDifferencePrice;
