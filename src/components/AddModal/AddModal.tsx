import { ICurrency } from '../../models';
import { FC } from 'react';
import PurchaseInterface from '../PurchaseInterface/PurchaseInterface.tsx';
import styles from './add.module.scss';
import Modal from '../UI/Modal/Modal.tsx';

interface AddInterfaceProps {
    coin: ICurrency;
    onClose: () => void;
    showModal: boolean;
}

const SupplementalModal: FC<AddInterfaceProps> = ({ coin, showModal, onClose }) => {
    return (
        <Modal showModal={showModal} onClose={onClose} className={styles.modal}>
            <div className={styles.block}>
                <PurchaseInterface coin={coin} />
            </div>
        </Modal>

    );
};
export default SupplementalModal;
