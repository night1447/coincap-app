import { ICurrency } from '../../models';
import { PurchaseInterface } from '../PurchaseInterface/PurchaseInterface';
import { Modal } from '../UI/Modal/Modal';

import styles from './add.module.scss';

interface AddModalProps {
    coin: ICurrency;
    onClose: () => void;
    showModal: boolean;
}

export const AddModal = ({ coin, showModal, onClose }: AddModalProps) => {
    return (
        <Modal showModal={showModal} onClose={onClose} className={styles.modal}>
            <div className={styles.block}>
                <PurchaseInterface coin={coin} />
            </div>
        </Modal>

    );
};
