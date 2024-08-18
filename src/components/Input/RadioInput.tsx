import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { FormData } from '../../types/iFormData';
import styles from './Input.module.scss';

interface RadioInputProps {
  control: Control<FormData>;
  name: keyof FormData;
  label: string;
  options: string[];
  errors: FieldErrors<FormData>;
}

const RadioInput: React.FC<RadioInputProps> = ({
  control,
  name,
  label,
  options,
  errors,
}) => (
  <div className={styles.inputBlock}>
    <label className={styles.label}>{label}</label>
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <>
          {options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={field.value === option}
                onChange={() => field.onChange(option)}
              />{' '}
              {option}
            </label>
          ))}
        </>
      )}
    />
    {errors[name] && (
      <p className={styles.error}>{String(errors[name]?.message)}</p>
    )}
  </div>
);

export default RadioInput;
