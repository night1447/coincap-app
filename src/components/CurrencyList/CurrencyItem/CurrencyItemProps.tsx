import {FC} from "react";
import {ICurrency} from "../../../models";
import Typography from "../../../UI/Typography/Typography.tsx";
import styles from './currency.module.scss'
import getCurrency from "../../../utils/getCurrency.ts";
import getRoundingNumber from "../../../utils/getRoundingNumber.ts";

interface CurrencyItemProps {
    currency: ICurrency
}

const getSideDifference = (changePercent24Hr: string) => changePercent24Hr[0] !== '-';

const CurrencyItem: FC<CurrencyItemProps> = ({currency}) => {
    return (
        <li className={styles.item}>
            <Typography type={'h3'} className={styles.name}>
                {currency.symbol}
            </Typography>
            <Typography type={'p'}
                        className={`${styles.value} ${getSideDifference(currency.changePercent24Hr) ? styles.positive : styles.negative}`}>
                <span className={styles.bold}>{getRoundingNumber(+currency.priceUsd)}{getCurrency()}</span>({getRoundingNumber(+currency.changePercent24Hr)}%)
            </Typography>
            {/*TODO: Link to page currency*/}
        </li>
    );
};
export default CurrencyItem;
