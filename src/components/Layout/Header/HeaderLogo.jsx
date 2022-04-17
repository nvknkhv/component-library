import React from 'react';

import './header.scss';

const HeaderLogo = () => (
  <div className="header__logo">
    <svg className="header__logo-icon">
      <use href="/public/sprite.svg#square" />
    </svg>
    <svg className="header__logo-icon">
      <use href="/public/sprite.svg#circle" />
    </svg>
    <svg className="header__logo-icon">
      <use href="/public/sprite.svg#triangle" />
    </svg>
  </div>
);

export default HeaderLogo;
