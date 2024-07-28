import React, { useEffect } from 'react';
import {
  THEME_DARK,
  THEME_LIGHT,
  useTheme,
} from '../../../context/ThemeProvider';
import './Checkbox.scss';
import Moon from './moon.svg';
import Sun from './sun.svg';

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
    localStorage.setItem('data-theme', newTheme);
  };

  return (
    <>
      <input
        className="inputCheckbox"
        type="checkbox"
        checked={isTheme.theme === THEME_DARK}
        onChange={handleToggle}
        id="darkMode"
      />
      <label className="labelCheckbox" htmlFor="darkMode">
        <img className="sun" src={Sun} alt="Sun" />
        <img className="moon" src={Moon} alt="Sun" />
      </label>
    </>
  );
};

export default Checkbox;
