import React from 'react';
import PropTypes from 'prop-types';

import './accordion.scss';

const AccordionItem = ({ children, isOpened = false, title }) => (
  <details className="accordion__item" open={isOpened}>
    <summary className="accordion__trigger">
      <span>{title}</span>
      <div className="accordion__trigger-icon" />
    </summary>
    <div className="accordion__content">{children}</div>
  </details>
);

const Accordion = ({ isPreview = false }) => {
  if (isPreview)
    return (
      <div className="accordion">
        <AccordionItem title="Accordion item">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </AccordionItem>
      </div>
    );
  return (
    <div className="accordion">
      <AccordionItem title="Accordion item 1">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </AccordionItem>
      <AccordionItem title="Accordion item 2" isOpened>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </AccordionItem>
    </div>
  );
};

export default Accordion;

AccordionItem.propTypes = {
  children: PropTypes.node,
  isOpened: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Accordion.propTypes = {
  isPreview: PropTypes.bool,
};
