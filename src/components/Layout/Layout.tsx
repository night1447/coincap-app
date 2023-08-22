import { PropsWithChildren } from 'react';

import { Header } from './Header/Header.tsx';

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};
