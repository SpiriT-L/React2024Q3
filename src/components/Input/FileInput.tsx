import React, { ChangeEvent } from 'react';

interface FileInputProps {
  id: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FileInput: React.FC<FileInputProps> = ({
  id,
  name,
  onChange,
  required = false,
}) => (
  <>
    <label htmlFor={id}>{name}:</label>
    <input
      type="file"
      id={id}
      name={name}
      accept=".png, .jpeg"
      onChange={onChange}
      required={required}
    />
  </>
);

export default FileInput;
