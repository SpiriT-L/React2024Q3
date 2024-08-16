import React, { ChangeEvent, useState } from 'react';
import styles from './Input.module.scss';

interface NumberInputProps {
  id: string;
  name: string;
  labelName: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const NumberInput: React.FC<NumberInputProps> = ({
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

    if (newValue === '') {
      setError('The field must not be empty.');
    } else if (isNaN(Number(newValue))) {
      setError(`It's not the number that's entered.`);
    } else if (Number(newValue) < 0) {
      setError('The number must not be negative.');
    } else if (Number(newValue) >= 121) {
      setError('Your age cannot be more than 120.');
    } else {
      setError('');
    }
  };

  return (
    <>
      <div className={styles.inputBlock}>
        <label htmlFor={id}>{labelName}:</label>
        <input
          type="number"
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

export default NumberInput;
