import React from 'react';
import PropTypes from 'prop-types';

import './radio.scss';

export const Radio = ({
  children,
  isChecked = false,
  isDisabled = false,
  name,
}) => {
  let className = 'radio';
  if (isChecked) className += ' radio_checked';
  if (isDisabled) className += ' radio_disabled';
  return (
    <label className={className}>
      <input
        type="radio"
        className="radio__input"
        name={name}
        defaultChecked={isChecked}
        disabled={isDisabled}
      />
      <span className="radio__state">
        <span className="radio__control">
          <svg className="radio__icon">
            <use href="/public/sprite.svg#radio" />
          </svg>
        </span>
        <span className="radio__title">{children}</span>
      </span>
    </label>
  );
};

export const Radios = () => {
  return (
    <div className="radio-group">
      <Radio name="fields">Default</Radio>
      <Radio name="fields" isChecked>
        Selected
      </Radio>
      <Radio name="fields" isDisabled>
        Disabled
      </Radio>
    </div>
  );
};

Radio.propTypes = {
  children: PropTypes.node,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
};
