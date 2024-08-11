import Link from 'next/link';
import imgMorty from '../../../../public/morty.svg';
import imgRick from '../../../../public/rick.svg';
import ThemeProvider, { THEME_DARK } from '../../../context/ThemeProvider';
import Checkbox from '../../Input/Checkbox/Checkbox';
import styles from './Header.module.scss';

const Header = (theme: string) => {
  const icon = theme === THEME_DARK ? imgMorty : imgRick;

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.menu}>
          <nav className={styles.navBar}>
            <div className={styles.logo}>
              <img className={styles.iconLogo} src={icon.src} alt="icon" />
              <h1 className={styles.title}>
                <Link className="titleLink" href="/">
                  Rick & Morty
                </Link>
              </h1>
            </div>
            <div className={styles.navMenu}>
              <ul className={styles.ItemsMenu}>
                <li className={styles.itemMenu}>
                  <Link href="/">Character</Link>
                </li>
                <li className={styles.itemMenu}>
                  <Link href="/location">Location</Link>
                </li>
                <li className={styles.itemMenu}>
                  <Link href="/episodes">Episodes</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className={styles.checkbox}>
            <ThemeProvider>
              <Checkbox />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
