import React, { ChangeEvent, useState } from 'react';
import styles from './Input.module.scss';

interface EmailInputProps {
  id: string;
  name: string;
  labelName: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const EmailInput: React.FC<EmailInputProps> = ({
  id,
  name,
  labelName,
  value,
  onChange,
  required = false,
}) => {
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(e);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newValue)) {
      setError('Enter a valid email.');
    } else {
      setError('');
    }
  };

  return (
    <>
      <div className={styles.inputBlock}>
        <label htmlFor={id}>{labelName}:</label>
        <input
          type="email"
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
        />
        {error && <p className={styles.invalid}>{error}</p>}
      </div>
    </>
  );
};

export default EmailInput;
