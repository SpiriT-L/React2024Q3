import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './home.module.scss';

const Home: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form);
  const image = useSelector((state: RootState) => state.image.image);

  return (
    <div className="container">
      <h2>Home</h2>
      <section className={styles.sectionHome}>
        <div className={styles.formDataBlock}>
          <h2>Form Data</h2>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Age:</strong> {formData.age}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Gender:</strong> {formData.gender}
          </p>
          <p>
            <strong>Country:</strong> {formData.country}
          </p>
          <p>
            <strong>Terms Accepted:</strong>{' '}
            {formData.termsAccepted ? 'Yes' : 'No'}
          </p>
          {image && (
            <div>
              <h3>Uploaded Image</h3>
              <img
                src={image}
                alt="Uploaded"
                style={{ maxWidth: '200px', maxHeight: '200px' }}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
