import {FC} from "react";
import CurrencyItem from "./CurrencyItem/CurrencyItem.tsx";
import {ICurrency} from "../../models";
import styles from './currencies.module.scss'

const currencies: ICurrency[] = [
    {
        name: 'name',
        priceUsd: '123412',
        changePercent24Hr: '-12412',
        id: "23412"
    }, {
        name: 'name`1',
        priceUsd: '123412',
        changePercent24Hr: '-12412',
        id: '23412'
    }, {
        name: 'name`2',
        priceUsd: '123412',
        changePercent24Hr: '12412',
        id: '23412'
    },
];
const CurrencyList: FC = () => {
    return (
        <ul className={styles.list}>
            {currencies.map(currency => <CurrencyItem key={currency.id} currency={currency}/>)}
        </ul>
    );
};
export default CurrencyList;
