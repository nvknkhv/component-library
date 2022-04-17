import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ELEMENTS_CONFIG } from 'config';
import { basePath } from 'pages/ComponentPage/route.js';
import './component.scss';

const ComponentMenu = ({ activeLink }) => {
  const links = Object.values(ELEMENTS_CONFIG)
    .sort(({ name: name1 }, { name: name2 }) => name1.localeCompare(name2))
    .map(({ path, name }) => (
      <Link
        key={name}
        to={`${basePath}/${path}`}
        className={
          activeLink === name ? 'menu__navlink_active' : 'menu__navlink'
        }
      >
        {name}
      </Link>
    ));

  return (
    <div className="menu">
      <Link to="/" className="menu__title">
        Components
      </Link>
      <nav className="menu__nav">{links}</nav>
    </div>
  );
};

ComponentMenu.propTypes = {
  activeLink: PropTypes.string,
};

export default ComponentMenu;
