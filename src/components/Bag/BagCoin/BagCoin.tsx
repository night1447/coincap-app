import { IWideCoin } from '../../../models';
import { Typography } from '../../UI/Typography/Typography.tsx';
import { Button } from '../../UI/Button/Button.tsx';
import { TrashIcon } from '../../UI/Icons';
import { useNameContext } from '../../../hooks/useNameContext.ts';

import styles from './coin.module.scss';

interface BagCoinProps {
    coin: IWideCoin;
}

export const BagCoin = ({ coin }: BagCoinProps) => {
    const { removeCoin } = useNameContext();

    const deleteCoinHandler = () => {
        removeCoin({
            coinId: coin.coin.id,
            count: coin.count,
            price: +coin.coin.priceUsd,
        });
    };

    return (
        <li className={styles.item}>
            <Typography type={'h3'}>
                {coin.coin.name}
            </Typography>
            <Typography type={'h3'} className={styles.count}>
                {coin.count.toString()}{coin.coin.symbol}
            </Typography>
            <Button type={'button'}
                    onClick={deleteCoinHandler}
                    variant={'error'}
                    className={styles.delete}
                    isCircle={true}>
                <TrashIcon />
            </Button>
        </li>
    );
};

