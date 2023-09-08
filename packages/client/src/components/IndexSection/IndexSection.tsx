import { useCallback, useState } from 'react';

import { ICurrency } from '../../models';
import { Coins } from '../Coins/Coins';
import { Button } from '../UI/Button/Button';
import { Section } from '../UI/Section/Section';
import { AddModal } from '../AddModal/AddModal';

import styles from './main.module.scss';

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
export const IndexSection = () => {
    const [page, setPage] = useState<number>(0);
    const [modalSettings, setModalSettings] =
        useState<IModalSettings>(initialState);
    const changeModalSettingsHandler = (coin: ICurrency) => {
        setModalSettings({ showModal: true, currentCoin: coin });
    };
    const changeLimitHandler = useCallback(() => {
        setPage((prevState) => prevState + 1);
    }, []);

    const closeModalHandler = () => {
        setModalSettings((prevState) => ({ ...prevState, showModal: false }));
    };

    return (
        <Section>
            <div className={styles.wrapper}>
                <Coins
                    page={page}
                    onChange={changeModalSettingsHandler}
                />
                <Button type={'button'} variant={'accent'} onClick={changeLimitHandler}>
                    Показать больше
                </Button>
                <AddModal coin={modalSettings.currentCoin}
                          showModal={modalSettings.showModal}
                          onClose={closeModalHandler} />
            </div>
        </Section>
    );
};

