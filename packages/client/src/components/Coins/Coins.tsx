import {useEffect, useState} from 'react';

import {ICurrency} from '../../models';
import {Coin} from './Coin/Coin';
import {Titles} from './Titles/Titles';
import {CoinService} from '../../services/CoinService';

import styles from './coins.module.scss';

interface CoinsProps {
    page: number;
    onChange: (coin: ICurrency) => void;
}

export const Coins = ({page, onChange}: CoinsProps) => {
    const [coins, setCoins] = useState<ICurrency[]>([]);
    const response = CoinService().coins({page});
    useEffect(() => {
        if (response.data) {
            setCoins((prevState) => [...prevState, ...response.data]);
        }
    }, [page, response.data]);

    useEffect(() => {
    }, [response]);

    return (
        <table className={styles.table}>
            <tbody>
            <Titles/>
            {coins.map((item) => (
                <Coin key={Math.random()} onChange={onChange} coin={item}/>
            ))}
            </tbody>
        </table>
    );
};

