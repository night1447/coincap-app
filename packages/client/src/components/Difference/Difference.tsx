import { useEffect, useState } from 'react';

import getDifferencePrice, { IDifference } from '../../utils/getDifferencePrice';
import createCoinIds from '../../utils/createCoinIds';
import getRoundingNumber from '../../utils/getRoundingNumber';
import getCurrency from '../../utils/getCurrency';
import { Typography } from '../UI/Typography/Typography';
import { CoinService } from '../../services/CoinService';
import { useNameContext } from '../../hooks/useNameContext';

import styles from './difference.module.scss';

const initialState: IDifference = {
    className: '',
    value: '+0',
    percent: 0,
};
export const Difference = () => {
    const bag = useNameContext();
    const [difference, setDifference] = useState<IDifference>(initialState);
    const coins = CoinService().coins({ ids: createCoinIds(bag.coins) });
    useEffect(() => {
        if (bag.coins.length > 0) {
            if (coins.data) {
                setDifference(getDifferencePrice(bag.coins, coins.data));
            }
        }
    }, [bag.coins, coins.data]);
    return (
        <div>
            <Typography type={'p'} className={styles.title}>Стоимость портфеля</Typography>
            <div className={styles.block}>
                <Typography type={'h3'} data-testid={'total'}>
                    {getRoundingNumber(bag.total)}{getCurrency()}
                </Typography>
                <Typography type={'p'}>
                <span className={`${difference?.className || ''} ${styles.difference}`}>
                    <b> {difference?.value}</b>({difference?.percent}%)
                </span>
                </Typography>
            </div>
        </div>
    );
};

