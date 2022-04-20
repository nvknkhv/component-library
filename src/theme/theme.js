import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { lightTheme, darkTheme } from './colors';

const initialState = {
  theme: 'light',
  toggleTheme: () => {},
  componentMounted: false,
};

export const Theme = React.createContext(initialState.theme);

export const useTheme = () => {
  return useContext(Theme);
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState();
  const [componentMounted, setComponentMounted] = useState(false);

  const setThemeStyles = (theme) => {
    const themeStyles = theme === 'light' ? lightTheme : darkTheme;
    Object.keys(themeStyles).forEach((key) => {
      const value = themeStyles[key];
      document.documentElement.style.setProperty(key, value);
    });
  };

  const setTheme = (theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
    setThemeStyles(theme);
  };

  const toggleTheme = () => {
    currentTheme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    let mode;
    if (localTheme) {
      mode = localTheme;
    } else {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        mode = 'dark';
      } else {
        mode = initialState.theme;
      }
    }
    setTheme(mode);
    setComponentMounted(true);
  }, []);

  return (
    <Theme.Provider
      value={{ theme: currentTheme, toggleTheme, componentMounted }}
    >
      {children}
    </Theme.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
