import { PropsWithChildren } from 'react';

import { Typography } from '../Typography/Typography.tsx';
import { Portal } from '../Portal/Portal.tsx';
import { Button } from '../Button/Button.tsx';
import { SrOnly } from '../SrOnly/SrOnly.tsx';

import styles from './message.module.scss';

export type IMessageType = 'success' | 'error' | '';

interface MessageProps {
    type: IMessageType;
    showMessage: boolean;
    onClose: () => void;
}

export const Message = ({ children, showMessage, type, onClose }: PropsWithChildren<MessageProps>) => {
    return (
        showMessage ?
            <Portal containerID={'message'}>
                <div className={styles.message} onClick={onClose}>
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

