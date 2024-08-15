import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FormData } from '../../types/iFormData';
import Button from './Button';
import CheckboxInput from './CheckboxInput';
import CountryInput from './CountryInput';
import EmailInput from './EmailInput';
import FileInput from './FileInput';
import styles from './Form.module.scss';
import NumberInput from './NumberInput';
import PasswordInput from './PasswordInput';
import RadioInput from './RadioInput';
import TextInput from './TextInput';

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    country: '',
    terms: false,
    profilePicture: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === 'checkbox'
          ? checked
          : type === 'file'
            ? files
              ? files[0]
              : null
            : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextInput
        id="firstName"
        name="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <TextInput
        id="lastName"
        name="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <NumberInput
        id="age"
        name="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <EmailInput
        id="email"
        name="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <PasswordInput
        id="password"
        name="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <PasswordInput
        id="confirmPassword"
        name="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <label>Gender:</label>
      <RadioInput
        id="male"
        name="gender"
        value="male"
        checked={formData.gender === 'male'}
        onChange={handleChange}
        required
      />
      <RadioInput
        id="female"
        name="gender"
        value="female"
        checked={formData.gender === 'female'}
        onChange={handleChange}
        required
      />
      <CountryInput
        id="country"
        name="Country"
        value={formData.country}
        onChange={handleChange}
        required
      />
      <CheckboxInput
        id="terms"
        name="I accept the Terms and Conditions"
        checked={formData.terms}
        onChange={handleChange}
        required
      />
      <FileInput
        id="profilePicture"
        name="Upload Image (png, jpeg)"
        onChange={handleChange}
        required
      />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default Form;
