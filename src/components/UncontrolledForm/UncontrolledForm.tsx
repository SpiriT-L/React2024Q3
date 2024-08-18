import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { updateForm } from '../../slices/formSlice';
import { addImage } from '../../slices/imageSlice';
import { RootState } from '../../store/store';
import { FormData } from '../../types/iFormData';
import styles from './UncontrolledForm.module.scss';

const UncontrolledForm: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector(
    (state: RootState) => state.countries.countries,
  );
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Z]/, 'Name must start with an uppercase letter.')
      .required('Name is required'),
    age: Yup.number()
      .positive('Age must be a positive number.')
      .required('Age is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
        'Password must contain at least one digit, one uppercase letter, one lowercase letter, and one special character.',
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    gender: Yup.string().required('Gender is required'),
    termsAccepted: Yup.boolean().oneOf(
      [true],
      'You must accept the terms and conditions.',
    ),
    country: Yup.string().required('Country is required'),
  });

  const formik = useFormik<FormData>({
    initialValues: {
      name: '',
      age: 0,
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      image: null,
      country: '',
      termsAccepted: false,
    },
    validationSchema,
    onSubmit: (values) => {
      const imageFile = values.image;
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
      dispatch(updateForm(values));
      console.log('Form submitted successfully!');
      navigate('/');
    },
  });

  return (
    <>
      <main />
      <section className={styles.sectionControlledForm}>
        <div className="container">
          <h2>Uncontrolled Form</h2>
          <div className={styles.formDataBlock}>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="name">
                  Name:
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className={styles.error}>{formik.errors.name}</div>
                ) : null}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="age">
                  Age:
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="age"
                  {...formik.getFieldProps('age')}
                />
                {formik.touched.age && formik.errors.age ? (
                  <div className={styles.error}>{formik.errors.age}</div>
                ) : null}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="email">
                  Email:
                </label>
                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={styles.error}>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="password">
                  Password:
                </label>
                <input
                  className={styles.input}
                  type="password"
                  id="password"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className={styles.error}>{formik.errors.password}</div>
                ) : null}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="confirmPassword">
                  Confirm Password:
                </label>
                <input
                  className={styles.input}
                  type="password"
                  id="confirmPassword"
                  {...formik.getFieldProps('confirmPassword')}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className={styles.error}>
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Gender:</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  {...formik.getFieldProps('gender')}
                />{' '}
                Male
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  {...formik.getFieldProps('gender')}
                />{' '}
                Female
                {formik.touched.gender && formik.errors.gender ? (
                  <div className={styles.error}>{formik.errors.gender}</div>
                ) : null}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="image">
                  Upload Image:
                </label>
                <input
                  className={styles.input}
                  type="file"
                  id="image"
                  onChange={(event) => {
                    formik.setFieldValue(
                      'image',
                      event.currentTarget.files?.[0],
                    );
                  }}
                  accept="image/png, image/jpeg"
                />
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="country">
                  Country:
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="country"
                  list="countries"
                  {...formik.getFieldProps('country')}
                />
                <datalist id="countries">
                  {countries.map((country) => (
                    <option key={country} value={country} />
                  ))}
                </datalist>
                {formik.touched.country && formik.errors.country ? (
                  <div className={styles.error}>{formik.errors.country}</div>
                ) : null}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="termsAccepted">
                  Accept Terms and Conditions:
                </label>
                <input
                  type="checkbox"
                  id="termsAccepted"
                  {...formik.getFieldProps('termsAccepted')}
                />
                {formik.touched.termsAccepted && formik.errors.termsAccepted ? (
                  <div className={styles.error}>
                    {formik.errors.termsAccepted}
                  </div>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={!formik.values.termsAccepted}
                className={
                  !formik.values.termsAccepted ? styles.disabledButton : ''
                }
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

export default UncontrolledForm;
