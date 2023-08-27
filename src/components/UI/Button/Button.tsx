import React, { PropsWithChildren } from 'react';

import styles from './button.module.scss';
import { SrOnly } from '../SrOnly/SrOnly.tsx';

export interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    variant: 'default' | 'accent' | 'error' | 'success' | 'close';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    isCircle?: boolean;
    srOnly?: string;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={`${styles.btn} ${styles[props.variant]} ${
                props.className || ''
            } ${props.isCircle && styles.circle}`}
        >
            {props.children}
            {props.srOnly ? <SrOnly>{props.srOnly}</SrOnly> : <></>}
        </button>
    );
};


