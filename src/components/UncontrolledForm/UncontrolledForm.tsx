import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateForm } from '../../slices/formSlice';
import { addImage } from '../../slices/imageSlice';
import { RootState } from '../../store/store';
import styles from './UncontrolledForm.module.scss';

const UncontrolledForm: React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
  const genderInputRef = useRef<HTMLInputElement>(null);
  const termsInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const countryInputRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<string[]>([]);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const dispatch = useDispatch();
  const countries = useSelector(
    (state: RootState) => state.countries.countries,
  );
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: string[] = [];
    const name = nameInputRef.current?.value;
    const age = ageInputRef.current?.value;
    // const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    const confirmPassword = confirmPasswordInputRef.current?.value;
    const terms = termsInputRef.current?.checked;

    if (!name || !/^[A-Z]/.test(name)) {
      newErrors.push('Name must start with an uppercase letter.');
    }
    if (!age || isNaN(Number(age)) || Number(age) < 0) {
      newErrors.push('Age must be a positive number.');
    }
    if (!password || !confirmPassword || password !== confirmPassword) {
      newErrors.push('Passwords must match.');
    }
    if (password && !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
      newErrors.push(
        'Password must contain at least one digit, one uppercase letter, one lowercase letter, and one special character.',
      );
    }
    if (!terms) {
      newErrors.push('You must accept the terms and conditions.');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const imageFile = imageInputRef.current?.files?.[0];
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
          name: nameInputRef.current?.value || '',
          age: Number(ageInputRef.current?.value) || 0,
          email: emailInputRef.current?.value || '',
          gender: genderInputRef.current?.value || '',
          termsAccepted: termsInputRef.current?.checked || false,
          country: countryInputRef.current?.value || '',
        }),
      );
      console.log('Form submitted successfully!');
      navigate('/');
    }
  };

  const handleTermsChange = () => {
    setIsTermsAccepted(termsInputRef.current?.checked || false);
  };

  return (
    <>
      <main />
      <section className={styles.sectionControlledForm}>
        <div className="container">
          <h2>Uncontrolled Form</h2>
          <div className={styles.formDataBlock}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="name">
                  Name:
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  ref={nameInputRef}
                  required
                />
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="age">
                  Age:
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="age"
                  ref={ageInputRef}
                  required
                />
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="email">
                  Email:
                </label>
                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  ref={emailInputRef}
                  required
                />
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="password">
                  Password:
                </label>
                <input
                  className={styles.input}
                  type="password"
                  id="password"
                  ref={passwordInputRef}
                  required
                />
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="confirmPassword">
                  Confirm Password:
                </label>
                <input
                  className={styles.input}
                  type="password"
                  id="confirmPassword"
                  ref={confirmPasswordInputRef}
                  required
                />
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Gender:</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  ref={genderInputRef}
                  required
                />{' '}
                Male
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  ref={genderInputRef}
                  required
                />{' '}
                Female
              </div>

              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="image">
                  Upload Image:
                </label>
                <input
                  className={styles.input}
                  type="file"
                  id="image"
                  ref={imageInputRef}
                  accept="image/png, image/jpeg"
                  required
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
                  ref={countryInputRef}
                  required
                />
                <datalist id="countries">
                  {countries.map((country) => (
                    <option key={country} value={country} />
                  ))}
                </datalist>
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label} htmlFor="terms">
                  Accept Terms and Conditions:
                </label>
                <input
                  type="checkbox"
                  id="terms"
                  ref={termsInputRef}
                  onChange={handleTermsChange}
                  required
                />
              </div>
              {errors.length > 0 && (
                <div className={styles.error}>
                  {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
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

export default UncontrolledForm;
