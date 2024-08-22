import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { FormData } from '../../types/iFormData';
import styles from './Input.module.scss';

interface NumberInputProps {
  control: Control<FormData>;
  name: keyof FormData;
  label: string;
  errors: FieldErrors<FormData>;
}

const NumberInput: React.FC<NumberInputProps> = ({
  control,
  name,
  label,
  errors,
}) => (
  <div className={styles.inputBlock}>
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <Controller
      name={name}
      control={control}
      defaultValue={0}
      render={({ field }) => (
        <input
          className={styles.input}
          type="number"
          {...field}
          value={
            field.value !== undefined && field.value !== null ? field.value : ''
          }
        />
      )}
    />
    {errors[name] && (
      <p className={styles.error}>{String(errors[name]?.message)}</p>
    )}
  </div>
);

export default NumberInput;
