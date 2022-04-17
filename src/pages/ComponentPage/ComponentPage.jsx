import React from 'react';
import { useParams } from 'react-router';

import { ELEMENTS_CONFIG } from 'config';
import { ComponentPageHeader, Component, Footer } from 'components/Layout';
import { Page, PageContent, Container } from 'components/Layout/styles';
import route from './route';

const ComponentPage = () => {
  const { componentPath } = useParams(route.path);
  const data = Object.values(ELEMENTS_CONFIG).find(
    ({ path }) => path === componentPath
  );
  return (
    <Page>
      <ComponentPageHeader />
      <PageContent>
        <Container>
          <Component {...data} />
        </Container>
      </PageContent>
      <Footer />
    </Page>
  );
};

export default { element: <ComponentPage />, ...route };
