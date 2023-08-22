import { ICurrency } from '../../../models';
import { Typography } from '../../UI/Typography/Typography.tsx';
import getCurrency from '../../../utils/getCurrency.ts';
import getStylePriceDifference from '../../../utils/getStylePriceDifference.ts';

import styles from './head.module.scss';

interface HeadProps {
    coin: ICurrency;
}

export const Head = ({ coin }: HeadProps) => {
    return (
        <div className={styles.head}>
            <div className={styles.inner}>
                <div className={styles.rank}>
                    <span className={styles.rank_bold}>{coin?.rank}</span>
                    <span>Рейтинг</span>
                </div>
                <div>
                    <Typography type={'h1'} className={styles.name}>
                        {coin.name} ({coin.symbol})
                    </Typography>
                    <Typography type={'h2'} className={styles.price}>
                        {coin.priceUsd}
                        {getCurrency()}
                        <span
                            className={`${styles.price_value} ${
                                getStylePriceDifference(coin.changePercent24Hr.toString())
                            }`}
                        >
                {coin.changePercent24Hr}%
              </span>
                    </Typography>
                </div>
            </div>
            <ul className={styles.info}>
                <li className={styles.item}>
                    <Typography type={'p'}>Рыночная капитализация</Typography>
                    <Typography type={'h3'} className={styles.value}>
                        {coin.marketCapUsd}
                        {getCurrency()}
                    </Typography>
                </li>
                <li className={styles.item}>
                    <Typography type={'p'}>Объем (24Hr)</Typography>
                    <Typography type={'h3'} className={styles.value}>
                        {coin.volumeUsd24Hr}
                        {getCurrency()}
                    </Typography>
                </li>
                <li className={styles.item}>
                    <Typography type={'p'}>Снабжение</Typography>
                    <Typography type={'h3'} className={styles.value}>
                        {coin.supply}
                        {getCurrency()}
                    </Typography>
                </li>
            </ul>
        </div>
    );
};
