import { ICurrency } from '../../models';
import { FC } from 'react';
import BuyInterface from '../BuyInterface/BuyInterface.tsx';
import styles from './add.module.scss'
interface AddInterfaceProps {
    coin: ICurrency;
}

const AddInterface: FC<AddInterfaceProps> = ({ coin }) => {
    return (
        <div className={styles.block}>
            <BuyInterface coin={coin} />
        </div>
    );
};
export default AddInterface;
