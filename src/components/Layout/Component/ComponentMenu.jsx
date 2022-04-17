import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import { ELEMENTS_CONFIG } from 'config';
import route, { basePath } from 'pages/ComponentPage/route.js';
import './component.scss';

const ComponentMenu = () => {
  const { componentPath } = useParams(route.path);
  const links = Object.values(ELEMENTS_CONFIG)
    .sort(({ name: name1 }, { name: name2 }) => name1.localeCompare(name2))
    .map(({ path, name }) => (
      <Link
        key={name}
        to={`${basePath}/${path}`}
        className={
          componentPath === path
            ? 'menu__navlink menu__navlink_active'
            : 'menu__navlink'
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

export default ComponentMenu;
