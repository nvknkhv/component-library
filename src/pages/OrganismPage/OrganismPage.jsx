import React from 'react';

import { ELEMENTS_CONFIG } from 'config';
import { Card } from 'components/Layout';
import { Preview } from 'components/Layout/styles';
import Accordion from 'components/Organism/Accordion';
import Histogram from 'components/Organism/Histogram';
import Modal from 'components/Organism/Modal';
import route from './route';

const OrganismPage = () => {
  return (
    <Preview>
      <Card name={ELEMENTS_CONFIG.modal.name} path={ELEMENTS_CONFIG.modal.path}>
        <Modal isPreview />
      </Card>
      <Card
        name={ELEMENTS_CONFIG.accordion.name}
        path={ELEMENTS_CONFIG.accordion.path}
      >
        <Accordion isPreview />
      </Card>
      <Card
        name={ELEMENTS_CONFIG.histogram.name}
        path={ELEMENTS_CONFIG.histogram.path}
      >
        <Histogram />
      </Card>
    </Preview>
  );
};

export default { ...route, element: <OrganismPage /> };
