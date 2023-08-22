import { PropsWithChildren } from 'react';

import styles from './sr-only.module.scss';

export const SrOnly = ({ children }: PropsWithChildren) => {
  return <span className={styles.srOnly}>{children}</span>;
};
