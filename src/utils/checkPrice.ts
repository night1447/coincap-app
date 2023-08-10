import getRoundingNumber from './getRoundingNumber.ts';

export const checkPrice = (price: number) => {
    const precisionNumber = +(+price).toPrecision(4);
    const roundingNumber = getRoundingNumber(+price);
    if (precisionNumber > roundingNumber) {
        return precisionNumber;
    }
    return roundingNumber;

};
