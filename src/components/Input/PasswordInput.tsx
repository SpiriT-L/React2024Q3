import React, { ChangeEvent } from 'react';

interface PasswordInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  name,
  value,
  onChange,
  required = false,
}) => (
  <>
    <label htmlFor={id}>{name}:</label>
    <input
      type="password"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </>
);

export default PasswordInput;
