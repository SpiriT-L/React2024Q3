import React, { ChangeEvent } from 'react';

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
}) => (
  <>
    <label htmlFor={id}>{labelName}:</label>
    <input
      type="email"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </>
);

export default EmailInput;
