import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { FormData } from '../../types/iFormData';
import styles from './Input.module.scss';

interface FileInputProps {
  control: Control<FormData>;
  name: keyof FormData;
  label: string;
  errors: FieldErrors<FormData>;
}

const FileInput: React.FC<FileInputProps> = ({
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
      defaultValue={undefined}
      render={({ field }) => (
        <input
          className={styles.input}
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => field.onChange(e.target.files)}
        />
      )}
    />
    {errors[name] && (
      <p className={styles.error}>{String(errors[name]?.message)}</p>
    )}
  </div>
);

export default FileInput;
