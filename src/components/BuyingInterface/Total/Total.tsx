import { FC } from 'react';
import styles from './total.module.scss';
import Typography from '../../UI/Typography/Typography.tsx';

interface TotalProps {
    count: number;
    price: number;
}

const Total: FC<TotalProps> = ({ count, price }) => {
    return (
        <div className={styles.total}>
            <Typography type={'h3'}>Общая сумма</Typography>
            <Typography type={'p'} className={styles.total_price}>
                {`${price * count}`}$
            </Typography>
        </div>
    );
};

export default Total;
