const getRoundingNumber = (number: number, fractionDigits?: number) => {
    const factor = 10 ** (fractionDigits || 6);
    return Math.round(number * factor) / factor;
};

export default getRoundingNumber;
