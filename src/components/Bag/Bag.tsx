import { Typography } from '../UI/Typography/Typography.tsx';
import { BagCoins } from './BagCoins/BagCoins.tsx';
import getCurrency from '../../utils/getCurrency.ts';
import { Modal } from '../UI/Modal/Modal.tsx';
import getRoundingNumber from '../../utils/getRoundingNumber.ts';
import { useNameContext } from '../../hooks/useNameContext.ts';

import styles from './bag.module.scss';

interface BagProps {
    showBag: boolean;
    onClose: () => void;
}

export const Bag = ({ showBag, onClose }: BagProps) => {
    const bag = useNameContext();
    return (
        <Modal showModal={showBag} onClose={onClose} className={styles.modal}>
            <div className={styles.block}>
                <Typography type={'h2'} className={styles.title}>Ваш портфель</Typography>
                {bag.coins.length ? <>
                        <BagCoins />
                        <Typography type={'p'} className={styles.total}>
                        <span>Стоимость
                        портфеля</span>
                            <b>{getRoundingNumber(bag.total)}{getCurrency()}</b>
                        </Typography>
                    </>
                    :
                    <Typography type={'p'} className={styles.empty}>Ваш портфель пуст</Typography>}
            </div>
        </Modal>
    );
};

