import { PropsWithChildren } from 'react';

import { Portal } from '../Portal/Portal';
import { Button } from '../Button/Button';
import { SrOnly } from '../SrOnly/SrOnly';
import bodyScroll from '../../../utils/bodyScroll';

import styles from './modal.module.scss';

interface ModalProps {
    showModal: boolean;
    className?: string;
    onClose: () => void;
}

export const Modal = ({ showModal, onClose, className, children }: PropsWithChildren<ModalProps>) => {
    const closeModalHandler = () => {
        onClose();
        bodyScroll.unlock();
    };
    if (showModal) {
        bodyScroll.lock();
        return (<Portal containerID={'modal'}>
                <div className={`${styles.modal} ${className || ''}`}>{children}</div>
                <Button
                    type={'button'}
                    variant={'close'}
                    data-testid={'close-modal'}
                    className={styles.close}
                    onClick={closeModalHandler}
                >
                    <SrOnly>Закрыть модальное окно</SrOnly>
                </Button>
                <div className={styles.backdrop} onClick={closeModalHandler}></div>
            </Portal>
        );
    }
    return <></>;
};
