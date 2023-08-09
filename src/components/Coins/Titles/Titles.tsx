import styles from '../coins.module.scss';
import { FC } from 'react';

interface ITitle {
    className: string;
    title: string;
}

const titles: ITitle[] = [
    { className: `${styles.mobileHidden}`, title: 'Rank' },
    { className: '', title: 'Name' },
    { className: '', title: 'Price' },
    { className: `${styles.mobileHidden}`, title: 'Market cap' },
    { className: `${styles.tabletHidden}`, title: 'VWAP(24Hr)' },
    { className: `${styles.tabletHidden}`, title: 'Supply' },
    { className: `${styles.tabletHidden}`, title: 'Volume(24Hr)' },
    { className: '', title: 'Change(24Hr)' },
];

export const Titles: FC = () => {
    return (
        <tr>
            {titles.map((item) => (
                <th
                    key={item.title}
                    className={`${styles.title} ${item.className || ''}`}>
                    {item.title}
                </th>
            ))}
        </tr>
    );
};

export default Titles;
