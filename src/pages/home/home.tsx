import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Home: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form);
  const image = useSelector((state: RootState) => state.image.image);

  return (
    <div>
      <h1>Home</h1>
      <div>
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
    </div>
  );
};

export default Home;
