import { FC, PropsWithChildren } from 'react';
import Typography from '../Typography/Typography.tsx';
import styles from './message.module.scss';
import Portal from '../Portal/Portal.tsx';
import Button from '../Button/Button.tsx';
import { SrOnly } from '../SrOnly/SrOnly.tsx';

export type IMessageType = 'success' | 'error' | '';

interface MessageProps {
    type: IMessageType;
    showMessage: boolean;
    onClose: () => void;
}

const Message: FC<PropsWithChildren<MessageProps>> = ({
                                                          children,
                                                          showMessage,
                                                          type,
                                                          onClose,
                                                      }) => {

    return (
        showMessage ?
            <Portal containerID={'message'}>
                <div className={styles.message}>
                    <Typography type={'p'} className={`${styles.text} ${styles[type]}`}>
                        {children}
                    </Typography>
                    <Button className={styles.close} type={'button'} onClick={onClose} variant={'close'}>
                        <SrOnly>Закрыть сообщение</SrOnly>
                    </Button>
                </div>
            </Portal> : <></>
    );
};
export default Message;
