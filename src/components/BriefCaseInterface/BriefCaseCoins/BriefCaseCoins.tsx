import { FC } from 'react';
import BriefCaseCoin from '../BriefCaseCoin/BriefCaseCoin.tsx';
import { ICoin } from '../../../models';
import styles from '../briefCase.module.scss';

interface BriefCaseCoinsProps {
    coins: ICoin[];
}

const BriefCaseCoins: FC<BriefCaseCoinsProps> = ({ coins }) => {
    return (
        <ul className={styles.list}>
            {coins.map(coin => <BriefCaseCoin key={coin.coin.id} coin={coin} />)}
        </ul>
    );
};
export default BriefCaseCoins;
