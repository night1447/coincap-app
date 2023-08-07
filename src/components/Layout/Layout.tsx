import { FC, PropsWithChildren } from 'react';
import Header from '../Header/Header.tsx';

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};
export default Layout;
