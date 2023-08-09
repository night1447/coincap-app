import { FC } from 'react';
import { ICurrency } from '../../../models';
import styles from './head.module.scss';
import Typography from '../../../UI/Typography/Typography.tsx';
import getCurrency from '../../../utils/getCurrency.ts';
import getStylePriceDifference from '../../../utils/getStylePriceDifference.ts';

interface HeadProps {
    coin: ICurrency;
}

const Head: FC<HeadProps> = ({ coin }) => {
    return (
        <div className={styles.head}>
            <div className={styles.inner}>
                <div className={styles.rank}>
                    <span className={styles.rank_bold}>{coin?.rank}</span>
                    <span>Rank</span>
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
                    <Typography type={'p'}>Market cap</Typography>
                    <Typography type={'h3'} className={styles.value}>
                        {coin.marketCapUsd}
                        {getCurrency()}
                    </Typography>
                </li>
                <li className={styles.item}>
                    <Typography type={'p'}>Volume (24Hr)</Typography>
                    <Typography type={'h3'} className={styles.value}>
                        {coin.volumeUsd24Hr}
                        {getCurrency()}
                    </Typography>
                </li>
                <li className={styles.item}>
                    <Typography type={'p'}>Supply</Typography>
                    <Typography type={'h3'} className={styles.value}>
                        {coin.supply}
                        {getCurrency()}
                    </Typography>
                </li>
            </ul>
        </div>
    );
};
export default Head;
