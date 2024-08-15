import React, { ChangeEvent } from 'react';

interface PasswordInputProps {
  id: string;
  name: string;
  labelName: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  name,
  labelName,
  value,
  onChange,
  required = false,
}) => (
  <>
    <label htmlFor={id}>{labelName}:</label>
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
