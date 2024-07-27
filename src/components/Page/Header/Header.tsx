import { NavLink } from 'react-router-dom';
import Checkbox from '../../Input/Checkbox/Checkbox';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.menu}>
          <nav className={styles.navBar}>
            <h1 className={styles.title}>Rick & Morty</h1>
            <div className={styles.navMenu}>
              <ul className={styles.ItemsMenu}>
                <li className={styles.itemMenu}>
                  <NavLink to="/">Character</NavLink>
                </li>
                <li className={styles.itemMenu}>
                  <NavLink to="/Location">Location</NavLink>
                </li>
                <li className={styles.itemMenu}>
                  <NavLink to="/Episodes">Episodes</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <div className={styles.checkbox}>
            <Checkbox />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
