import { PropsWithChildren } from 'react';
import { Container } from '../Container/Container.tsx';

import styles from './section.module.scss';

interface SectionProps {
    className?: string;
}

export const Section = ({ children, className }: PropsWithChildren<SectionProps>) => {
    return (
        <section className={`${styles.section} ${className || ''}`}>
            <Container>{children}</Container>
        </section>
    );
};
