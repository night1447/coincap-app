import { FC, useEffect, useState } from 'react';
import Section from '../UI/Section/Section.tsx';
import styles from './coin.module.scss';
import { ICurrency } from '../../models';
import Graphic from '../Graphic/Graphic.tsx';
import Button from '../UI/Button/Button.tsx';
import { useNavigate } from 'react-router';
import BuyInterface from '../BuyInterface/BuyInterface.tsx';
import Head from './Head/Head.tsx';
import useCoinService from '../../services/useCoinService.ts';

interface CoinProps {
  id: string;
}

const initialState: ICurrency = {
  changePercent24Hr: 0,
  id: '',
  marketCapUsd: 0,
  maxSupply: 0,
  name: '',
  priceUsd: 0,
  rank: '',
  supply: 0,
  symbol: '',
  volumeUsd24Hr: 0,
  vwap24Hr: 0,
};
const CoinInterface: FC<CoinProps> = ({ id }) => {
    const [coin, setCoin] = useState<ICurrency>(initialState);
    const { getCoinById } = useCoinService();
    const navigate = useNavigate();
    useEffect(() => {
        getCoinById(id).then((coin) => setCoin(coin));
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
          <Head coin={coin} />
          <Graphic id={id} className={styles.graphic} />
          <BuyInterface coin={coin} />
      </Section>
  );
};
export default CoinInterface;
