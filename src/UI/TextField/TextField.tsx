import {ChangeEvent, FC, HTMLInputTypeAttribute, Ref} from "react";
import styles from './textfield.module.scss'

interface TextFieldProps {
    placeholder?: string
    htmlFor: string
    onInput?: (e: ChangeEvent<HTMLInputElement>) => void
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: string | number
    step?: number | 'any'
    min?: number
    ref?: Ref<HTMLInputElement>
    max?: number
    className?: string
    variant: 'default' | 'accent'
    type: HTMLInputTypeAttribute
}

const TextField: FC<TextFieldProps> = (props) => {
    return (
        <label htmlFor={props.htmlFor} className={styles.label}>
            <input onInput={props.onInput}
                   onChange={props.onChange}
                   className={`${styles.input} ${styles[props.variant]} ${props.className || ''}`}
                   type={props.type}
                   min={props.min}
                   ref={props.ref}
                   max={props.max}
                   step={props.step}
                   id={props.htmlFor}
                   value={props.value}
                   placeholder={props.placeholder}/>
        </label>
    );
};
export default TextField;
