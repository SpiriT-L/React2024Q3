import React from 'react';
import styles from './Input.module.scss';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { title: string };

const Input = (props: Props) => {
  return (
    <label>
      {props.title && (
        <div>
          {props.title}
          <span>*</span>
        </div>
      )}
      <input className={styles.input} {...props} />
    </label>
  );
};

export default Input;
