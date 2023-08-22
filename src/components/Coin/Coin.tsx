import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';


import { ICurrency } from '../../models';
import { Section } from '../UI/Section/Section.tsx';
import { Graphic } from '../Graphic/Graphic.tsx';
import { Button } from '../UI/Button/Button.tsx';
import { PurchaseInterface } from '../PurchaseInterface/PurchaseInterface.tsx';
import { Head } from './Head/Head.tsx';
import { useCoinService } from '../../services/useCoinService.ts';

import styles from './coin.module.scss';

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
export const Coin = ({ id }: CoinProps) => {
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
            <PurchaseInterface coin={coin} />
        </Section>
  );
};

