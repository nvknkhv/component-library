import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TabsWrapper, Tab } from 'components/General/Tabs';
import { Divider } from 'components/Layout/styles';
import ComponentMenu from './ComponentMenu';
import './component.scss';

const WrapperPadded = styled.div`
  padding: 0 2rem;
`;

const Component = ({ content, name, tabs }) => {
  const TABS_NAMES = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(TABS_NAMES[0]);
  useEffect(() => setActiveTab(TABS_NAMES[0]), [name]);
  return (
    <section className="component">
      <div className="component__menu">
        <ComponentMenu />
      </div>
      <div className="component__content">
        <h3 className="component__content-title">{name}</h3>
        <div className="component__body">{content}</div>
        <div className="component__code">
          <WrapperPadded>
            <TabsWrapper>
              {TABS_NAMES.map((tabName) => (
                <Tab
                  key={tabName}
                  onClick={() => setActiveTab(tabName)}
                  isActive={activeTab === tabName}
                >
                  {tabName}
                </Tab>
              ))}
            </TabsWrapper>
          </WrapperPadded>
          <Divider />
          <div className="component__code-content">
            <figure>
              <pre>
                <code>{tabs[activeTab]}</code>
              </pre>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

Component.propTypes = {
  content: PropTypes.element,
  name: PropTypes.string.isRequired,
  tabs: PropTypes.shape({
    html: PropTypes.string.isRequired,
    scss: PropTypes.string,
    js: PropTypes.string,
  }).isRequired,
};

export default Component;
