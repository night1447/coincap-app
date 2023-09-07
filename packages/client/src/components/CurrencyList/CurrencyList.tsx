import { useEffect, useState } from 'react';

import { CurrencyItem } from './CurrencyItem/CurrencyItem';
import { ICurrency } from '../../models';
import { CoinService } from '../../services/CoinService';
import { isMobile } from '../../utils/isMobile';

import styles from './currencies.module.scss';

export const CurrencyList = () => {
    const response = CoinService().coins({ limit: isMobile ? 1 : 3 });
    const [currencies, setCurrencies] = useState<ICurrency[]>([]);
    useEffect(() => {
        if (response.data) {
            setCurrencies(response.data);
        }
    }, [response.data]);
    return (
        <ul className={styles.list}>
            {currencies.map((currency) => (
                <CurrencyItem key={currency.id} currency={currency} />
            ))}
        </ul>
    );
};
