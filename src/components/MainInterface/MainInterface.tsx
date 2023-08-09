import Coins from '../Coins/Coins.tsx';
import Button from '../UI/Button/Button.tsx';
import Section from '../UI/Section/Section.tsx';
import styles from './main.module.scss';
import { useState } from 'react';
import { ICurrency } from '../../models';
import Modal from '../UI/Modal/Modal.tsx';
import AddInterface from '../AddInterface/AddInterface.tsx';

const OFFSET_STEP = 30;

interface IModalSettings {
  showModal: boolean;
  currentCoin: ICurrency;
}

const initialState: IModalSettings = {
  showModal: false,
  currentCoin: {
    changePercent24Hr: 0,
    id: '',
    marketCapUsd: 0,
    maxSupply: 0,
    name: '',
    priceUsd: 0,
    rank: '',
    supply: 0,
    symbol: '',
    volumeUsd24Hr: 0,
    vwap24Hr: 0,
  },
};
const MainInterface = () => {
  const [offset, setOffset] = useState<number>(0);
  const [modalSettings, setModalSettings] =
      useState<IModalSettings>(initialState);
  const changeModalSettingsHandler = (coin: ICurrency) => {
    setModalSettings({ showModal: true, currentCoin: coin });
  };
  const changeLimitHandler = () => {
    setOffset((prevState) => prevState + OFFSET_STEP);
  };

  const closeModalHandler = () => {
    setModalSettings((prevState) => ({ ...prevState, showModal: false }));
  };

  return (
      <Section>
        <div className={styles.wrapper}>
          <Coins
              offset={offset}
              onChange={changeModalSettingsHandler}
              step={OFFSET_STEP}
          />
          <Button type={'button'} variant={'accent'} onClick={changeLimitHandler}>
            Показать больше
          </Button>
          <Modal showModal={modalSettings.showModal} className={styles.modal} onClose={closeModalHandler}>
            <AddInterface coin={modalSettings.currentCoin} />
          </Modal>
        </div>
      </Section>
  );
};
export default MainInterface;
