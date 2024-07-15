import { useState } from 'react';
import Button from '../../components/Button/Button';
import DataDisplay from '../../components/DataDisplay/DataDisplay';
import Err from '../../components/ErrorBoundary/Error';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Header from '../../components/Page/Header/Header';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const [newErr, setNewErr] = useState(false);

  return (
    <>
      <Header title="Home" />
      <main className={styles.main}>
        <ErrorBoundary>
          <Button
            className={styles.btn}
            onClick={() => {
              setNewErr(true);
            }}
          >
            Error
          </Button>
          {newErr && <Err />}
          <DataDisplay />
        </ErrorBoundary>
      </main>
    </>
  );
};

export default Home;
