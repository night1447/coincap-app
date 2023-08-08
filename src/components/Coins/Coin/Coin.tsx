import React, { FC } from 'react';
import { ICurrency } from '../../../models';
import styles from '../coins.module.scss';
import { useNavigate } from 'react-router';
import Button from '../../../UI/Button/Button.tsx';
import getRoundingNumber from '../../../utils/getRoundingNumber.ts';
import getCurrency from '../../../utils/getCurrency.ts';

interface CoinProps {
    coin: ICurrency;
    onChange: (coin: ICurrency) => void;
}

const Coin: FC<CoinProps> = ({ coin, onChange }) => {
    const navigate = useNavigate();
    const openCoinHandler = () => {
        navigate(`${coin.id}`);
  };

  const openModalHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onChange(coin);
  };

  return (
    <tr className={styles.row} onClick={openCoinHandler}>
        <td className={`${styles.mobileHidden}`}>{coin.rank}</td>
        <td>
            {coin.name}-{coin.symbol}
        </td>
        <td>{getRoundingNumber(+coin.priceUsd)}{getCurrency()}</td>
        <td className={`${styles.mobileHidden}`}>
            {getRoundingNumber(+coin.marketCapUsd)}{getCurrency()}
        </td>
        <td className={styles.tabletHidden}>
            {getRoundingNumber(+coin.vwap24Hr)}
        </td>
        <td className={styles.tabletHidden}>{getRoundingNumber(+coin.supply)}</td>
        <td className={styles.tabletHidden}>
            {getRoundingNumber(+coin.volumeUsd24Hr)}{getCurrency()}
        </td>
        <td className={styles.relative}>
            {getRoundingNumber(+coin.changePercent24Hr)}
            <Button
                type={'button'}
                variant={'success'}
                isCircle={true}
                onClick={openModalHandler}
                className={styles.add}
            >
          +
        </Button>
      </td>
    </tr>
  );
};

export default Coin;
