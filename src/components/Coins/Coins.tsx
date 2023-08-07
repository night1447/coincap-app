import {ICurrency} from "../../models";
import Coin from "./Coin/Coin.tsx";
import styles from './coins.module.scss'
import {FC, useEffect, useState} from "react";
import $api from "../../api";

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
    offset: number
    step: number
    onChange: (coin: ICurrency) => void
}

const Coins: FC<CoinsProps> = ({offset, step, onChange}) => {
    const [coins, setCoins] = useState<ICurrency[]>([]);

    useEffect(() => {
        $api.getCoins({step, offset}).then(items => {
            setCoins(prevState => [...prevState, ...items])
        });
    }, [offset])

    return (
        <table className={styles.table}>
            <tbody>
            <tr className={`${styles.row_title}`}>
                {titles.map(item => <th key={item.title}
                                        className={`${styles.title} ${item.className || ''}`}>{item.title}</th>)}
            </tr>
            {coins.map(item => <Coin key={Math.random()} onChange={onChange} coin={item}/>)}
            </tbody>
        </table>
    );
};
export default Coins;
