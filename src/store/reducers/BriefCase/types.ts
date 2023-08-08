import { ICoin } from '../../../models';

export interface IWallet {
    coins: ICoin[];
    count: number;
}
