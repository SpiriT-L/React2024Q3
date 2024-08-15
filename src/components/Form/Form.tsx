import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FormData } from '../../types/iFormData';
import EmailInput from '../Input/EmailInput';
import NumberInput from '../Input/NumberInput';
import PasswordInput from '../Input/PasswordInput';
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
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      /> */}

      <TextInput
        id="firstName"
        name="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />

      {/* <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      /> */}
      <TextInput
        id="lastName"
        name="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      {/* <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
      /> */}

      <NumberInput
        id="age"
        name="Age"
        value={formData.age}
        onChange={handleChange}
      />

      {/* <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      /> */}
      <EmailInput
        id="email"
        name="Email"
        value={formData.email}
        onChange={handleChange}
      />

      {/* <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      /> */}

      <PasswordInput
        id="password"
        name="Password"
        value={formData.password}
        onChange={handleChange}
      />

      {/* <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      /> */}
      <PasswordInput
        id="password"
        name="Confirm Password"
        value={formData.password}
        onChange={handleChange}
      />

      <label>Gender:</label>
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        checked={formData.gender === 'male'}
        onChange={handleChange}
        required
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        checked={formData.gender === 'female'}
        onChange={handleChange}
        required
      />
      <label htmlFor="female">Female</label>

      <label htmlFor="country">Country:</label>
      <input
        type="text"
        id="country"
        name="country"
        list="countryList"
        value={formData.country}
        onChange={handleChange}
        autoComplete="on"
        required
      />
      <datalist id="countryList">
        <option value="Belarus" />
        <option value="Russia" />
        <option value="Ukraine" />
        <option value="Kazakhstan" />
        <option value="USA" />
      </datalist>

      <label htmlFor="terms">
        I accept the <a href="/terms">Terms and Conditions</a>:
      </label>
      <input
        type="checkbox"
        id="terms"
        name="terms"
        checked={formData.terms}
        onChange={handleChange}
        required
      />

      <label htmlFor="profilePicture">Upload Image (png, jpeg):</label>
      <input
        type="file"
        id="profilePicture"
        name="profilePicture"
        accept=".png, .jpeg"
        onChange={handleChange}
        required
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
