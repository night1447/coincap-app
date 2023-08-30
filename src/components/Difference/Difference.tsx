import { useEffect, useState } from 'react';

import getDifferencePrice, { IDifference } from '../../utils/getDifferencePrice.ts';
import createCoinIds from '../../utils/createCoinIds.ts';
import getRoundingNumber from '../../utils/getRoundingNumber.ts';
import getCurrency from '../../utils/getCurrency.ts';
import { Typography } from '../UI/Typography/Typography.tsx';
import { CoinService } from '../../services/useCoinService.ts';
import { useNameContext } from '../../hooks/useNameContext.ts';

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
                <Typography type={'h3'}>
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

