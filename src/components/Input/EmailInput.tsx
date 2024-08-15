import React, { ChangeEvent } from 'react';

interface EmailInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const EmailInput: React.FC<EmailInputProps> = ({
  id,
  name,
  value,
  onChange,
  required = false,
}) => (
  <>
    <label htmlFor={id}>{name}:</label>
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
