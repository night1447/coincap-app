import { FC, useEffect, useState } from 'react';
import { ICurrency } from '../../../models';
import Typography from '../../../UI/Typography/Typography.tsx';
import styles from './currency.module.scss';
import getCurrency from '../../../utils/getCurrency.ts';
import getDifferencePrice, { IDifference } from '../../../utils/getDifferencePrice.ts';
import useTypedSelector from '../../../hooks/useTypedSelector.ts';

interface CurrencyItemProps {
    currency: ICurrency;
}

const CurrencyItem: FC<CurrencyItemProps> = ({ currency }) => {
    const [difference, setDifference] = useState<IDifference>();
    const briefCase = useTypedSelector(state => state.briefCase);
    useEffect(() => {
        setDifference(getDifferencePrice(briefCase.coins, currency));
    }, []);
    return (
        <li className={styles.item}>
            <Typography type={'h3'} className={styles.name}>
                {currency.symbol}
            </Typography>
            <Typography
                type={'p'}
                className={`${styles.value} ${difference?.className}`}
            >
        <span className={styles.bold}>
          {briefCase.total}
            {getCurrency()}
        </span>
                {difference?.value}({difference?.percent}%)
            </Typography>
        </li>
    );
};
export default CurrencyItem;
