import { ICoin } from '../models';

const createIds = (massive: ICoin[]) => massive.map(item => item.coinId);
export default createIds;
