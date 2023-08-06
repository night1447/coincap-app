import {FC, PropsWithChildren} from "react";
import styles from './button.module.scss'

interface ButtonProps {
    type: 'button' | 'submit' | 'reset'
    variant: 'default' | 'accent'
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    return (
        <button type={props.type} className={`${styles.btn} ${styles[props.variant]}`}>
            {props.children}
        </button>
    );
};
