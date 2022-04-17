import React from 'react';

import AtomPageRoute from 'pages/AtomPage/route';
import MainPageRoute from 'pages/MainPage/route';
import MoleculePageRoute from 'pages/MoleculePage/route';
import OrganismPageRoute from 'pages/OrganismPage/route';

import { TabsWrapper, TabLink } from './Tabs';

export const TabsNav = () => {
  return (
    <TabsWrapper>
      <TabLink parent={MainPageRoute.path} to={AtomPageRoute.path}>
        Atoms
      </TabLink>
      <TabLink parent={MainPageRoute.path} to={MoleculePageRoute.path}>
        Molecules
      </TabLink>
      <TabLink parent={MainPageRoute.path} to={OrganismPageRoute.path}>
        Organisms
      </TabLink>
    </TabsWrapper>
  );
};

export default TabsNav;
