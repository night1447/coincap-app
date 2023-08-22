import React, { ChangeEvent, FC, useState } from 'react';
import { ICurrency } from '../../models';
import Button from '../UI/Button/Button.tsx';
import TextField from '../UI/TextField/TextField.tsx';
import styles from './buying.module.scss';
import Message, { IMessageType } from '../UI/Message/Message.tsx';
import Total from './Total/Total.tsx';
import ProductInformation from './ProductInformation/ProductInformation.tsx';
import getRoundingNumber from '../../utils/getRoundingNumber.ts';
import useNameContext from '../../hooks/useNameContext.ts';

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
const checkCorrectionNumber = (value: string) => (+value >= 0 ? value : 0);
const BuyInterface: FC<BuyingInterfaceProps> = ({ coin }) => {
  const [value, setValue] = useState<string>('');
  const { addCoin } = useNameContext();
  const [messageSettings, setMessageSettings] =
      useState<IMessageSettings>(initialState);
  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let message: string;
    let type: IMessageType;
    if (!value || value === '0') {
      message = `Увы нечего добавлять, вы не увеличили количество валюты`;
      type = 'error';
    } else {
      message = `Отлично, ${coin.symbol} добавлена в ваш кошелек в размере ${value}`;
      type = 'success';
      addCoin({
        coinId: coin.id,
        price: coin.priceUsd,
        count: +value,
      });
      setValue('');
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
      const multipliedValue = getRoundingNumber(+prevValue + INPUT_STEP, 10);
      return multipliedValue.toString();
    });
  };

  const decreaseValueHandler = () => {
    setValue((prevValue) => {
      const dividedValue = getRoundingNumber(+prevValue - INPUT_STEP, 10);
      return checkCorrectionNumber(dividedValue.toString()).toString();
    });
  };

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(checkCorrectionNumber(e.target.value).toString());
  };


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
              value={value}
              onInput={changeValueHandler}
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
        <Total count={+value} price={coin.priceUsd} />
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
export default BuyInterface;
