import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { updateForm } from '../../slices/formSlice';
import { addImage } from '../../slices/imageSlice';
import { RootState } from '../../store/store';
import { FormData } from '../../types/iFormData';
import styles from './ControlledForm.module.scss';

import CheckboxInput from '../Input/CheckboxInput';
import CountryInput from '../Input/CountryInput';
import EmailInput from '../Input/EmailInput';
import FileInput from '../Input/FileInput';
import NumberInput from '../Input/NumberInput';
import PasswordInput from '../Input/PasswordInput';
import RadioInput from '../Input/RadioInput';
import TextInput from '../Input/TextInput';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Z]/, 'Name must start with an uppercase letter')
    .required('Name is required'),
  age: yup
    .number()
    .positive('Age must be a positive number')
    .required('Age is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
      'Password must contain at least one digit, one uppercase letter, one lowercase letter, and one special character',
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
  gender: yup.string().required('Gender is required'),
  image: yup.mixed().required('Image is required'),
  country: yup.string().required('Country is required'),
  termsAccepted: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('You must accept the terms and conditions'),
});

const ControlledForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const countries = useSelector(
    (state: RootState) => state.countries.countries,
  );
  const navigate = useNavigate();
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const onSubmit = (data: FormData) => {
    const imageFile = data.image[0];
    if (
      imageFile &&
      (imageFile.type === 'image/png' || imageFile.type === 'image/jpeg')
    ) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(addImage(reader.result as string));
      };
      reader.readAsDataURL(imageFile);
    }
    dispatch(
      updateForm({
        name: data.name,
        age: data.age,
        email: data.email,
        gender: data.gender,
        termsAccepted: data.termsAccepted,
        country: data.country,
      }),
    );
    console.log('Form submitted successfully!');
    navigate('/');
  };

  const handleTermsChange = () => {
    setIsTermsAccepted(!isTermsAccepted);
  };

  return (
    <>
      <section className={styles.sectionControlledForm}>
        <div className="container">
          <h2>Controlled Form</h2>
          <div className={styles.formDataBlock}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                control={control}
                name="name"
                label="Name:"
                errors={errors}
              />
              <NumberInput
                control={control}
                name="age"
                label="Age:"
                errors={errors}
              />
              <EmailInput
                control={control}
                name="email"
                label="Email:"
                errors={errors}
              />
              <PasswordInput
                control={control}
                name="password"
                label="Password:"
                errors={errors}
              />
              <PasswordInput
                control={control}
                name="confirmPassword"
                label="Confirm Password:"
                errors={errors}
              />
              <RadioInput
                control={control}
                name="gender"
                label="Gender:"
                options={['Male', 'Female']}
                errors={errors}
              />
              <FileInput
                control={control}
                name="image"
                label="Upload Image:"
                errors={errors}
              />
              <CountryInput
                control={control}
                name="country"
                label="Country:"
                countries={countries}
                errors={errors}
              />
              <CheckboxInput
                control={control}
                name="termsAccepted"
                label="Accept Terms and Conditions:"
                handleTermsChange={handleTermsChange}
                errors={errors}
              />
              <button
                type="submit"
                disabled={!isTermsAccepted}
                className={!isTermsAccepted ? styles.disabledButton : ''}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ControlledForm;
