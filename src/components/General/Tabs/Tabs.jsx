import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, matchPath } from 'react-router';
import { Link } from 'react-router-dom';

import './tabs.scss';

export const TabsWrapper = ({ children }) => (
  <ul className="tabs">{children}</ul>
);

export const Tab = ({ isActive = false, children, onClick }) => (
  <li
    className={isActive ? 'tabs__button tabs__button_active' : 'tabs__button'}
    onClick={onClick}
  >
    {children}
  </li>
);

export const TabLink = ({ children, parent, to }) => {
  const { pathname: currentPath } = useLocation();
  const destinationPath = to === '/' ? parent : [parent, to].join('/');
  const isActive = !!matchPath(currentPath, destinationPath);
  return (
    <Link to={destinationPath}>
      <Tab isActive={isActive}>{children}</Tab>
    </Link>
  );
};

TabsWrapper.propTypes = {
  children: PropTypes.node,
};

Tab.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

TabLink.propTypes = {
  children: PropTypes.node,
  parent: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
