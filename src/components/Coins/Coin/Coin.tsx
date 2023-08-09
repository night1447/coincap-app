import React, { FC } from 'react';
import { ICurrency } from '../../../models';
import styles from '../coins.module.scss';
import { useNavigate } from 'react-router';
import Button from '../../UI/Button/Button.tsx';
import getCurrency from '../../../utils/getCurrency.ts';
import getStylePriceDifference from '../../../utils/getStylePriceDifference.ts';

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
        <td className={styles.mobileWrap}>
            {coin.name}-{coin.symbol}
        </td>
        <td>{coin.priceUsd}{getCurrency()}</td>
        <td className={`${styles.mobileHidden}`}>
            {coin.marketCapUsd}{getCurrency()}
        </td>
        <td className={styles.tabletHidden}>
            {coin.vwap24Hr}
        </td>
        <td className={styles.tabletHidden}>{coin.supply}{getCurrency()}</td>
        <td className={styles.tabletHidden}>
            {coin.volumeUsd24Hr}{getCurrency()}
        </td>
        <td style={{ position: 'relative' }}>
            <b
                className={getStylePriceDifference(coin.changePercent24Hr.toString())}>{coin.changePercent24Hr}%</b>
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
