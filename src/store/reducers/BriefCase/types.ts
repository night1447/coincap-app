import { ICoin } from '../../../models';

export interface IBriefCase {
    coins: ICoin[];
    total: number;
    count: number;
}

export interface IAdditionalCoin extends ICoin {
    price: number;
}
