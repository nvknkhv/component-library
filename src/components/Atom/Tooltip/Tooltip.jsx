import React from 'react';
import PropTypes from 'prop-types';

import './tooltip.scss';

const Tooltip = ({ isPreview }) => {
  return (
    <div className={isPreview ? 'tooltip tooltip_preview' : 'tooltip'}>
      <svg className="tooltip__icon">
        <use href="/component-library/public/sprite.svg#help" />
      </svg>
      <div className="tooltip__bubble">Helper Text</div>
    </div>
  );
};

Tooltip.propTypes = {
  isPreview: PropTypes.bool,
};

export default Tooltip;
