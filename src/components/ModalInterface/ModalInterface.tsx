import { ICurrency } from '../../models';
import { FC } from 'react';
import styles from './modal.module.scss';
import BuyingInterface from '../BuyingInterface/BuyingInterface.tsx';

interface ModalInterfaceProps {
    coin: ICurrency;
}

const ModalInterface: FC<ModalInterfaceProps> = ({ coin }) => {
    return (
        <div className={styles.modal}>
            <BuyingInterface coin={coin} />
        </div>
    );
};
export default ModalInterface;
