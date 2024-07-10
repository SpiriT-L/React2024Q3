import { Component } from 'react';
import Api from '../../../services/Api/Api';
import styles from './main.module.scss';

class Main extends Component {
  render() {
    return (
      <>
        <main className={styles.main}>
          <Api />
        </main>
      </>
    );
  }
}

export default Main;
