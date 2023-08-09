import { FC, useContext, useEffect, useState } from 'react';
import BriefCaseCoin from '../BriefCaseCoin/BriefCaseCoin.tsx';
import { IWideCoin } from '../../../models';
import styles from './list.module.scss';
import $api from '../../../api';
import createCoinIds from '../../../utils/createCoinIds.ts';
import context from '../../../context';


const BriefCaseCoins: FC = () => {
    const briefCase = useContext(context);
    const [coins, setCoins] = useState<IWideCoin[]>([]);
    useEffect(() => {
        const currentIds = createCoinIds(briefCase.coins);
        $api.getCoins({ ids: currentIds }).then((response) => {
            const result = response.map((item, index): IWideCoin => ({
                coin: item,
                count: briefCase.coins[index]?.count,
            }));
            setCoins(result);
        });
    }, [briefCase.coins]);
    return (
        <ul className={styles.list}>
            {coins.map(coin => <BriefCaseCoin key={coin.coin.id} coin={coin} />)}
        </ul>
    );
};
export default BriefCaseCoins;
