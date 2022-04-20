import React from 'react';

import BurgerMenu from 'components/General/BurgerMenu';
import ThemeToggler from 'components/General/ThemeToggler';
import { Container } from 'components/Layout/styles';
import HeaderLogo from './HeaderLogo';
import './header.scss';

const ComponentPageHeader = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__navbar">
          <BurgerMenu />
          <HeaderLogo />
          <ThemeToggler />
        </div>
      </Container>
    </header>
  );
};

export default ComponentPageHeader;
