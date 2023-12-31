import styles from './utils.module.scss';

const getStylePriceDifference = (value: string) => {
    if (value[0] === '-') {
        return styles.negative;
    }
    if (!value || (value[0] === '0' && +value <= 0)) {
        return styles.neutral;
    }

    return styles.positive;
};
export default getStylePriceDifference;
