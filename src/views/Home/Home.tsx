import { useState } from 'react';
import Button from '../../components/Button/Button';
import DataDisplay from '../../components/DataDisplay/DataDisplay';
import Err from '../../components/ErrorBoundary/Error';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Header from '../../components/Page/Header/Header';
import SearchFilter from '../../components/SearchFilter/SearchFilter';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const [newErr, setNewErr] = useState(false);
  const [filterText, setFilterText] = useState('');

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
          <SearchFilter filterText={filterText} setFilterText={setFilterText} />
          <DataDisplay filterText={filterText} />
        </ErrorBoundary>
      </main>
    </>
  );
};

export default Home;
