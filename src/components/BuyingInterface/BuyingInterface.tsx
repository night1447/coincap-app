import React, { ChangeEvent, FC, useContext, useState } from 'react';
import { ICurrency } from '../../models';
import Button from '../UI/Button/Button.tsx';
import TextField from '../UI/TextField/TextField.tsx';
import styles from './buying.module.scss';
import Message, { IMessageType } from '../UI/Message/Message.tsx';
import Total from './Total/Total.tsx';
import ProductInformation from './ProductInformation/ProductInformation.tsx';
import context from '../../context';

interface BuyingInterfaceProps {
  coin: ICurrency;
}

interface IMessageSettings {
  message: string;
  showMessage: boolean;
  type: IMessageType;
}

const initialState: IMessageSettings = {
  message: '',
  showMessage: false,
  type: '',
};
const INPUT_STEP = 0.01;
const checkCorrectionNumber = (value: number) => (value > 0 ? value : 0);
const BuyingInterface: FC<BuyingInterfaceProps> = ({ coin }) => {
  const [value, setValue] = useState(0);
  const { addCoin } = useContext(context);
  const [messageSettings, setMessageSettings] =
      useState<IMessageSettings>(initialState);
  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let message: string;
    let type: IMessageType;
    if (value === 0) {
      message = `Увы нечего добавлять, вы не увеличили количество валюты`;
      type = 'error';
    } else {
      message = `Отлично, ${coin.symbol} добавлена в ваш кошелек в размере ${value}`;
      type = 'success';
      addCoin({
        coinId: coin.id,
        price: coin.priceUsd,
        count: value,
      });
      setValue(0);
    }
    setMessageSettings({
      showMessage: true,
      type,
      message,
    });
    setTimeout(() => {
      setMessageSettings(initialState);
    }, 3000);
  };
  const increaseValueHandler = () => {
    setValue((prevValue) => {
      const multipliedValue = prevValue + INPUT_STEP;
      return parseFloat(checkCorrectionNumber(multipliedValue).toFixed(10));
    });
  };

  const decreaseValueHandler = () => {
    setValue((prevValue) => {
      const dividedValue = prevValue - INPUT_STEP;
      return parseFloat(checkCorrectionNumber(dividedValue).toFixed(10));
    });
  };

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(checkCorrectionNumber(Number(e.target.value)));


  const closeMessageHandler = () => {
    setMessageSettings(initialState);
  };

  return (
      <form onSubmit={submitFormHandler} className={styles.form}>
        <ProductInformation coin={coin} />
        <div className={styles.wrapper}>
          <Button
              variant={'accent'}
              type={'button'}
              isCircle={true}
              onClick={decreaseValueHandler}
          >
            -
          </Button>
          <TextField
              type={'number'}
              min={0}
              value={value}
              onChange={changeValueHandler}
              variant={'accent'}
              htmlFor={'text'}
              step={'any'}
              placeholder={`0.1${coin.symbol}`}
          />
          <Button
              variant={'accent'}
              type={'button'}
              isCircle={true}
              onClick={increaseValueHandler}
          >
            +
          </Button>
        </div>
        <Total count={value} price={coin.priceUsd} />
        <Message type={messageSettings.type}
                 showMessage={messageSettings.showMessage}
                 onClose={closeMessageHandler}>
          {messageSettings.message}
        </Message>
        <Button variant={'success'} type={'submit'}>
          Подтвердить
        </Button>
      </form>
  );
};
export default BuyingInterface;
