import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Tabs,
  Tab,
  Container,
} from '~paragon-react';
import SEO from '../components/SEO';
import Layout from '../components/PageLayout';
import InsightsContext from '../context/InsightsContext';
import SummaryUsage from '../components/insights/SummaryUsage';
import ProjectsUsage from '../components/insights/ProjectsUsage';
import HooksUsage from '../components/insights/HooksUsage';
import UtilsUsage from '../components/insights/UtilsUsage';
import IconsUsage from '../components/insights/IconsUsage';
import ComponentsUsage from '../components/insights/ComponentsUsage';

// @ts-ignore
import dependentProjectsAnalysis from '../../../dependent-usage.json'; // eslint-disable-line
import { INSIGHTS_TABS, INSIGHTS_PAGES } from '../config';
import componentsUsage from '../utils/componentsUsage';
import { IInsightsContext } from '../types/types';

const {
  lastModified: analysisLastUpdated,
} = dependentProjectsAnalysis;

interface TabsDataType {
  components: string[],
  hooks: string[],
  utils: string[],
  icons: string[],
}

export default function InsightsPage({ pageContext: { tab } }: { pageContext: { tab: string } }) {
  const { paragonTypes = {}, isParagonIcon = () => false } = useContext(InsightsContext) as IInsightsContext;
  const {
    components, hooks, utils, icons,
  } = Object.keys(componentsUsage).reduce<TabsDataType>((acc, usage) => {
    if (paragonTypes[usage] === 'Component') {
      acc.components.push(usage);
    } else if (paragonTypes[usage] === 'Hook') {
      acc.hooks.push(usage);
    } else if (['Text', 'Function', 'Object'].includes(paragonTypes[usage])) {
      acc.utils.push(usage);
    } else if (isParagonIcon(usage)) {
      acc.icons.push(usage);
    }
    return acc;
  }, {
    components: [], hooks: [], utils: [], icons: [],
  });

  const handleOnSelect = (value: string) => {
    if (value !== tab) {
      global.analytics.track(`openedx.paragon.docs.insights.tabs.${value.toLowerCase().trim()}.clicked`);
      navigate(INSIGHTS_PAGES.find(item => item.tab === value).path);
    }
  };
  return (
    <Layout>
      <Container size="md" className="py-5">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <SEO title="Usage Insights" />
        <header className="mb-5">
          <h1>Usage Insights</h1>
          <p>Last updated: {new Date(analysisLastUpdated).toLocaleDateString()}</p>
        </header>
        <Tabs
          activeKey={tab}
          id="uncontrolled-tab-example"
          onSelect={handleOnSelect}
        >
          <Tab eventKey={INSIGHTS_TABS.SUMMARY} title="Summary">
            {tab === INSIGHTS_TABS.SUMMARY && (
              <SummaryUsage />
            )}
          </Tab>
          <Tab eventKey={INSIGHTS_TABS.PROJECTS} title="Projects">
            {tab === INSIGHTS_TABS.PROJECTS && (
              <ProjectsUsage />
            )}
          </Tab>
          <Tab eventKey={INSIGHTS_TABS.COMPONENTS} title="Components">
            {tab === INSIGHTS_TABS.COMPONENTS && (
              <ComponentsUsage data={components} />
            )}
          </Tab>
          <Tab eventKey={INSIGHTS_TABS.HOOKS} title="Hooks">
            {tab === INSIGHTS_TABS.HOOKS && (
              <HooksUsage data={hooks} />
            )}
          </Tab>
          <Tab eventKey={INSIGHTS_TABS.UTILS} title="Utils">
            {tab === INSIGHTS_TABS.UTILS && (
              <UtilsUsage data={utils} />
            )}
          </Tab>
          <Tab eventKey={INSIGHTS_TABS.ICONS} title="Icons">
            {tab === INSIGHTS_TABS.ICONS && (
              <IconsUsage data={icons} />
            )}
          </Tab>
        </Tabs>
      </Container>
    </Layout>
  );
}

InsightsPage.propTypes = {
  pageContext: PropTypes.shape({
    tab: PropTypes.oneOf(Object.values(INSIGHTS_TABS)),
  }).isRequired,
};
