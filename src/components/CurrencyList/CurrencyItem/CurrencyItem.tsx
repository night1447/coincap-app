import { FC } from 'react';
import { ICurrency } from '../../../models';
import Typography from '../../UI/Typography/Typography.tsx';
import styles from './currency.module.scss';
import getCurrency from '../../../utils/getCurrency.ts';
import getStylePriceDifference from '../../../utils/getStylePriceDifference.ts';

interface CurrencyItemProps {
    currency: ICurrency;
}

const CurrencyItem: FC<CurrencyItemProps> = ({ currency }) => {
    return (
        <li className={styles.item}>
            <Typography type={'h3'} className={styles.name}>
                {currency.symbol}
            </Typography>
            <Typography
                type={'p'}
                className={`${styles.value} ${getStylePriceDifference(currency.changePercent24Hr.toString())}`}
            >
        <span className={styles.bold}>
          {currency.priceUsd}
            {getCurrency()}
        </span>
                {currency.changePercent24Hr}%
            </Typography>
        </li>
    );
};
export default CurrencyItem;
