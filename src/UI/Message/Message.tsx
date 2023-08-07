import {FC, PropsWithChildren, useEffect} from "react";
import Typography from "../Typography/Typography.tsx";
import styles from './message.module.scss'
import Portal from "../Portal/Portal.tsx";

export type IMessageType = 'success' | 'error' | '';

interface MessageProps {
    type: IMessageType
    onClose: () => void
}

const Message: FC<PropsWithChildren<MessageProps>> = ({children, type, onClose}) => {
    useEffect(() => {
        setTimeout(() => {
            onClose();
        }, 3000)
    }, [])
    return (
        <Portal containerID={'message'}>
            <div className={styles.message}>
                <Typography type={'p'} className={`${styles.text} ${styles[type]}`}>{children}</Typography>
            </div>
        </Portal>
    );
};
export default Message;
