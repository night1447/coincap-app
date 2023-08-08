import React, { ChangeEvent, FC, useState } from 'react';
import { ICurrency } from '../../models';
import Button from '../../UI/Button/Button.tsx';
import TextField from '../../UI/TextField/TextField.tsx';
import styles from './buying.module.scss';
import Typography from '../../UI/Typography/Typography.tsx';
import getCurrency from '../../utils/getCurrency.ts';
import getRoundingNumber from '../../utils/getRoundingNumber.ts';
import Message, { IMessageType } from '../../UI/Message/Message.tsx';
import { useDispatch } from 'react-redux';
import { addCoinAction } from '../../store/reducers/BriefCase/actions.ts';

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
const checkZero = (value: number) => (value > 0 ? value : 0);
const INPUT_STEP = 0.01;
const BuyingInterface: FC<BuyingInterfaceProps> = ({ coin }) => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const [messageSettings, setMessageSettings] =
      useState<IMessageSettings>(initialState);
  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let message = '';
    let type: IMessageType = '';
    if (value === 0) {
      message = `Увы нечего добавлять, вы не увеличили количество валюты`;
      type = 'error';
    } else {
      message = `Отлично, ${coin.symbol} добавлена в ваш кошелек в размере ${value}`;
      type = 'success';
      dispatch(addCoinAction({
        coinId: coin.id,
        price: +coin.priceUsd,
        count: value,
      }));
      setValue(0);
    }
    setMessageSettings({
      showMessage: true,
      type,
      message,
    });
  };
  const increaseValueHandler = () => {
    setValue((prevValue) => {
      const multipliedValue = prevValue + INPUT_STEP;
      return parseFloat(checkZero(multipliedValue).toFixed(10));
    });
  };

  const decreaseValueHandler = () => {
    setValue((prevValue) => {
      const dividedValue = prevValue - INPUT_STEP;
      return parseFloat(checkZero(dividedValue).toFixed(10));
    });
  };

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(checkZero(Number(newValue)));
  };

  const closeMessageHandler = () => {
    setMessageSettings((prevState) => ({
      ...prevState,
      showMessage: false,
    }));
  };

  return (
      <form onSubmit={submitFormHandler} className={styles.form}>
        <Typography type={'h2'} className={styles.title}>
          Добавление в кошелек
        </Typography>
        <div className={styles.inner}>
          <Typography type={'h3'}>
            {coin.name} - {coin.symbol}
          </Typography>
          <Typography type={'p'} className={styles.price}>
            {getRoundingNumber(+coin.priceUsd)}
            {getCurrency()}
          </Typography>
        </div>

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
        <div className={styles.total}>
          <Typography type={'h3'}>Общая сумма</Typography>
          <Typography type={'p'} className={styles.total_price}>
            {`${getRoundingNumber(value * +coin.priceUsd)}`}$
          </Typography>
        </div>
        {messageSettings?.showMessage ? (
            <Message type={messageSettings.type} onClose={closeMessageHandler}>
              {messageSettings.message}
            </Message>
        ) : (
            <></>
        )}
        <Button variant={'success'} type={'submit'}>
          Подтвердить
        </Button>
      </form>
  );
};
export default BuyingInterface;
