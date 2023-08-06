import {FC} from "react";
import {ICurrency} from "../../../models";
import Typography from "../../../UI/Typography/Typography.tsx";
import styles from './currency.module.scss'

interface CurrencyItem {
    currency: ICurrency
}

const getSideDifference = (changePercent24Hr: string) => changePercent24Hr[0] !== '-';

const CurrencyItem: FC<CurrencyItem> = ({currency}) => {
    return (
        <li className={styles.item}>
            <Typography type={'h3'} className={styles.name}>
                BTC
            </Typography>
            <Typography type={'p'} className={`${styles.value} ${getSideDifference(currency.changePercent24Hr)? styles.positive : styles.negative}`}>
                <span className={styles.bold}>1230USD</span> - 123(0.09%)
            </Typography>
            {/*TODO: Link to page currency*/}
        </li>
    );
};
export default CurrencyItem;
