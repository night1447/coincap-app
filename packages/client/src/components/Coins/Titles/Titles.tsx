import styles from '../coins.module.scss';

interface ITitle {
    className: string;
    title: string;
}

const titles: ITitle[] = [
    { className: `${styles.mobileHidden}`, title: 'Рейтинг' },
    { className: '', title: 'Имя' },
    { className: '', title: 'Цена' },
    { className: `${styles.mobileHidden}`, title: 'Рыночная капитализация' },
    { className: `${styles.tabletHidden}`, title: 'VWAP(24Hr)' },
    { className: `${styles.tabletHidden}`, title: 'Снабжение' },
    { className: `${styles.tabletHidden}`, title: 'Объем(24Hr)' },
    { className: '', title: 'Изменения (24Hr)' },
];

export const Titles = () => {
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
