import { PropsWithChildren } from 'react';

import { Header } from './Header/Header';

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header />
            <main data-testid={'content'}>{children}</main>
        </>
    );
};
