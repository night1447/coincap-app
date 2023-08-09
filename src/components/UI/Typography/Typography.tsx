import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import styles from './typography.module.scss';

type TypographyType = 'h1' | 'h2' | 'h3' | 'p';

interface TypographyProps {
  type: TypographyType;
  sx?: CSSProperties;
  className?: string;
}

const getCurrentTypeStyles = (type: TypographyType) => {
  let cssClasses: string = ``;
  if (type === 'h2' || type === 'h1' || type === 'h3') {
    cssClasses += ` ${styles.title}`;
  } else {
    cssClasses += ` ${styles.text}`;
  }
  switch (type) {
    case 'h1':
      return cssClasses + ` ${styles.title_first}`;
    case 'h2':
      return cssClasses + ` ${styles.title_second}`;
    case 'h3':
      return cssClasses + ` ${styles.title_third}`;
    default:
      return cssClasses;
  }
};

const Typography: FC<PropsWithChildren<TypographyProps>> = ({
                                                              type,
                                                              children,
                                                              className,
                                                              sx,
                                                            }) => {
  return React.createElement(
      type,
      {
        className: getCurrentTypeStyles(type) + ` ${className || ''}`,
        style: sx,
      },
      children,
  );
};
export default Typography;
