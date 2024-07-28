import React, { useContext, useState } from 'react';
import { changeCssVariables } from '../services/changeCssVariables';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

interface ThemeContextType {
  theme: string | null;
  change: (name: string) => void;
}

const ThemeContext = React.createContext<ThemeContextType>({
  theme: null,
  change: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...props
}) => {
  const [theme, setTheme] = useState<string | null>(null);

  const changeTheme = (name: string) => {
    setTheme(name);
    changeCssVariables(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        change: changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
