import React from 'react';
import PropTypes from 'prop-types';

import Image from 'assets/images/avatar.jpeg';
import './avatar.scss';

const Avatar = ({ isPreview = false }) => {
  return (
    <div className={isPreview ? 'avatar avatar_preview' : 'avatar'}>
      <img className="avatar__icon" src={Image} alt="avatar" />
    </div>
  );
};

Avatar.propTypes = {
  isPreview: PropTypes.bool,
};

export default Avatar;
