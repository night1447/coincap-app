import { FC } from 'react';
import Typography from '../../UI/Typography/Typography.tsx';
import useTypedSelector from '../../hooks/useTypedSelector.ts';
import styles from './briefcase.module.scss';
import BriefCaseCoins from './BriefCaseCoins/BriefCaseCoins.tsx';
import getCurrency from '../../utils/getCurrency.ts';
import getRoundingNumber from '../../utils/getRoundingNumber.ts';
import calculateTotalBriefCase from '../../utils/calculateTotalBriefCase.ts';

const BriefInterface: FC = () => {
    const briefCase = useTypedSelector(state => state.briefCase);
    return (
        <div className={styles.block}>
            <Typography type={'h2'} className={styles.title}>Ваш портфель</Typography>
            {briefCase.coins.length ? <>
                    <BriefCaseCoins coins={briefCase.coins} />
                    <Typography type={'p'} className={styles.total}>
                        <span>Стоимость
                        портфеля</span>
                        <b>{getRoundingNumber(calculateTotalBriefCase(briefCase.coins))}{getCurrency()}</b>
                    </Typography>
                </>
                :
                <Typography type={'p'} className={styles.empty}>Ваш портфель пуст</Typography>}
        </div>
    );
};

export default BriefInterface;
