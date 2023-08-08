import getRoundingNumber from './getRoundingNumber.ts';
import getStylePriceDifference from './getStylePriceDifference.ts';

export interface IDifference {
    percent: number;
    value: string;
    className: string;
}

const getDifferencePrice = (currentSum: number, beginSum: number): IDifference => {
    const value = beginSum - currentSum;
    let percent = 0;
    if (currentSum) {
        percent = (currentSum - beginSum) / currentSum;
    }
    const sign = percent < 0 ? '-' : '+';
    return {
        percent: getRoundingNumber(+percent),
        value: `${sign}${value}`,
        className: getStylePriceDifference(percent.toString()),
    };
};
export default getDifferencePrice;
