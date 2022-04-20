import React from 'react';

import BurgerMenu from 'components/General/BurgerMenu';
import ThemeToggler from 'components/General/ThemeToggler';
import { Container } from 'components/Layout/styles';
import HeaderLogo from './HeaderLogo';
import './header.scss';

const MainPageHeader = () => (
  <header className="header header_main">
    <Container>
      <div className="header__navbar">
        <BurgerMenu />
        <HeaderLogo />
        <ThemeToggler />
      </div>
      <h1 className="header__title">Reusable component library</h1>
    </Container>
  </header>
);

export default MainPageHeader;
