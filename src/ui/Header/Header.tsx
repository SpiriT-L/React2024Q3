import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink to="/uncontrolled">Uncontrolled</NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink to="/controlled">Controlled</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
