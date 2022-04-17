import React from 'react';
import PropTypes from 'prop-types';

import './toggler.scss';

export const Toggler = ({
  children,
  isChecked = false,
  isDisabled = false,
}) => {
  let className = 'toggler';
  if (isChecked) className += ' toggler_checked';
  if (isDisabled) className += ' toggler_disabled';
  return (
    <label className={className}>
      <input
        type="checkbox"
        className="toggler__input"
        defaultChecked={isChecked}
        disabled={isDisabled}
      />
      <span className="toggler__state">
        <span className="toggler__control">
          <svg className="toggler__icon">
            <use href="/component-library/public/sprite.svg#toggler" />
          </svg>
        </span>
        <span className="toggler__title">{children}</span>
      </span>
    </label>
  );
};

export const Togglers = () => {
  return (
    <div className="toggler-group">
      <Toggler>Default</Toggler>
      <Toggler isChecked>Active</Toggler>
      <Toggler isDisabled>Disabled</Toggler>
    </div>
  );
};

Toggler.propTypes = {
  children: PropTypes.node,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
};
