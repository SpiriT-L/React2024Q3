import { Component } from 'react';
import Button from '../../components/Button/Button';
import DataDisplay from '../../components/DataDisplay/DataDisplay';
import Err from '../../components/ErrorBoundary/Error';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Header from '../../components/Page/Header/Header';
import styles from './Home.module.scss';

class Home extends Component {
  state = {
    newErr: false,
  };
  render() {
    return (
      <>
        <Header title="Home" />
        <main className={styles.main}>
          <ErrorBoundary>
            <Button
              className={styles.btn}
              onClick={() => {
                this.setState({ newErr: true });
              }}
            >
              Error
            </Button>
            {this.state.newErr && <Err />}
            <DataDisplay />
          </ErrorBoundary>
        </main>
      </>
    );
  }
}

export default Home;
