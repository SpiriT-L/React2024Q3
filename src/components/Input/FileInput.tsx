import React, { ChangeEvent } from 'react';

interface FileInputProps {
  id: string;
  name: string;
  labelName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FileInput: React.FC<FileInputProps> = ({
  id,
  name,
  labelName,
  onChange,
  required = false,
}) => (
  <>
    <label htmlFor={id}>{labelName}:</label>
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
