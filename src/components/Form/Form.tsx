import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FormData } from '../../types/iFormData';
import CheckboxInput from '../Input/CheckboxInput';
import CountryInput from '../Input/CountryInput';
import EmailInput from '../Input/EmailInput';
import FileInput from '../Input/FileInput';
import NumberInput from '../Input/NumberInput';
import PasswordInput from '../Input/PasswordInput';
import RadioInput from '../Input/RadioInput';
import TextInput from '../Input/TextInput';
import styles from './Form.module.scss';

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
    <section>
      <div className="container">
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextInput
            id="firstName"
            name="firstName"
            labelName="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <TextInput
            id="lastName"
            name="lastName"
            labelName="LastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <NumberInput
            id="age"
            name="age"
            labelName="Age"
            value={formData.age}
            onChange={handleChange}
          />

          <EmailInput
            id="email"
            name="email"
            labelName="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <PasswordInput
            id="password"
            name="password"
            labelName="Password"
            confirmLabelName="Confirm Password"
            value={formData.password}
            onChange={handleChange}
          />

          <label>Gender:</label>
          <div className={styles.genderItems}>
            <RadioInput
              id="male"
              name="gender"
              labelName="Male"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              required
            />
            <RadioInput
              id="male"
              name="gender"
              labelName="Female"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              required
            />
          </div>

          <CountryInput
            id="country"
            name="country"
            labelName="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <CheckboxInput
            id="terms"
            name="terms"
            labelName="I accept the Terms and Conditions"
            checked={formData.terms}
            onChange={handleChange}
            required
          />

          <FileInput
            id="profilePicture"
            name="profilePicture"
            labelName="Upload Image (png, jpeg)"
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
