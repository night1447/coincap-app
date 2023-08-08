import { FC, useEffect, useState } from 'react';
import { ICurrency } from '../../../models';
import Typography from '../../../UI/Typography/Typography.tsx';
import styles from './currency.module.scss';
import getCurrency from '../../../utils/getCurrency.ts';
import getDifferencePrice, { IDifference } from '../../../utils/getDifferencePrice.ts';
import useTypedSelector from '../../../hooks/useTypedSelector.ts';
import { addLocalStorage, getLocalStorage } from '../../../utils/localStorage.ts';
import calculateTotalBriefCase from '../../../utils/calculateTotalBriefCase.ts';

interface CurrencyItemProps {
    currency: ICurrency;
    total: number;
}

const CurrencyItem: FC<CurrencyItemProps> = ({ currency, total }) => {
    const [difference, setDifference] = useState<IDifference>();
    const coins = useTypedSelector(state => state.briefCase.coins);
    useEffect(() => {
        addLocalStorage('beginningValue', getLocalStorage('briefCaseValue') || '0');
        const beginningSum = getLocalStorage('beginningValue') || 0;
        const currentSum = getLocalStorage('briefCaseValue') || 0;
        setDifference(getDifferencePrice(+currentSum, +beginningSum));
    }, []);
    useEffect(() => {
        const total = calculateTotalBriefCase(coins);
        addLocalStorage('briefCaseValue', total.toString());
    }, [coins]);
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
          {total}
            {getCurrency()}
        </span>
                {difference?.value}({difference?.percent}%)
            </Typography>
        </li>
    );
};
export default CurrencyItem;
