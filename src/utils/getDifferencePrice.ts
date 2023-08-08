import getRoundingNumber from './getRoundingNumber.ts';
import getStylePriceDifference from './getStylePriceDifference.ts';

export interface IDifference {
    percent: number;
    value: string;
    className: string;
}

const getDifferencePrice = (currentSum: number, beginSum: number): IDifference => {
    //TODO:normal difference price
    const value = getRoundingNumber(beginSum - currentSum);
    console.log(currentSum, beginSum);
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
