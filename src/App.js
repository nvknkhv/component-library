import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import AtomPage from 'pages/AtomPage';
import ComponentPage from 'pages/ComponentPage';
import MainPage from 'pages/MainPage';
import MoleculePage from 'pages/MoleculePage';
import OrganismPage from 'pages/OrganismPage';

const App = () => {
  return (
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
  );
};

export default App;
