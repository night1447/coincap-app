import { Typography } from '../../UI/Typography/Typography.tsx';
import getRoundingNumber from '../../../utils/getRoundingNumber.ts';

import styles from './total.module.scss';

interface TotalProps {
    count: number;
    price: number;
}

export const Total = ({ count, price }: TotalProps) => {
    return (
        <div className={styles.total}>
            <Typography type={'h3'}>Общая сумма</Typography>
            <Typography type={'p'} className={styles.total_price}>
                {`${getRoundingNumber(price * count)}`}$
            </Typography>
        </div>
    );
};

