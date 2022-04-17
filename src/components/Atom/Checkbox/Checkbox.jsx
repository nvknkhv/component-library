import React from 'react';
import PropTypes from 'prop-types';

import './checkbox.scss';

export const Checkbox = ({
  children,
  isChecked = false,
  isDisabled = false,
}) => {
  let className = 'checkbox';
  if (isChecked) className += ' checkbox_checked';
  if (isDisabled) className += ' checkbox_disabled';
  return (
    <label className={className}>
      <input
        type="checkbox"
        className="checkbox__input"
        defaultChecked={isChecked}
        disabled={isDisabled}
      />
      <span className="checkbox__state">
        <span className="checkbox__control">
          <svg className="checkbox__icon">
            <use href="/component-library/public/sprite.svg#check" />
          </svg>
        </span>
        <span className="checkbox__title">{children}</span>
      </span>
    </label>
  );
};

export const Checkboxes = () => {
  return (
    <div className="checkbox-group checkbox-group">
      <Checkbox>Default</Checkbox>
      <Checkbox isChecked>Checked</Checkbox>
      <Checkbox isDisabled>Disabled</Checkbox>
    </div>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
};
