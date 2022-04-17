import React, { useState } from 'react';
import styled from 'styled-components';

import { HeaderLogo, ComponentMenu } from 'components/Layout';
import { Container, Divider } from 'components/Layout/styles';
import './burgerMenu.scss';

const MenuWrapper = styled.div`
  padding: 0 16px;
`;

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        id="burger-menu-open"
        className="burger-menu-open"
        onClick={() => setOpen(true)}
      >
        <svg className="burger-menu__icon">
          <use href="/component-library/public/sprite.svg#burger" />
        </svg>
      </div>
      <div id="burger-menu" className="burger-menu" data-open={isOpen}>
        <div className="burger-menu__menu">
          <header className="header header_white">
            <Container>
              <div className="header__navbar burger-menu__navbar">
                <div
                  id="burger-menu-close"
                  className="burger-menu-close"
                  onClick={() => setOpen(false)}
                >
                  <svg className="burger-menu__icon">
                    <use href="/component-library/public/sprite.svg#close" />
                  </svg>
                </div>
                <HeaderLogo />
              </div>
            </Container>
          </header>
          <Divider />
          <MenuWrapper>
            <ComponentMenu />
          </MenuWrapper>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
