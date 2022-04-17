import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

const Modal = ({ isPreview = false }) => {
  const [isOpened, setOpened] = useState(false);
  return (
    <>
      {!isPreview && (
        <button
          id="modal-open"
          className="button button_primary"
          onClick={() => {
            document.body.style.overflow = 'hidden';
            setOpened(true);
          }}
        >
          Open modal
        </button>
      )}
      {(isOpened || isPreview) && (
        <div id="modal" className={isPreview ? 'modal modal_preview' : 'modal'}>
          <div className="modal__popup">
            <div className="modal__content">
              <header className="modal__title">
                <span>Modal title</span>
                <svg
                  id="modal-close"
                  className="modal__close"
                  onClick={() => {
                    setOpened(false);
                    document.body.style.overflow = 'initial';
                  }}
                >
                  <use href="/component-library/public/sprite.svg#close" />
                </svg>
              </header>
              <div className="modal__body">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  isPreview: PropTypes.bool,
};

export default Modal;
