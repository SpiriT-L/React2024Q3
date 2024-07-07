import { Component } from 'react';
import Search from '../../components/Search';
import Header from '../../components/Page/Header/Header';
import styles from './Home.module.scss';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Err from '../../components/ErrorBoundary/Error';

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
          </ErrorBoundary>
          <Search />
        </main>
      </>
    );
  }
}

export default Home;
