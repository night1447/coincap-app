import { ICurrency } from '../../models';
import { FC } from 'react';
import BuyingInterface from '../BuyingInterface/BuyingInterface.tsx';
import styles from './add.module.scss'
interface AddInterfaceProps {
    coin: ICurrency;
}

const AddInterface: FC<AddInterfaceProps> = ({ coin }) => {
    return (
        <div className={styles.block}>
            <BuyingInterface coin={coin} />
        </div>
    );
};
export default AddInterface;
