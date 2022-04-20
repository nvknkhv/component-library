import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Input } from 'components/Molecule/Input';
import './modal.scss';

const Modal = ({ isPreview = false }) => {
  const [isOpened, setOpened] = useState(false);
  if (isPreview)
    return (
      <div id="modal" className="modal modal_preview">
        <div className="modal__popup">
          <div className="modal__content">
            <header className="modal__title">
              <span>Modal title</span>
              <svg id="modal-close" className="modal__close">
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
    );
  return (
    <>
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
      {isOpened && (
        <div id="modal" className="modal">
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
                <Input label="name" />
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
