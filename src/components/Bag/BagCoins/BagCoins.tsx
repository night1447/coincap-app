import { FC, useEffect, useState } from 'react';
import BriefCaseCoin from '../BriefCaseCoin/BriefCaseCoin.tsx';
import { IWideCoin } from '../../../models';
import styles from './list.module.scss';
import createCoinIds from '../../../utils/createCoinIds.ts';
import useCoinService from '../../../services/useCoinService.ts';
import useNameContext from '../../../hooks/useNameContext.ts';


const BriefCaseCoins: FC = () => {
    const briefCase = useNameContext();
    const [coins, setCoins] = useState<IWideCoin[]>([]);
    const { getCertainCoins } = useCoinService();
    useEffect(() => {
        getCertainCoins(createCoinIds(briefCase.coins)).then((response) => {
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
