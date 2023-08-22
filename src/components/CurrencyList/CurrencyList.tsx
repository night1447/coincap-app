import { useEffect, useState } from 'react';

import { CurrencyItem } from './CurrencyItem/CurrencyItem.tsx';
import { ICurrency } from '../../models';
import { useCoinService } from '../../services/useCoinService.ts';

import styles from './currencies.module.scss';

export const CurrencyList = () => {
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  const { getAllCoins } = useCoinService();
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
    getAllCoins(isMobile ? 1 : 3).then((items) => setCurrencies(items));
  }, []);
  return (
      <ul className={styles.list}>
        {currencies.map((currency) => (
            <CurrencyItem key={currency.id} currency={currency} />
        ))}
      </ul>
  );
};
