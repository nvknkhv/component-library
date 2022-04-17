import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/Atom/Avatar';
import {
  html as htmlAvatar,
  scss as scssAvatar,
} from 'components/Atom/Avatar/const';
import { Buttons } from 'components/Atom/Button';
import {
  html as htmlButton,
  scss as scssButton,
} from 'components/Atom/Button/const';
import { Checkboxes } from 'components/Atom/Checkbox';
import {
  html as htmlCheckbox,
  scss as scssCheckbox,
} from 'components/Atom/Checkbox/const';
import { Radios } from 'components/Atom/Radio';
import {
  html as htmlRadio,
  scss as scssRadio,
} from 'components/Atom/Radio/const';
import { Togglers } from 'components/Atom/Toggler';
import {
  html as htmlToggler,
  scss as scssToggler,
} from 'components/Atom/Toggler/const';
import Tooltip from 'components/Atom/Tooltip';
import {
  html as htmlTooltip,
  scss as scssTooltip,
} from 'components/Atom/Tooltip/const';
import Calendar from 'components/Molecule/Calendar';
import {
  html as htmlCalendar,
  scss as scssCalendar,
} from 'components/Molecule/Calendar/const';
import { Inputs } from 'components/Molecule/Input';
import {
  html as htmlInput,
  scss as scssInput,
} from 'components/Molecule/Input/const';
import Skeleton from 'components/Molecule/Skeleton';
import {
  html as htmlSkeleton,
  scss as scssSkeleton,
} from 'components/Molecule/Skeleton/const';
import Accordion from 'components/Organism/Accordion';
import {
  html as htmlAccordion,
  scss as scssAccordion,
} from 'components/Organism/Accordion/const';
import Histogram from 'components/Organism/Histogram';
import {
  html as htmlHistogram,
  scss as scssHistogram,
} from 'components/Organism/Histogram/const';
import Modal from 'components/Organism/Modal';
import {
  html as htmlModal,
  scss as scssModal,
  js as jsModal,
} from 'components/Organism/Modal/const';

const TooltipWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;

export const ELEMENTS_CONFIG = {
  avatar: {
    name: 'Avatar',
    content: <Avatar isPreview />,
    tabs: {
      html: htmlAvatar,
      scss: scssAvatar,
    },
    path: 'avatar',
  },
  button: {
    name: 'Button',
    content: <Buttons />,
    tabs: {
      html: htmlButton,
      scss: scssButton,
    },
    path: 'button',
  },
  checkbox: {
    name: 'Checkbox',
    content: <Checkboxes />,
    tabs: {
      html: htmlCheckbox,
      scss: scssCheckbox,
    },
    path: 'checkbox',
  },
  tooltip: {
    name: 'Tooltip',
    content: (
      <TooltipWrapper>
        <Tooltip />
      </TooltipWrapper>
    ),
    tabs: {
      html: htmlTooltip,
      scss: scssTooltip,
    },
    path: 'tooltip',
  },
  radio: {
    name: 'Radio',
    content: <Radios />,
    tabs: {
      html: htmlRadio,
      scss: scssRadio,
    },
    path: 'radio',
  },
  toggler: {
    name: 'Toggler',
    content: <Togglers />,
    tabs: {
      html: htmlToggler,
      scss: scssToggler,
    },
    path: 'toggler',
  },
  calendar: {
    name: 'Calendar',
    content: <Calendar />,
    tabs: {
      html: htmlCalendar,
      scss: scssCalendar,
    },
    path: 'calendar',
  },
  input: {
    name: 'Input',
    content: <Inputs />,
    tabs: {
      html: htmlInput,
      scss: scssInput,
    },
    path: 'input',
  },
  skeleton: {
    name: 'Skeleton',
    content: <Skeleton />,
    tabs: {
      html: htmlSkeleton,
      scss: scssSkeleton,
    },
    path: 'skeleton',
  },
  accordion: {
    name: 'Accordion',
    content: <Accordion />,
    tabs: {
      html: htmlAccordion,
      scss: scssAccordion,
    },
    path: 'accordion',
  },
  histogram: {
    name: 'Histogram',
    content: <Histogram />,
    tabs: {
      html: htmlHistogram,
      scss: scssHistogram,
    },
    path: 'histogram',
  },
  modal: {
    name: 'Modal',
    content: <Modal />,
    tabs: {
      html: htmlModal,
      scss: scssModal,
      js: jsModal,
    },
    path: 'modal',
  },
};
