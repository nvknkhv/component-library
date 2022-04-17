import React from 'react';

import BurgerMenu from 'components/General/BurgerMenu';
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
        </div>
      </Container>
    </header>
  );
};

export default ComponentPageHeader;
