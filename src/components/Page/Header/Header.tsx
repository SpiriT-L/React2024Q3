'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import imgMorty from '../../../../public/morty.svg';
import imgRick from '../../../../public/rick.svg';
import {
  THEME_DARK,
  THEME_LIGHT,
  useTheme,
} from '../../../context/ThemeProvider';
import Checkbox from '../../Input/Checkbox/Checkbox';
import styles from './Header.module.scss';

const Header = () => {
  const [icon, setIcon] = useState(imgRick);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgRick);
        break;
      case THEME_DARK:
        setIcon(imgMorty);
        break;
      default:
        setIcon(imgRick);
        break;
    }
  }, [isTheme]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.menu}>
          <nav className={styles.navBar}>
            <div className={styles.logo}>
              <img className={styles.iconLogo} src={icon.src} alt="icon" />
              <h1 className={styles.title}>Rick & Morty</h1>
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
            <Checkbox />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
