import { FC, useEffect, useState } from 'react';
import BriefCaseCoin from '../BriefCaseCoin/BriefCaseCoin.tsx';
import { IWideCoin } from '../../../models';
import styles from '../briefCase.module.scss';
import useTypedSelector from '../../../hooks/useTypedSelector.ts';
import $api from '../../../api';
import createCoinIds from '../../../utils/createCoinIds.ts';


const BriefCaseCoins: FC = () => {
    const briefCase = useTypedSelector(state => state.briefCase);
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
