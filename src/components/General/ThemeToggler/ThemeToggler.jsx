import React from 'react';

import { useTheme } from 'theme';
import { Toggler } from 'components/Atom/Toggler';
import './themeToggler.scss';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="theme-toggler">
      <svg className="theme-toggler__icon">
        <use href="/component-library/public/sprite.svg#sun" />
      </svg>
      <Toggler isChecked={theme === 'dark'} onClick={toggleTheme} />
      <svg className="theme-toggler__icon">
        <use href="/component-library/public/sprite.svg#moon" />
      </svg>
    </div>
  );
};

export default ThemeToggler;
