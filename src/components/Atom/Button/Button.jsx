import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export const Button = ({
  children,
  isDisabled = false,
  isPreview = false,
  type,
  onClick,
}) => {
  let className = `button button_${type}`;
  if (isPreview) className += ' button_preview';
  if (isDisabled) className += ' button_disabled';
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export const Buttons = ({ isPreview = false }) => {
  return (
    <div className={isPreview ? 'buttons buttons_preview' : 'buttons'}>
      <Button isPreview={isPreview} type="primary">
        Primary
      </Button>
      <Button isPreview={isPreview} type="secondary">
        Secondary
      </Button>
      <Button isPreview={isPreview} type="alt">
        Alternate
      </Button>
      <Button isPreview={isPreview} type="primary" isDisabled>
        Primary disabled
      </Button>
      <Button isPreview={isPreview} type="secondary" isDisabled>
        Secondary disabled
      </Button>
      <Button isPreview={isPreview} type="alt" isDisabled>
        Alternate disabled
      </Button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  isPreview: PropTypes.bool,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Buttons.propTypes = {
  isPreview: PropTypes.bool,
};
