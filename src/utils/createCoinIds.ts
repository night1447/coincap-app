import { ICoin } from '../models';

const createCoinIds = (massive: ICoin[]) => massive.map(item => item.coinId);
export default createCoinIds;
