import { FC } from 'react';
import Typography from '../../../UI/Typography/Typography.tsx';
import { IWideCoin } from '../../../models';
import styles from '../briefCase.module.scss';
import Button from '../../../UI/Button/Button.tsx';
import { TrashIcon } from '../../../UI/Icons';
import { useDispatch } from 'react-redux';
import { removeCoinAction } from '../../../store/reducers/BriefCase/actions.ts';

interface BriefCaseCoinProps {
    coin: IWideCoin;
}

const BriefCaseCoin: FC<BriefCaseCoinProps> = ({ coin }) => {
    const dispatch = useDispatch();
    const deleteCoinHandler = () => {
        dispatch(removeCoinAction({
            coinId: coin.coin.id,
            count: coin.count,
            price: +coin.coin.priceUsd,
        }));
    };

    return (
        <li className={styles.item}>
            <Typography type={'h3'}>
                {coin.coin.name}
            </Typography>
            <Typography type={'h3'} className={styles.count}>
                {coin.count}{coin.coin.symbol}
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

export default BriefCaseCoin;
