import React from 'react';

import './histogram.scss';

const Histogram = () => {
  return (
    <div className="histogram">
      <header className="histogram__header">
        <div className="histogram__header-text">
          <p className="histogram__title">Total orders</p>
          <p className="histogram__link">Some info</p>
        </div>
        <p className="histogram__count">50254</p>
      </header>
      <div className="histogram__columns">
        <div className="histogram__column" style={{ '--value': 0.2 }} />
        <div className="histogram__column" style={{ '--value': 0.4 }} />
        <div className="histogram__column" style={{ '--value': 1 }} />
        <div className="histogram__column" style={{ '--value': 0.8 }} />
        <div className="histogram__column" style={{ '--value': 0.6 }} />
      </div>
    </div>
  );
};

export default Histogram;
