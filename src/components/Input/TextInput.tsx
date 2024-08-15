import React, { ChangeEvent } from 'react';

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
}) => (
  <>
    <label htmlFor={id}>{labelName}:</label>
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
