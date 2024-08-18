import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { FormData } from '../../types/iFormData';
import styles from './Input.module.scss';

interface TextInputProps {
  control: Control<FormData>;
  name: keyof FormData;
  label: string;
  errors: FieldErrors<FormData>;
}

const TextInput: React.FC<TextInputProps> = ({
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
      defaultValue=""
      render={({ field }) => (
        <input
          className={styles.input}
          {...field}
          value={
            typeof field.value === 'string' || typeof field.value === 'number'
              ? field.value
              : ''
          }
        />
      )}
    />
    {errors[name] && (
      <p className={styles.error}>{String(errors[name]?.message)}</p>
    )}
  </div>
);

export default TextInput;
