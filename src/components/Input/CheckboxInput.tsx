import React, { ChangeEvent } from 'react';

interface CheckboxInputProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  id,
  name,
  checked,
  onChange,
  required = false,
}) => (
  <>
    <input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
      required={required}
    />
    <label htmlFor={id}>{name}</label>
  </>
);

export default CheckboxInput;
