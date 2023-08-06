import {ICurrency} from "../../models";
import Coin from "./Coin/Coin.tsx";
import styles from './coins.module.scss'
import {FC, useEffect, useState} from "react";
import axios from "axios";

interface ITitle {
    className: string
    title: string
}

const titles: ITitle[] = [
    {className: `${styles.mobileHidden}`, title: 'Rank'},
    {className: '', title: 'Name'},
    {className: '', title: 'Price'},
    {className: `${styles.mobileHidden}`, title: 'Market cap'},
    {className: `${styles.tabletHidden}`, title: 'VWAP(24Hr)'},
    {className: `${styles.tabletHidden}`, title: 'Supply'},
    {className: `${styles.tabletHidden}`, title: 'Volume(24Hr)'},
    {className: '', title: 'Change(24Hr)'},

];

interface CoinsProps {
    limit: number
}

const Coins: FC<CoinsProps> = ({limit}) => {
    const [coins, setCoins] = useState<ICurrency[]>([]);
    useEffect(() => {
        const response = axios.get('https://api.coincap.io/v2/assets');
        response.then(answer => {
            const coins: ICurrency[] = answer.data.data;
            setCoins(coins);
        });
    }, [])
    return (
        <table className={styles.table}>
            <tbody>
            <tr className={`${styles.row_title}`}>
                {titles.map(item => <th key={item.title}
                                        className={`${styles.title} ${item.className || ''}`}>{item.title}</th>)}
            </tr>
            {coins.map(item => <Coin key={item.id} coin={item}/>)}
            </tbody>
        </table>
    );
};
export default Coins;
