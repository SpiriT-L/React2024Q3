import React, { ChangeEvent } from 'react';

interface NumberInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const NumberInput: React.FC<NumberInputProps> = ({
  id,
  name,
  value,
  onChange,
  required = false,
}) => (
  <>
    <label htmlFor={id}>{name}:</label>
    <input
      type="number"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </>
);

export default NumberInput;
