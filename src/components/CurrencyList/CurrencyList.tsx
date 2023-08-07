import {FC, useEffect, useState} from "react";
import CurrencyItem from "./CurrencyItem/CurrencyItem.tsx";
import styles from './currencies.module.scss'
import $api from "../../api";
import {ICurrency} from "../../models";


const CurrencyList: FC = () => {

    const [currencies, setCurrencies] = useState<ICurrency[]>([]);
    useEffect(() => {
        $api.getCoins({limit: 3, offset: 0}).then(items => setCurrencies(items))
    }, [])
    return (
        <ul className={styles.list}>
            {currencies.map(currency => <CurrencyItem key={currency.id} currency={currency}/>)}
        </ul>
    );
};
export default CurrencyList;
