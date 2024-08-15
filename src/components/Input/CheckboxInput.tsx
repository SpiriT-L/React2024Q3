import React, { ChangeEvent } from 'react';

interface CheckboxInputProps {
  id: string;
  name: string;
  labelName: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  id,
  name,
  labelName,
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
    <label htmlFor={id}>{labelName}</label>
  </>
);

export default CheckboxInput;
