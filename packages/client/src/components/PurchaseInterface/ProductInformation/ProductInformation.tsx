import { ICurrency } from '../../../models';
import { Typography } from '../../UI/Typography/Typography';
import getCurrency from '../../../utils/getCurrency';

import styles from '../buying.module.scss';


interface ProductInformationProps {
    coin: ICurrency;
}

export const ProductInformation = ({ coin }: ProductInformationProps) => {
    return (
        <>
            <Typography type={'h2'} className={styles.title}>
                Добавление в кошелек
            </Typography>
            <div className={styles.inner}>
                <Typography type={'h3'}>
                    {coin.name} - {coin.symbol}
                </Typography>
                <Typography type={'p'} className={styles.price}>
                    {coin.priceUsd}
                    {getCurrency()}
                </Typography>
            </div>
        </>
    );
};
