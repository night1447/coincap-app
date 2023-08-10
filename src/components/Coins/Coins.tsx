import { ICurrency } from '../../models';
import Coin from './Coin/Coin.tsx';
import styles from './coins.module.scss';
import { FC, useEffect, useState } from 'react';
import $api from '../../api';
import Titles from './Titles/Titles.tsx';

interface CoinsProps {
    page: number;
    step: number;
    onChange: (coin: ICurrency) => void;
}

const Coins: FC<CoinsProps> = ({ page, step, onChange }) => {
    const [coins, setCoins] = useState<ICurrency[]>([]);

    useEffect(() => {
        $api.getCoins({ step, page }).then((items) => {
            setCoins((prevState) => [...prevState, ...items]);
        });
    }, [page]);

    return (
        <table className={styles.table}>
            <tbody>
            <Titles />
            {coins.map((item) => (
                <Coin key={Math.random()} onChange={onChange} coin={item} />
            ))}
            </tbody>
        </table>
    );
};
export default Coins;
