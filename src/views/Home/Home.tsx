import { Component } from 'react';
import Search from '../../components/Search';
import Header from '../../components/Page/Header/Header';
import styles from './Home.module.scss';

class Home extends Component {
  render() {
    return (
      <>
        <Header title="Home" />
        <main className={styles.main}>
          <Search />
        </main>
      </>
    );
  }
}

export default Home;
