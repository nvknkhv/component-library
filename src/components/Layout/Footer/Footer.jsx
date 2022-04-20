import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

const Footer = ({ isFull = false }) => {
  if (isFull) {
    return (
      <footer className="footer footer_full">
        <h2 className="footer__title">About</h2>
        <div className="footer__details">
          This project is a collection of professionally designed, pre-built,
          fully responsive HTML snippets you can drop into your projects. Get
          started by checking out our free preview components, or browsing the
          PNG previews in the categories you are most curious about.
        </div>
      </footer>
    );
  }
  return (
    <footer className="footer">
      <header>
        <h2 className="footer__title">Reusable component library</h2>
      </header>
    </footer>
  );
};

Footer.propTypes = {
  isFull: PropTypes.bool,
};

export default Footer;
