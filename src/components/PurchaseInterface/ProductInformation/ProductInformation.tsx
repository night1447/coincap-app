import { FC } from 'react';
import Typography from '../../UI/Typography/Typography.tsx';
import styles from '../buying.module.scss';
import getCurrency from '../../../utils/getCurrency.ts';
import { ICurrency } from '../../../models';


interface ProductInformationProps {
    coin: ICurrency;
}

const ProductInformation: FC<ProductInformationProps> = ({ coin }) => {
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
export default ProductInformation;
