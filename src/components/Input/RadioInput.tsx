import React, { ChangeEvent } from 'react';

interface RadioInputProps {
  id: string;
  name: string;
  labelName: string;
  value: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const RadioInput: React.FC<RadioInputProps> = ({
  id,
  name,
  labelName,
  value,
  checked,
  onChange,
  required = false,
}) => (
  <>
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      required={required}
    />
    <label htmlFor={id}>{labelName}</label>
  </>
);

export default RadioInput;
