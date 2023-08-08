import styles from './utils.module.scss';

const getStylePriceDifference = (value: string) => value[0] !== '-' ? styles.positive : styles.negative;
export default getStylePriceDifference;
