import {FC} from "react";
import {ICurrency} from "../../../models";
import styles from '../coins.module.scss'
import {useNavigate} from "react-router";
import Button from "../../../UI/Button/Button.tsx";
import getRoundingNumber from "../../../utils/getRoundingNumber.ts";

interface CoinProps {
    coin: ICurrency
}

const Coin: FC<CoinProps> = ({coin}) => {
    const navigate = useNavigate();
    const openCoinHandler = () => {
        navigate(`${coin.id}`);
    };

    const addHandler = e => {

    };

    return (
        <tr className={styles.row} onClick={openCoinHandler}>
            <td className={`${styles.mobileHidden}`}>
                {coin.rank}
            </td>
            <td>
                {coin.name} -
                {coin.symbol}
            </td>
            <td>
                {getRoundingNumber(+coin.priceUsd)}
            </td>
            <td className={`${styles.mobileHidden}`}>
                {getRoundingNumber(+coin.marketCapUsd)}
            </td>
            <td className={styles.tabletHidden}>
                {getRoundingNumber(+coin.vwap24Hr)}
            </td>
            <td className={styles.tabletHidden}>
                {getRoundingNumber(+coin.supply)}
            </td>
            <td className={styles.tabletHidden}>
                {getRoundingNumber(+coin.volumeUsd24Hr)}
            </td>
            <td>
                {getRoundingNumber(+coin.changePercent24Hr)}
            </td>
            <td>
                <Button type={'button'} variant={'accent'} isCircle={true} onClick={(e) => addHandler(e)}
                        className={styles.add}>+</Button>
            </td>
        </tr>
    );
};

export default Coin;
