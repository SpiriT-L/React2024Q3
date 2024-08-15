import React, { ChangeEvent } from 'react';

interface TextInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  value,
  onChange,
  required = false,
}) => (
  <>
    <label htmlFor={id}>{name}:</label>
    <input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </>
);

export default TextInput;
