import { Profile } from '../../Profile/Profile.tsx';
import { CurrencyList } from '../../CurrencyList/CurrencyList.tsx';
import { Container } from '../../UI/Container/Container.tsx';
import { Difference } from '../../Difference/Difference.tsx';

import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.inner}>
                        <Profile />
                        <Difference />
                    </div>
                    <CurrencyList />
                </div>
            </Container>
        </header>
    );
};
