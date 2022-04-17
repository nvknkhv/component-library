import React from 'react';

import './skeleton.scss';

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton__header">
        <div className="skeleton__circle" />
        <div className="skeleton__content">
          <div className="skeleton__rectangle skeleton__rectangle_width-third" />
          <div className="skeleton__rectangle skeleton__rectangle_width-half" />
        </div>
      </div>
      <div className="skeleton__content">
        <div className="skeleton__rectangle" />
        <div className="skeleton__rectangle" />
      </div>
    </div>
  );
};

export default Skeleton;
