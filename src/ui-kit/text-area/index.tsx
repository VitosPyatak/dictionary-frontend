import { FC } from 'react';
import { TextAreaProps } from './types';
import { textareaConfigs } from './configs';
import styles from './index.module.scss';

export const Textarea: FC<TextAreaProps> = ({ rows, cols, value, onChange, placeholder }) => {
  return (
    <textarea className={styles.textarea} rows={rows} cols={cols} value={value} onChange={onChange} placeholder={placeholder} />
  );
};
