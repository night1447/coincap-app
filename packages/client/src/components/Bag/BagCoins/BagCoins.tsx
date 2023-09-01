import { useEffect, useState } from 'react';

import { BagCoin } from '../BagCoin/BagCoin';
import { IWideCoin } from '../../../models';
import createCoinIds from '../../../utils/createCoinIds';
import { CoinService } from '../../../services/CoinService';
import { useNameContext } from '../../../hooks/useNameContext';

import styles from './list.module.scss';


export const BagCoins = () => {
    const bag = useNameContext();
    const [coins, setCoins] = useState<IWideCoin[]>([]);
    const response = CoinService().coins({ ids: createCoinIds(bag.coins) });
    useEffect(() => {
        if (response.data) {
            const result = response.data.map((item, index): IWideCoin => ({
                coin: item,
                count: bag.coins[index]?.count,
            }));
            setCoins(result);
        }

    }, [bag.coins, response.data]);
    return (
        <ul className={styles.list}>
            {coins.map(coin => <BagCoin key={coin.coin.id} coin={coin} />)}
        </ul>
    );
};
