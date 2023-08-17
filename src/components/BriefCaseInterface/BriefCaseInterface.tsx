import { FC } from 'react';
import Typography from '../UI/Typography/Typography.tsx';
import styles from './briefcase.module.scss';
import BriefCaseCoins from './BriefCaseCoins/BriefCaseCoins.tsx';
import getCurrency from '../../utils/getCurrency.ts';
import Modal from '../UI/Modal/Modal.tsx';
import getRoundingNumber from '../../utils/getRoundingNumber.ts';
import useNameContext from '../../hooks/useNameContext.ts';

interface BriefCaseInterfaceProps {
    showBriefCase: boolean;
    onClose: () => void;
}

const BriefCaseInterface: FC<BriefCaseInterfaceProps> = ({ showBriefCase, onClose }) => {
    const briefCase = useNameContext();
    return (
        <Modal showModal={showBriefCase} onClose={onClose} className={styles.modal}>
            <div className={styles.block}>
                <Typography type={'h2'} className={styles.title}>Ваш портфель</Typography>
                {briefCase.coins.length ? <>
                        <BriefCaseCoins />
                        <Typography type={'p'} className={styles.total}>
                        <span>Стоимость
                        портфеля</span>
                            <b>{getRoundingNumber(briefCase.total)}{getCurrency()}</b>
                        </Typography>
                    </>
                    :
                    <Typography type={'p'} className={styles.empty}>Ваш портфель пуст</Typography>}
            </div>
        </Modal>
    );
};

export default BriefCaseInterface;
