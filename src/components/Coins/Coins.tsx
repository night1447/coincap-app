import { ICurrency } from '../../models';
import Coin from './Coin/Coin.tsx';
import styles from './coins.module.scss';
import { FC, useEffect, useState } from 'react';
import $api from '../../api';
import Titles from './Titles/Titles.tsx';

interface CoinsProps {
  offset: number;
  step: number;
  onChange: (coin: ICurrency) => void;
}

const Coins: FC<CoinsProps> = ({ offset, step, onChange }) => {
  const [coins, setCoins] = useState<ICurrency[]>([]);

  useEffect(() => {
    $api.getCoins({ step, offset }).then((items) => {
      setCoins((prevState) => [...prevState, ...items]);
    });
  }, [offset]);

  return (
      <table className={styles.table}>
        <tbody>
        <Titles />
        {coins.map((item) => (
            <Coin key={item.id} onChange={onChange} coin={item} />
        ))}
        </tbody>
      </table>
  );
};
export default Coins;
