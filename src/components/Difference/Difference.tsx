import { FC, useEffect, useState } from 'react';
import getDifferencePrice, { IDifference } from '../../utils/getDifferencePrice.ts';
import createCoinIds from '../../utils/createCoinIds.ts';
import getRoundingNumber from '../../utils/getRoundingNumber.ts';
import getCurrency from '../../utils/getCurrency.ts';
import Typography from '../UI/Typography/Typography.tsx';
import styles from './difference.module.scss';
import useCoinService from '../../services/useCoinService.ts';
import useNameContext from '../../hooks/useNameContext.ts';

const initialState: IDifference = {
    className: '',
    value: '+0',
    percent: 0,
};
const Difference: FC = () => {
    const briefCase = useNameContext();
    const [difference, setDifference] = useState<IDifference>(initialState);
    const { getCertainCoins } = useCoinService();
    useEffect(() => {
        if (briefCase.coins.length > 0) {
            getCertainCoins(createCoinIds(briefCase.coins)).then((items) => {
                setDifference(getDifferencePrice(briefCase.coins, items));
            });
        }
    }, [briefCase.coins]);
    return (
        <div>
            <Typography type={'p'} className={styles.title}>Стоимость портфеля</Typography>
            <div className={styles.block}>
                <Typography type={'h3'}>
                    {getRoundingNumber(briefCase.total)}{getCurrency()}
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
export default Difference;
