import { FC, useState } from 'react';
import Button from '../../UI/Button/Button.tsx';
import styles from './profile.module.scss';
import Modal from '../../UI/Modal/Modal.tsx';
import BriefInterface from '../BriefCaseInterface/BriefInterface.tsx';
import bodyScroll from '../../utils/bodyScroll.ts';
import { ProfileIcon } from '../../UI/Icons';

const Profile: FC = () => {
    const [showModal, setShowModal] = useState(false);

    const closeModalHandler = () => {
        setShowModal(false);
    };

    const showModalHandler = () => {
        setShowModal(true);
        bodyScroll.lock();
    };

    return (
        <>
            <Button
                type={'button'}
                variant={'accent'}
                isCircle={true}
                onClick={showModalHandler}
                className={styles.btn}
            >
            <ProfileIcon/>
            </Button>
            <Modal showModal={showModal} onClose={closeModalHandler}>
                <BriefInterface />
            </Modal>
        </>
    );
};
export default Profile;
