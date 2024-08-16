import React, { ChangeEvent, useState } from 'react';
import styles from './Input.module.scss';

interface PasswordInputProps {
  id: string;
  name: string;
  labelName: string;
  confirmLabelName: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  name,
  labelName,
  confirmLabelName,
  onChange,
  required = false,
}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [strength, setStrength] = useState('');

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    onChange(e);

    const hasNumber = /\d/.test(newPassword);
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasLowerCase = /[a-z]/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

    if (hasNumber && hasUpperCase && hasLowerCase && hasSpecialChar) {
      setStrength('Strong');
    } else {
      setStrength('Weak');
    }
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    onChange(e);

    if (newConfirmPassword !== password) {
      setError('Passwords do not match.');
    } else {
      setError('');
    }
  };

  return (
    <>
      <div className={styles.inputBlock}>
        <label htmlFor={id}>{labelName}:</label>
        <input
          type="password"
          id={id}
          name={name}
          value={password}
          onChange={handlePasswordChange}
          required={required}
        />
        <label htmlFor={id}>{confirmLabelName}:</label>
        <input
          type="password"
          id={`${id}-confirm`}
          name={`${name}-confirm`}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required={required}
        />
        <p className={styles.passwordStrength}>
          Password strength:{' '}
          <span className={strength === 'Strong' ? styles.strong : styles.weak}>
            {strength}
          </span>
        </p>
        {error && <p className={styles.invalid}>{error}</p>}
      </div>
    </>
  );
};

export default PasswordInput;
