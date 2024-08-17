import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateForm } from '../../slices/formSlice';
import { addImage } from '../../slices/imageSlice';
import { RootState } from '../../store/store';
import styles from './ControlledForm.module.scss';

interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  termsAccepted: boolean;
  country: string;
  image: FileList;
}

const ControlledForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
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
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputBlock}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true, pattern: /^[A-Z]/ }}
            render={({ field }) => (
              <input className={styles.input} {...field} />
            )}
          />
          {errors.name && (
            <p className={styles.error}>
              Name must start with an uppercase letter.
            </p>
          )}
        </div>
        <div className={styles.inputBlock}>
          <label className={styles.label} htmlFor="age">
            Age:
          </label>
          <Controller
            name="age"
            control={control}
            defaultValue={0}
            rules={{ required: true, min: 0 }}
            render={({ field }) => (
              <input className={styles.input} type="number" {...field} />
            )}
          />
          {errors.age && (
            <p className={styles.error}>Age must be a positive number.</p>
          )}
        </div>
        <div className={styles.inputBlock}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input className={styles.input} type="email" {...field} />
            )}
          />
          {errors.email && <p className={styles.error}>Email is required.</p>}
        </div>
        <div className={styles.inputBlock}>
          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
            }}
            render={({ field }) => (
              <input className={styles.input} type="password" {...field} />
            )}
          />
          {errors.password && (
            <p className={styles.error}>
              Password must contain at least one digit, one uppercase letter,
              one lowercase letter, and one special character.
            </p>
          )}
        </div>
        <div className={styles.inputBlock}>
          <label className={styles.label} htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              validate: (value) => value === watch('password'),
            }}
            render={({ field }) => (
              <input className={styles.input} type="password" {...field} />
            )}
          />
          {errors.confirmPassword && (
            <p className={styles.error}>Passwords must match.</p>
          )}
        </div>
        <div className={styles.inputBlock}>
          <label className={styles.label}>Gender:</label>
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <input
                  type="radio"
                  value="Male"
                  checked={field.value === 'Male'}
                  onChange={() => field.onChange('Male')}
                />{' '}
                Male
                <input
                  type="radio"
                  value="Female"
                  checked={field.value === 'Female'}
                  onChange={() => field.onChange('Female')}
                />{' '}
                Female
              </>
            )}
          />
          {errors.gender && <p className={styles.error}>Gender is required.</p>}
        </div>
        <div className={styles.inputBlock}>
          <label className={styles.label} htmlFor="image">
            Upload Image:
          </label>
          <Controller
            name="image"
            control={control}
            defaultValue={undefined}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                className={styles.input}
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => field.onChange(e.target.files)}
              />
            )}
          />
          {errors.image && <p className={styles.error}>Image is required.</p>}
        </div>
        <div className={styles.inputBlock}>
          <label className={styles.label} htmlFor="country">
            Country:
          </label>
          <Controller
            name="country"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <input className={styles.input} list="countries" {...field} />
                <datalist id="countries">
                  {countries.map((country) => (
                    <option key={country} value={country} />
                  ))}
                </datalist>
              </>
            )}
          />
          {errors.country && (
            <p className={styles.error}>Country is required.</p>
          )}
        </div>
        <div className={styles.inputBlock}>
          <label className={styles.label} htmlFor="terms">
            Accept Terms and Conditions:
          </label>
          <Controller
            name="termsAccepted"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="checkbox"
                {...field}
                checked={field.value} // Keep this to control the checkbox state
                onChange={(e) => {
                  field.onChange(e.target.checked);
                  handleTermsChange();
                }}
              />
            )}
          />
          {errors.termsAccepted && (
            <p className={styles.error}>
              You must accept the terms and conditions.
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={!isTermsAccepted}
          className={!isTermsAccepted ? styles.disabledButton : ''}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ControlledForm;
