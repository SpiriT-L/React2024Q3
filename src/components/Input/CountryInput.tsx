import React, { ChangeEvent } from 'react';

interface CountryInputProps {
  id: string;
  name: string;
  labelName: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const CountryInput: React.FC<CountryInputProps> = ({
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
      list="countryList"
      value={value}
      onChange={onChange}
      autoComplete="on"
      required={required}
    />
    <datalist id="countryList">
      <option value="Belarus" />
      <option value="Russia" />
      <option value="Ukraine" />
      <option value="Kazakhstan" />
      <option value="USA" />
    </datalist>
  </>
);

export default CountryInput;
