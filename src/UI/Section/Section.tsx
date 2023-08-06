import {FC, PropsWithChildren} from 'react';
import styles from './section.module.scss'
import Container from "../Container/Container.tsx";

interface SectionProps {
    className?: string
}

const Section: FC<PropsWithChildren<SectionProps>> = ({children, className}) => {
    return (
        <section className={`${styles.section} ${className || ''}`}>
            <Container>
                {children}
            </Container>
        </section>
    );
};
export default Section;
