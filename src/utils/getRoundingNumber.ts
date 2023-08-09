const getRoundingNumber = (number: number, fractionDigits?: number) => +(+number).toFixed(fractionDigits || 2);

export default getRoundingNumber;
