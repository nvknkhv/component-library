import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'components/Molecule/Input';
import { Button } from 'components/Atom/Button';
import { useGlobalModal } from 'components/globalModal';
import './modal.scss';

const Modal = ({ isPreview = false }) => {
  const { setModal, resetModal } = useGlobalModal();

  const modalContent = (
    <div id="modal" className="modal">
      <div className="modal__popup">
        <header className="modal__title">
          <span>Modal title</span>
          <svg id="modal-close" className="modal__close" onClick={resetModal}>
            <use href="/component-library/public/sprite.svg#close" />
          </svg>
        </header>
        <div className="modal__divider" />
        <div className="modal__body">
          <Input label="name" />
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="modal__divider" />
        <div className="modal__footer">
          <Button type="primary" onClick={resetModal}>
            Save
          </Button>
          <Button type="secondary" onClick={resetModal}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );

  if (isPreview)
    return (
      <div id="modal" className="modal modal_preview">
        <div className="modal__popup">
          <header className="modal__title">
            <span>Modal title</span>
            <svg id="modal-close" className="modal__close">
              <use href="/component-library/public/sprite.svg#close" />
            </svg>
          </header>
          <div className="modal__divider" />
          <div className="modal__body">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>
    );
  return (
    <button
      id="modal-open"
      className="button button_primary"
      onClick={() => setModal(modalContent)}
    >
      Open modal
    </button>
  );
};

Modal.propTypes = {
  isPreview: PropTypes.bool,
};

export default Modal;
