import React, { PropsWithChildren } from 'react';

import { SrOnly } from '../SrOnly/SrOnly';

import styles from './button.module.scss';

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
            {...props}
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


