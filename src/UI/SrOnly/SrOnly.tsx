import {FC, PropsWithChildren} from 'react';
import styles from './sr-only.module.scss'

export const SrOnly: FC<PropsWithChildren> = ({children}) => {
    return (
        <span className={styles.srOnly}>
            {children}
        </span>
    );
};
