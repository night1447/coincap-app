import { FC } from 'react';
import Profile from '../Profile/Profile.tsx';
import CurrencyList from '../CurrencyList/CurrencyList.tsx';
import Container from '../../UI/Container/Container.tsx';
import styles from './header.module.scss';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <Profile />
                    <CurrencyList />
                </div>
            </Container>
        </header>
    );
};
export default Header;
