import { FC, useEffect, useState } from 'react';
import CurrencyItem from './CurrencyItem/CurrencyItem.tsx';
import styles from './currencies.module.scss';
import $api from '../../api';
import { ICurrency } from '../../models';
import useTypedSelector from '../../hooks/useTypedSelector.ts';
import calculateTotalBriefCase from '../../utils/calculateTotalBriefCase.ts';

const CurrencyList: FC = () => {
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  const coins = useTypedSelector(state => state.briefCase.coins)
  const totalPrice = calculateTotalBriefCase(coins);
  useEffect(() => {
    $api
        .getCoins({ limit: 3, offset: 0 })
        .then((items) => setCurrencies(items));
  }, []);
  return (
      <ul className={styles.list}>
        {currencies.map((currency) => (
            <CurrencyItem key={currency.id} total={totalPrice} currency={currency} />
        ))}
      </ul>
  );
};
export default CurrencyList;
