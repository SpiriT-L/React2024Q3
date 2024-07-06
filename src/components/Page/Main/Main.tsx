import { Component } from 'react';
import Api from '../../../services/api/api';

class Main extends Component {
  render() {
    return (
      <>
        <main>
          <Api />
        </main>
      </>
    );
  }
}

export default Main;
