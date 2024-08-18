import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { FormData } from '../../types/iFormData';
import styles from './Input.module.scss';

interface CountryInputProps {
  control: Control<FormData>;
  name: keyof FormData;
  label: string;
  countries: string[];
  errors: FieldErrors<FormData>;
}

const CountryInput: React.FC<CountryInputProps> = ({
  control,
  name,
  label,
  countries,
  errors,
}) => (
  <div className={styles.inputBlock}>
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <>
          <input
            className={styles.input}
            list="countries"
            {...field}
            value={
              typeof field.value === 'string' || typeof field.value === 'number'
                ? field.value
                : ''
            }
          />
          <datalist id="countries">
            {countries.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
        </>
      )}
    />
    {errors[name] && (
      <p className={styles.error}>{String(errors[name]?.message)}</p>
    )}
  </div>
);

export default CountryInput;
