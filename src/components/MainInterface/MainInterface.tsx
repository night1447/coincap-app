import Coins from '../Coins/Coins.tsx';
import Button from '../../UI/Button/Button.tsx';
import Section from '../../UI/Section/Section.tsx';
import styles from './main.module.scss';
import { useState } from 'react';
import { ICurrency } from '../../models';
import Modal from '../../UI/Modal/Modal.tsx';
import ModalInterface from '../ModalInterface/ModalInterface.tsx';
import bodyScroll from '../../utils/bodyScroll.ts';

const OFFSET_STEP = 30;

interface IModalSettings {
  showModal: boolean;
  currentCoin: ICurrency;
}

const initialState: IModalSettings = {
  showModal: false,
  currentCoin: {
    changePercent24Hr: '',
    id: '',
    marketCapUsd: '',
    maxSupply: '',
    name: '',
    priceUsd: '',
    rank: '',
    supply: '',
    symbol: '',
    volumeUsd24Hr: '',
    vwap24Hr: '',
  },
};
const MainInterface = () => {
  const [offset, setOffset] = useState<number>(0);
  const [modalSettings, setModalSettings] =
      useState<IModalSettings>(initialState);
  const changeModalSettingsHandler = (coin: ICurrency) => {
    setModalSettings({ showModal: true, currentCoin: coin });
    bodyScroll.lock();
  };
  const changeLimitHandler = () => {
    setOffset((prevState) => prevState + OFFSET_STEP);
  };

  const closeModalHandler = () => {
    setModalSettings((prevState) => ({ ...prevState, showModal: false }));
    bodyScroll.unlock();
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
          <Modal showModal={modalSettings.showModal} onClose={closeModalHandler}>
            <ModalInterface coin={modalSettings.currentCoin} />
          </Modal>
        </div>
      </Section>
  );
};
export default MainInterface;
