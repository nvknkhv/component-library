import React from 'react';

import { ELEMENTS_CONFIG } from 'config';
import Avatar from 'components/Atom/Avatar';
import { Buttons } from 'components/Atom/Button';
import { Checkboxes } from 'components/Atom/Checkbox';
import { Radios } from 'components/Atom/Radio';
import { Togglers } from 'components/Atom/Toggler';
import Tooltip from 'components/Atom/Tooltip';
import { Card } from 'components/Layout';
import { Preview } from 'components/Layout/styles';
import route from './route';

const AtomPage = () => {
  return (
    <Preview>
      <Card
        name={ELEMENTS_CONFIG.tooltip.name}
        path={ELEMENTS_CONFIG.tooltip.path}
      >
        <Tooltip isPreview />
      </Card>
      <Card
        name={ELEMENTS_CONFIG.avatar.name}
        path={ELEMENTS_CONFIG.avatar.path}
      >
        <Avatar isPreview />
      </Card>
      <Card
        name={ELEMENTS_CONFIG.button.name}
        path={ELEMENTS_CONFIG.button.path}
      >
        <Buttons isPreview />
      </Card>
      <Card
        name={ELEMENTS_CONFIG.checkbox.name}
        path={ELEMENTS_CONFIG.checkbox.path}
      >
        <Checkboxes />
      </Card>
      <Card name={ELEMENTS_CONFIG.radio.name} path={ELEMENTS_CONFIG.radio.path}>
        <Radios />
      </Card>
      <Card
        name={ELEMENTS_CONFIG.toggler.name}
        path={ELEMENTS_CONFIG.toggler.path}
      >
        <Togglers />
      </Card>
    </Preview>
  );
};

export default { ...route, element: <AtomPage /> };
