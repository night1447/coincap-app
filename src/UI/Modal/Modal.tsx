import { FC, PropsWithChildren } from 'react';
import Portal from '../Portal/Portal.tsx';
import styles from './modal.module.scss';
import Button from '../Button/Button.tsx';
import { SrOnly } from '../SrOnly/SrOnly.tsx';
import bodyScroll from '../../utils/bodyScroll.ts';

interface ModalProps {
    showModal: boolean;
    onClose: () => void;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
                                                      showModal,
                                                      onClose,
                                                      children,
                                                  }) => {
    if (showModal){
        bodyScroll.lock();
    }
    return showModal ? (
        <Portal containerID={'modal'}>
            <div className={styles.modal}>{children}</div>
            <Button
                type={'button'}
                variant={'accent'}
                className={styles.close}
                onClick={() => {
                    onClose();
                    bodyScroll.unlock();
                }}
                isCircle={true}
            >
                <SrOnly>Закрыть модальное окно</SrOnly>
            </Button>
            <div className={styles.backdrop}></div>
        </Portal>
    ) : (
        <>
        </>
    );
};
export default Modal;
