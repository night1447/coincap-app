import { Profile } from '../../Profile/Profile';
import { CurrencyList } from '../../CurrencyList/CurrencyList';
import { Container } from '../../UI/Container/Container';
import { Difference } from '../../Difference/Difference';

import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <Profile />
                    <div className={styles.inner}>
                        <CurrencyList />
                    </div>
                    <Difference />
                </div>
            </Container>
        </header>
    );
};
