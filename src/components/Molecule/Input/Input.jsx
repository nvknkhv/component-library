import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

export const Input = ({
  isDisabled = false,
  isValid,
  label,
  placeholder = 'Placeholder...',
}) => {
  let className = `input-group`;
  if (isValid) className += ' input-group_success';
  if (isValid === false) className += ' input-group_invalid';
  if (isDisabled) className += ' input-group_disabled';
  return (
    <div className={className}>
      <label className="input-group__title">{label}</label>
      <div className="input-group__body">
        <input
          type="text"
          className="input-group__input"
          placeholder={placeholder}
        />
        <div className="input-group__control">
          <div className="input-group__icon" />
        </div>
      </div>
    </div>
  );
};

export const Inputs = ({ isPreview = false }) => {
  if (isPreview) {
    return (
      <div className="inputs">
        <Input label="Success" isValid={true} />
        <Input label="Error" isValid={false} />
      </div>
    );
  }
  return (
    <div className="inputs">
      <Input label="Default" />
      <Input label="Success" isValid={true} />
      <Input label="Error" isValid={false} />
      <Input label="Disabled" isDisabled />
    </div>
  );
};

Input.propTypes = {
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Inputs.propTypes = {
  isPreview: PropTypes.bool,
};
