import { useEffect } from 'react';
import useTheme from '../../../hooks/useTheme';
import './Checkbox.scss';
import Moon from './moon.svg';
import Sun from './sun.svg';

const Checkbox: React.FC = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem('data-theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
    }
  }, []);

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('data-theme', newTheme);
  };

  return (
    <>
      <input
        className="inputCheckbox"
        type="checkbox"
        name=""
        id="darkMode"
        checked={theme === 'dark'}
        onChange={handleToggle}
      />
      <label htmlFor="darkMode">
        <img className="sun" src={Sun} alt="Sun" />
        <img className="moon" src={Moon} alt="Sun" />
      </label>
    </>
  );
};

export default Checkbox;
