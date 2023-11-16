import { FC } from 'react';
import { FlexContainerProps } from './types';
import styles from './index.module.scss';
import { useFlexContainerStyles } from './hooks';

export const FlexContainer: FC<FlexContainerProps> = ({ children, onClick, ...properties }) => {
  const className = useFlexContainerStyles(properties);

  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};
