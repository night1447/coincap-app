import { ICoin } from '../../../models';

export interface IBriefCase {
    coins: IAdditionalCoin[];
    total: number;
    count: number;
}

export interface IAdditionalCoin extends ICoin {
    price: number;
}
