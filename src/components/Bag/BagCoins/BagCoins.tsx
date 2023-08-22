import { useEffect, useState } from 'react';

import { BagCoin } from '../BagCoin/BagCoin.tsx';
import { IWideCoin } from '../../../models';
import createCoinIds from '../../../utils/createCoinIds.ts';
import { useCoinService } from '../../../services/useCoinService.ts';
import { useNameContext } from '../../../hooks/useNameContext.ts';

import styles from './list.module.scss';


export const BagCoins = () => {
    const bag = useNameContext();
    const [coins, setCoins] = useState<IWideCoin[]>([]);
    const { getCertainCoins } = useCoinService();
    useEffect(() => {
        getCertainCoins(createCoinIds(bag.coins)).then((response) => {
            const result = response.map((item, index): IWideCoin => ({
                coin: item,
                count: bag.coins[index]?.count,
            }));
            setCoins(result);
        });
    }, [bag.coins]);
    return (
        <ul className={styles.list}>
            {coins.map(coin => <BagCoin key={coin.coin.id} coin={coin} />)}
        </ul>
    );
};
