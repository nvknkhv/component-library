import React from 'react';

import { TabsNav } from 'components/General/Tabs';
import { MainPageHeader, Footer, Cards } from 'components/Layout';
import {
  Page,
  PageContent,
  Container,
  Divider,
} from 'components/Layout/styles';
import route from './route';
import { TabsNavWrapper } from './styles';

const MainPage = () => {
  return (
    <Page>
      <MainPageHeader />
      <PageContent>
        <TabsNavWrapper>
          <Container>
            <TabsNav />
          </Container>
        </TabsNavWrapper>
        <Divider />
        <Cards />
      </PageContent>
      <Footer isFull />
    </Page>
  );
};

export default { ...route, element: <MainPage /> };
