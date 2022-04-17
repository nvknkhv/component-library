import React from 'react';

import { ELEMENTS_CONFIG } from 'config';
import { Card } from 'components/Layout';
import { Preview } from 'components/Layout/styles';
import Calendar from 'components/Molecule/Calendar';
import { Inputs } from 'components/Molecule/Input';
import Skeleton from 'components/Molecule/Skeleton';
import route from './route';

const MoleculePage = () => {
  return (
    <Preview>
      <Card
        name={ELEMENTS_CONFIG.skeleton.name}
        path={ELEMENTS_CONFIG.skeleton.path}
      >
        <Skeleton />
      </Card>
      <Card
        name={ELEMENTS_CONFIG.calendar.name}
        path={ELEMENTS_CONFIG.calendar.path}
      >
        <Calendar />
      </Card>
      <Card name={ELEMENTS_CONFIG.input.name} path={ELEMENTS_CONFIG.input.path}>
        <Inputs isPreview />
      </Card>
    </Preview>
  );
};

export default { ...route, element: <MoleculePage /> };
