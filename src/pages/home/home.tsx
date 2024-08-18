import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import styles from './home.module.scss';

const Home: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form);
  const image = useSelector((state: RootState) => state.image.image);

  const isFormDataEmpty =
    !formData.name &&
    !formData.age &&
    !formData.email &&
    !formData.gender &&
    !formData.country &&
    !formData.termsAccepted;

  return (
    <main className="main">
      <section className={styles.sectionHome}>
        <div className="container">
          <h2>Home</h2>

          <div className={styles.formDataBlock}>
            {isFormDataEmpty ? (
              <div>
                <p className={styles.formDataItem}>
                  <Link to="/uncontrolled">Uncontrolled form</Link>
                </p>
                <p className={styles.formDataItem}>
                  <Link to="/controlled">Controlled form</Link>
                </p>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
