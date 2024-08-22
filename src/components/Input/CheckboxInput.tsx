import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { FormData } from '../../types/iFormData';
import styles from './Input.module.scss';

interface CheckboxInputProps {
  control: Control<FormData>;
  name: keyof FormData;
  label: string;
  handleTermsChange: () => void;
  errors: FieldErrors<FormData>;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  control,
  name,
  label,
  handleTermsChange,
  errors,
}) => (
  <div className={styles.inputBlock}>
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field }) => (
        <input
          type="checkbox"
          {...field}
          checked={!!field.value}
          onChange={(e) => {
            field.onChange(e.target.checked);
            handleTermsChange();
          }}
          value={undefined}
        />
      )}
    />
    {errors[name] && (
      <p className={styles.error}>{String(errors[name]?.message)}</p>
    )}
  </div>
);

export default CheckboxInput;
