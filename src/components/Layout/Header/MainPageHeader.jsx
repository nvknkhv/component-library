import React from 'react';

import BurgerMenu from 'components/General/BurgerMenu';
import { Container } from 'components/Layout/styles';
import HeaderLogo from './HeaderLogo';
import './header.scss';

const MainPageHeader = () => (
  <header className="header header_white">
    <Container>
      <div className="header__navbar">
        <BurgerMenu />
        <HeaderLogo />
      </div>
      <h1 className="header__title">Reusable component library</h1>
    </Container>
  </header>
);

export default MainPageHeader;
