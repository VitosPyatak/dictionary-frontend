import { FC } from 'react';
import { FlexContainer } from '../container';
import styles from './index.module.scss';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <FlexContainer centered customClass={styles.button} onClick={onClick}>
      {label}
    </FlexContainer>
  );
};
