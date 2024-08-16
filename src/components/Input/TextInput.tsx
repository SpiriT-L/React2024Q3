import React, { ChangeEvent, useState } from 'react';
import styles from './Input.module.scss';

interface TextInputProps {
  id: string;
  name: string;
  labelName: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  labelName,
  value,
  onChange,
  required = false,
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(e);

    const isValid = newValue.length >= 3 && /^[A-ZА-Я]/.test(newValue);
    setIsValid(isValid);
  };

  return (
    <>
      <div className={styles.inputBlock}>
        <label htmlFor={id}>{labelName}:</label>
        <input
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
        />
        {!isValid && (
          <p className={styles.invalid}>
            The first letter must be capitalized and at least three letters
            entered.
          </p>
        )}
      </div>
    </>
  );
};

export default TextInput;
