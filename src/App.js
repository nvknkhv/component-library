import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { GlobalModal, GlobalModalProvider } from 'components/globalModal';
import AtomPage from 'pages/AtomPage';
import ComponentPage from 'pages/ComponentPage';
import MainPage from 'pages/MainPage';
import MoleculePage from 'pages/MoleculePage';
import OrganismPage from 'pages/OrganismPage';
import { useTheme } from 'theme';

const App = () => {
  const { componentMounted } = useTheme();
  if (!componentMounted) return null;
  return (
    <GlobalModalProvider>
      <Routes>
        <Route index element={<Navigate replace to={MainPage.path} />} />
        <Route {...MainPage}>
          <Route index element={AtomPage.element} />
          <Route {...MoleculePage} />
          <Route {...OrganismPage} />
          <Route path="*" element={<Navigate replace to={AtomPage.path} />} />
        </Route>
        <Route {...ComponentPage} />
        <Route path="*" element={<Navigate replace to={MainPage.path} />} />
      </Routes>
      <GlobalModal />
    </GlobalModalProvider>
  );
};

export default App;
