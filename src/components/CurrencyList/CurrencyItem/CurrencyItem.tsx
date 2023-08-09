import { FC, useContext, useState } from 'react';
import { ICurrency } from '../../../models';
import Typography from '../../UI/Typography/Typography.tsx';
import styles from './currency.module.scss';
import getCurrency from '../../../utils/getCurrency.ts';
import getDifferencePrice, { IDifference } from '../../../utils/getDifferencePrice.ts';
import context from '../../../context';

interface CurrencyItemProps {
    currency: ICurrency;
}

const CurrencyItem: FC<CurrencyItemProps> = ({ currency }) => {
    const briefCase = useContext(context);
    const [difference, setDifference] = useState<IDifference>(getDifferencePrice(briefCase.coins, currency));
    console.log(briefCase);
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
