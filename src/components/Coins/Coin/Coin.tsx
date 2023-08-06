import {FC} from "react";
import {ICurrency} from "../../../models";
import styles from '../coins.module.scss'

interface CoinProps {
    coin: ICurrency
}

const Coin: FC<CoinProps> = ({coin}) => {
    return (
        <tr className={styles.row}>
            <td className={`${styles.mobileHidden}`}>
                {coin.rank}
            </td>
            <td>
                {coin.name} -
                {coin.symbol}
            </td>
            <td>
                {coin.priceUsd.slice(0, 9)}
            </td>
            <td className={`${styles.mobileHidden}`}>
                {coin.marketCapUsd.slice(0, 9)}
            </td>
            <td className={styles.tabletHidden}>
                {coin.vwap24Hr?.slice(0, 9)}
            </td>
            <td className={styles.tabletHidden}>
                {coin.supply.slice(0, 9)}
            </td>
            <td className={styles.tabletHidden}>
                {coin.volumeUsd24Hr.slice(0, 9)}
            </td>
            <td>
                {coin.changePercent24Hr.slice(0,5)}
            </td>
        </tr>
    );
};

export default Coin;
