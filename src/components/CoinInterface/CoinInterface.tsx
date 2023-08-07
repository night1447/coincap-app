import { FC, useEffect, useState } from 'react';
import Section from '../../UI/Section/Section.tsx';
import Typography from '../../UI/Typography/Typography.tsx';
import styles from './coin.module.scss';
import { ICurrency } from '../../models';
import getRoundingNumber from '../../utils/getRoundingNumber.ts';
import getCurrency from '../../utils/getCurrency.ts';
import Graphic from '../Graphic/Graphic.tsx';
import $api from '../../api';
import Button from '../../UI/Button/Button.tsx';
import { useNavigate } from 'react-router';

interface CoinProps {
  id: string;
}

const initialState: ICurrency = {
  changePercent24Hr: '',
  id: '',
  marketCapUsd: '',
  maxSupply: '',
  name: '',
  priceUsd: '',
  rank: '',
  supply: '',
  symbol: '',
  volumeUsd24Hr: '',
  vwap24Hr: '',
};
const CoinInterface: FC<CoinProps> = ({ id }) => {
  const [coin, setCoin] = useState<ICurrency>(initialState);
  const navigate = useNavigate();
  useEffect(() => {
    $api.getCoin(id).then((coin) => setCoin(coin));
  }, []);
  const goBackHandler = () => {
    navigate(-1);
  };

  return (
      <Section>
        <Button
            type={'button'}
            variant={'error'}
            onClick={goBackHandler}
            className={styles.back}
        >
          Назад
        </Button>
        <div className={styles.head}>
          <div className={styles.inner}>
            <div className={styles.rank}>
              <span className={styles.rank_bold}>{coin?.rank}</span>
              <span>Rank</span>
            </div>
            <div>
              <Typography type={'h1'} className={styles.name}>
                {coin.name} ({coin.symbol})
              </Typography>
              <Typography type={'h2'} className={styles.price}>
                {getRoundingNumber(+coin.priceUsd)}
                {getCurrency()}
                <span
                    className={`${styles.price_value} ${
                        coin.changePercent24Hr[0] === '-'
                            ? styles.negative
                            : styles.positive
                    }`}
                >
                {getRoundingNumber(+coin.changePercent24Hr)}%
              </span>
              </Typography>
            </div>
          </div>
          <ul className={styles.info}>
            <li className={styles.item}>
              <Typography type={'p'}>Market cap</Typography>
              <Typography type={'h3'} className={styles.value}>
                {getRoundingNumber(+coin.marketCapUsd)}
                {getCurrency()}
              </Typography>
            </li>
            <li className={styles.item}>
              <Typography type={'p'}>Volume (24Hr)</Typography>
              <Typography type={'h3'} className={styles.value}>
                {getRoundingNumber(+coin.volumeUsd24Hr)}
                {getCurrency()}
              </Typography>
            </li>
            <li className={styles.item}>
              <Typography type={'p'}>Supply</Typography>
              <Typography type={'h3'} className={styles.value}>
                {getRoundingNumber(+coin.supply)}
                {getCurrency()}
              </Typography>
            </li>
          </ul>
        </div>
        <Graphic id={id} />
      </Section>
  );
};
export default CoinInterface;
