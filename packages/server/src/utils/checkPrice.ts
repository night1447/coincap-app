import getRoundingNumber from './getRoundingNumber';

export const checkPrice = (price: number) => {
    const precisionNumber = +(+price).toPrecision(4);
    const roundingNumber = getRoundingNumber(+price);
    if (precisionNumber > roundingNumber) {
        return precisionNumber;
    }
    return roundingNumber;

};
