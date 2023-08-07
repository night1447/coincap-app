import React, {FC} from "react";
import {ICurrency} from "../../models";
import Button from "../../UI/Button/Button.tsx";

interface BuyingInterfaceProps {
    coin: ICurrency
}

const BuyingInterface: FC<BuyingInterfaceProps> = ({coin}) => {
    const submitFormHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={submitFormHandler}>
            <Button variant={'accent'} type={'button'} isCircle={true}>-</Button>
            <Button variant={'accent'} type={'button'} isCircle={true}>+</Button>
            <Button variant={'success'} type={'submit'}>Подтвердить</Button>
        </form>
    );
};
export default BuyingInterface;
