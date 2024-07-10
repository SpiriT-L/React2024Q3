import Header from '../../components/Page/Header/Header';
import { Component } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Err from '../../components/ErrorBoundary/Error';
import DataDisplay from '../../components/DataDisplay/DataDisplay';
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
            <button
              onClick={() => {
                this.setState({ newErr: true });
              }}
            >
              Error
            </button>
            {this.state.newErr && <Err />}
            <DataDisplay />
          </ErrorBoundary>
        </main>
      </>
    );
  }
}

export default Home;
