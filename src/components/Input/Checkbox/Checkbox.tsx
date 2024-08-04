import React, { useEffect } from 'react';
import Moon from '../../../../public/moon.svg';
import Sun from '../../../../public/sun.svg';
import {
  THEME_DARK,
  THEME_LIGHT,
  useTheme,
} from '../../../context/ThemeProvider';
import styles from './Checkbox.module.scss';

const Checkbox: React.FC = () => {
  const isTheme = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem('data-theme');
    if (savedTheme) {
      isTheme.change(savedTheme as 'light' | 'dark');
    }
  }, []);

  const handleToggle = () => {
    const newTheme = isTheme.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    isTheme.change(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('data-theme', newTheme);
  };

  return (
    <>
      <input
        className={styles.inputCheckbox}
        type="checkbox"
        checked={isTheme.theme === THEME_DARK}
        onChange={handleToggle}
        id="darkMode"
      />
      <label className={styles.labelCheckbox} htmlFor="darkMode">
        <img className={styles.sun} src={Sun.src} alt="Sun" />
        <img className={styles.moon} src={Moon.src} alt="Moon" />
      </label>
    </>
  );
};

export default Checkbox;
