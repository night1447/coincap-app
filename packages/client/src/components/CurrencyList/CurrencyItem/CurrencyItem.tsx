import { ICurrency } from '../../../models';
import { Typography } from '../../UI/Typography/Typography';
import getCurrency from '../../../utils/getCurrency';
import getStylePriceDifference from '../../../utils/getStylePriceDifference';

import styles from './currency.module.scss';

interface CurrencyItemProps {
    currency: ICurrency;
}

export const CurrencyItem = ({ currency }: CurrencyItemProps) => {
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

