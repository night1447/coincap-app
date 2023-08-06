import Coins from "../Coins/Coins.tsx";
import Button from "../../UI/Button/Button.tsx";
import Section from "../../UI/Section/Section.tsx";
import styles from './main.module.scss'
import {useState} from "react";

const initialLimit = 60;
const step = 10;
const MainInterface = () => {
    const [limit, setLimit] = useState<number>(initialLimit);

    const changeLimitHandler = () => {
        setLimit(prevState => prevState + step);
    };

    return (
        <Section>
            <div className={styles.wrapper}>
                <Coins limit={limit}/>
                <Button type={'button'} variant={'accent'} onClick={changeLimitHandler}>Показать больше</Button>
            </div>
        </Section>
    );
};
export default MainInterface;
