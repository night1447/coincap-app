import React from 'react';
import { useNavigate } from 'react-router';

import { ICurrency } from '../../../models';
import { Button } from '../../UI/Button/Button';
import getCurrency from '../../../utils/getCurrency';
import getStylePriceDifference from '../../../utils/getStylePriceDifference';
import getRoundingNumber from '../../../utils/getRoundingNumber';
import { isMobile } from '../../../utils/isMobile';

import styles from '../coins.module.scss';

interface CoinProps {
    coin: ICurrency;
    onChange: (coin: ICurrency) => void;
}

export const Coin = ({ coin, onChange }: CoinProps) => {
    const navigate = useNavigate();
    const openCoinHandler = () => {
        navigate(`${coin.id}`);
    };

    const openModalHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onChange(coin);
    };

    return (
        <tr
            className={styles.row}
            onClick={openCoinHandler}
            data-testid={'coin'}
        >
            <td className={`${styles.mobileHidden}`}>{coin.rank}</td>
            <td className={`${styles.mobileWrap}`}>
                {coin.name}
                <span>-</span>
                {coin.symbol}
            </td>
            <td>
                {coin.priceUsd}
                {getCurrency()}
            </td>
            <td className={`${styles.mobileHidden}`}>
                {coin.marketCapUsd}
                {getCurrency()}
            </td>
            <td className={styles.tabletHidden}>{coin.vwap24Hr}</td>
            <td className={styles.tabletHidden}>
                {coin.supply}
                {getCurrency()}
            </td>
            <td className={styles.tabletHidden}>
                {coin.volumeUsd24Hr}
                {getCurrency()}
            </td>
            <td style={{ position: 'relative' }} className={styles.difference}>
                <b
                    className={getStylePriceDifference(
                        coin.changePercent24Hr.toString(),
                    )}
                >
                    {isMobile
                        ? getRoundingNumber(coin.changePercent24Hr, 2)
                        : coin.changePercent24Hr}
                    %
                </b>
                <Button
                    type={'button'}
                    variant={'success'}
                    isCircle={true}
                    onClick={openModalHandler}
                    className={styles.add}
                >
                    +
                </Button>
            </td>
        </tr>
    );
};

