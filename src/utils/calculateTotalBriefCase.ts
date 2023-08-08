import { ICoin } from '../models';
import getRoundingNumber from './getRoundingNumber.ts';

const calculateTotalBriefCase = (coins: ICoin[]): number => {
    const value = coins.reduce((result, coin) => result + +coin.coin.priceUsd * coin.count, 0);
    return getRoundingNumber(value);
};
export default calculateTotalBriefCase;
