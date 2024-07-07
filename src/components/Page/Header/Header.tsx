import { Component } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  title: string;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <header className={styles.header}>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
