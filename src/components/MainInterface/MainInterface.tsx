import Coins from "../Coins/Coins.tsx";
import Button from "../../UI/Button/Button.tsx";
import Section from "../../UI/Section/Section.tsx";
import styles from './main.module.scss'
import {useState} from "react";

const offsetStep = 30;
const MainInterface = () => {
    const [offset, setOffset] = useState<number>(0);

    const changeLimitHandler = () => {
        setOffset(prevState => prevState + offsetStep);
    };

    return (
        <Section>
            <div className={styles.wrapper}>
                <Coins offset={offset} step={offsetStep}/>
                <Button type={'button'} variant={'accent'} onClick={changeLimitHandler}>Показать больше</Button>
            </div>
        </Section>
    );
};
export default MainInterface;
