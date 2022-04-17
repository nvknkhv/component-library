import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

import { Container } from 'components/Layout/styles';
import { basePath } from 'pages/ComponentPage/route.js';

import './card.scss';

export const Card = ({ children, name, path }) => {
  return (
    <Link to={`${basePath}/${path}`} className="card">
      <div className="card__body">{children}</div>
      <div className="card__footer">
        <h3 className="card__title">{name}</h3>
      </div>
    </Link>
  );
};

export const Cards = () => (
  <section className="cards">
    <Container>
      <Outlet />
    </Container>
  </section>
);

Card.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
