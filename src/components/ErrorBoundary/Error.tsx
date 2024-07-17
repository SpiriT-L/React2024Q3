import { Component } from 'react';

class Err extends Component {
  errFunc() {
    throw new Error('Error!!!');
    return <div></div>;
  }

  render() {
    return <div>{this.errFunc()}</div>;
  }
}

export default Err;
