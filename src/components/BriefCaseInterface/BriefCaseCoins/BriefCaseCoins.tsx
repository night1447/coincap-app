import { FC, useEffect, useState } from 'react';
import BriefCaseCoin from '../BriefCaseCoin/BriefCaseCoin.tsx';
import { IWideCoin } from '../../../models';
import styles from '../briefCase.module.scss';
import useTypedSelector from '../../../hooks/useTypedSelector.ts';
import $api from '../../../api';
import createIds from '../../../utils/createIds.ts';

interface BriefCaseCoinsProps {
}

const BriefCaseCoins: FC<BriefCaseCoinsProps> = () => {
    const briefCase = useTypedSelector(state => state.briefCase);
    const [coins, setCoins] = useState<IWideCoin[]>([]);
    useEffect(() => {
        const currentIds = createIds(briefCase.coins);
        $api.getCoins({ ids: currentIds }).then((response) => {
            console.log(briefCase);
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
