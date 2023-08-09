const getRoundingNumber = (number: number, fractionDigits?: number) => {
    console.log(number);
    return +(+number).toFixed(fractionDigits || 2);
};
export default getRoundingNumber;
