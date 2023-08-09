const getRoundingNumber = (number: number, fractionDigits?: number) => {
    const factor = 10 ** (fractionDigits || 2);
    return Math.round(number * factor) / factor;
};

export default getRoundingNumber;
