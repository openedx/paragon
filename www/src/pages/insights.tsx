import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import {
  DataTable,
  Tabs,
  Tab,
  Container,
  TextFilter,
  CheckboxFilter,
  useMediaQuery,
  breakpoints,
} from '~paragon-react';
import SEO from '../components/SEO';
import Layout from '../components/PageLayout';
import SummaryUsageExamples, { ISummaryUsageExamples } from '../components/insights/SummaryUsageExamples';
import ProjectUsageExamples, { IProjectUsageExamples } from '../components/insights/ProjectUsageExamples';
import ComponentUsageExamples, { IComponentUsageExamples } from '../components/insights/ComponentUsageExamples';
import getGithubProjectUrl from '../utils/getGithubProjectUrl';
// @ts-ignore
import dependentProjectsAnalysis from '../../../dependent-usage.json'; // eslint-disable-line
import { INSIGHTS_TABS, INSIGHTS_PAGES } from '../config';
import InsightsContext from '../context/InsightsContext';

const ICON_TYPE = 'Icon';
const TABLE_PAGE_SIZE = 10;

const {
  lastModified: analysisLastUpdated,
  projectUsages: dependentProjectsUsages,
} = dependentProjectsAnalysis;

interface IUsage {
  filePath: string,
  line: number,
  column: number,
  version: string,
}

interface IDependentUsage {
  version?: string,
  name?: string,
  repository?: { type: string, url: string },
  repositoryUrl?: string,
  count: number,
  folderName?: string,
  usages: {
    [key: string]: IUsage[],
  },
}

interface IComponentUsageData {
  componentUsageCount: number,
  folderName: string,
  name: string,
  repositoryUrl: string,
  usages: IUsage[],
  version: string,
}

interface IInsightsContext {
  paragonTypes: {
    [key: string]: string
  },
  isParagonIcon: Function,
}

interface IFilterData {
  name: string,
  number: number | undefined,
  value: string
}

interface TabsDataType {
  components: string[],
  hooks: string[],
  utils: string[],
  icons: string[],
}

export interface IComponentUsage {
  name: string,
  componentUsageInProjects: IComponentUsageData[],
}

const dependentProjects: IDependentUsage[] = [];

const componentsUsage: Record<string, IComponentUsageData[]> = dependentProjectsUsages
  .reduce((accumulator: any, project: any) => {
    dependentProjects.push({
      ...project,
      repositoryUrl: getGithubProjectUrl(project.repository),
      count: Object.values<IUsage[]>(project.usages).reduce((acc, usage) => acc + usage.length, 0),
    });

    Object.keys(project.usages).forEach(componentName => {
      // The next line is necessary for the same naming of the components both in the file with the
      // repositories of use and in the data structures GraphQL.
      const newComponentName = componentName.replace(/\./g, '');
      if (!accumulator[newComponentName]) {
        accumulator[newComponentName] = [];
      }
      accumulator[newComponentName] = accumulator[newComponentName].concat({
        name: project.name,
        folderName: project.folderName,
        version: project.version,
        repositoryUrl: getGithubProjectUrl(project.repository),
        componentUsageCount: project.usages[componentName].length,
        usages: project.usages[componentName],
      });
    });
    return accumulator;
  }, {});

export const componentsInUsage = Object.keys(componentsUsage);

const round = (n: number) => Math.round(n * 10) / 10;

const getEmptyMessage = (text: string) => `Currently there are no ${text} usage yet`;

function SummaryUsage() {
  const { paragonTypes = {}, isParagonIcon = () => false } = useContext(InsightsContext) as IInsightsContext;
  const isMedium = useMediaQuery({ minWidth: breakpoints.large.minWidth });

  const typeCount = Object.keys(paragonTypes)
    .reduce((accumulator: { [key: string]: number | undefined }, componentName) => {
      const type = paragonTypes[componentName] || (isParagonIcon(componentName) && ICON_TYPE);
      if (componentsInUsage.includes(componentName)) {
        accumulator[type] = (accumulator[type] || 0) + 1;
      }
      return accumulator;
    }, {});

  const filterValues: IFilterData[] = Object.keys(paragonTypes)
    .map((key) => paragonTypes[key])
    .filter((v, i, a) => a.indexOf(v) === i)
    .map(type => ({ name: type, number: typeCount[type], value: type }));
  // Number of Icons is calculated in the statement below. Initialized as `undefined` to not display '0'.
  const iconsType: IFilterData = { name: ICON_TYPE, number: undefined, value: ICON_TYPE };

  const summaryComponentsUsage = Object.entries<IComponentUsageData[]>(componentsUsage).map(
    ([componentName, usages]) => {
      const componentUsageCounts = usages
        .reduce((accumulator, project) => accumulator + project.componentUsageCount, 0);
      let type = paragonTypes[componentName];
      if (!type && isParagonIcon(componentName)) {
        type = ICON_TYPE;
        iconsType.number = (iconsType.number || 0) + 1;
      }
      return {
        name: componentName,
        count: componentUsageCounts,
        usages: componentsUsage[componentName],
        type,
      };
    },
  );
  filterValues.push(iconsType);
  typeCount[ICON_TYPE] = iconsType.number;

  const summaryTableData = summaryComponentsUsage.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return nameA < nameB ? -1 : 1;
  });

  const averageComponentsUsedPerProject = dependentProjects
    .reduce((accumulator, project) => accumulator + project.count, 0) / dependentProjects.length;

  return (
    <div className="pt-5 mb-5">
      <div className="mb-5">
        <h2>Overview</h2>
        <p>
          Paragon is used by at least <strong>{dependentProjects.length} projects</strong>, with an average
          of <strong>{round(averageComponentsUsedPerProject)} imports</strong> per project.
        </p>
      </div>
      <h3>Overall usage</h3>
      <DataTable
        isPaginated
        isExpandable
        isSortable
        showFiltersInSidebar={isMedium}
        isFilterable
        defaultColumnValues={{ Filter: TextFilter }}
        itemCount={summaryTableData.length}
        data={summaryTableData}
        renderRowSubComponent={({ row }: ISummaryUsageExamples) => <SummaryUsageExamples row={row} />}
        initialState={{ pageSize: TABLE_PAGE_SIZE }}
        columns={[
          {
            id: 'expander',
            Header: DataTable.ExpandAll,
            Cell: DataTable.ExpandRow,
          },
          {
            Header: 'Component Name',
            accessor: 'name',
          },
          {
            Header: 'Instance Count',
            accessor: 'count',
            disableFilters: true,
          },
          {
            Header: 'Type',
            accessor: 'type',
            Filter: CheckboxFilter,
            filter: 'includesValue',
            filterChoices: filterValues,
          },
        ]}
      >
        <DataTable.TableControlBar />
        <DataTable.Table />
        <DataTable.EmptyTable content="No summary available" />
        <DataTable.TableFooter />
      </DataTable>
    </div>
  );
}

// Paragon version in all projects
function ProjectsUsage() {
  return (
    <div className="pt-5 mb-5">
      <h3 className="mb-4">Projects in Open edX consuming Paragon</h3>
      <DataTable
        isExpandable
        isSortable
        itemCount={dependentProjects.length}
        data={dependentProjects}
        renderRowSubComponent={({ row }: IProjectUsageExamples) => <ProjectUsageExamples row={row} />}
        columns={[
          {
            id: 'expander',
            Header: DataTable.ExpandAll,
            Cell: DataTable.ExpandRow,
          },
          {
            Header: 'Project Name',
            accessor: 'folderName',
          },
          { Header: 'Paragon Version', accessor: 'version' },
          { Header: 'Import Count', accessor: 'count' },
        ]}
      >
        <DataTable.TableControlBar />
        <DataTable.Table />
        <DataTable.EmptyTable content="No projects" />
        <DataTable.TableFooter />
      </DataTable>
    </div>
  );
}

// Usage info about a single component
function ComponentUsage({ name, componentUsageInProjects }: IComponentUsage) {
  return (
    <div className="mb-5">
      <h3 className="mb-4">{name}</h3>
      <DataTable
        isExpandable
        isSortable
        itemCount={componentUsageInProjects.length} // eslint-disable-line
        data={componentUsageInProjects}
        renderRowSubComponent={({ row }: IComponentUsageExamples) => (
          <ComponentUsageExamples row={row} componentName={name} />
        )}
        columns={[
          {
            id: 'expander',
            Header: DataTable.ExpandAll,
            Cell: DataTable.ExpandRow,
          },
          {
            Header: 'Project Name',
            accessor: 'folderName',
          },
          { Header: 'Paragon Version', accessor: 'version' },
          { Header: 'Instance Count', accessor: 'componentUsageCount' },
        ]}
      >
        <DataTable.Table />
        <DataTable.EmptyTable content="No usages" />
      </DataTable>
    </div>
  );
}

// Usage info for all components
export function ComponentsUsage({ data }: { data: string[] }) {
  return (
    <div className="pt-5 mb-5">
      {data.length ? data.sort().map(name => {
        if (componentsUsage[name]) {
          return (
            <ComponentUsage
              key={name}
              name={name}
              componentUsageInProjects={componentsUsage[name]}
            />
          );
        }
        return null;
      }) : getEmptyMessage('components')}
    </div>
  );
}

// Usage info for all hooks
function HooksUsage({ data }: { data: string[] }) {
  return (
    <div className="pt-5 mb-5">
      {data.length ? data.sort().map(name => (
        <ComponentUsage
          key={name}
          name={name}
          componentUsageInProjects={componentsUsage[name]}
        />
      )) : getEmptyMessage('hooks')}
    </div>
  );
}

// Usage info for all utils
function UtilsUsage({ data }: { data: string[] }) {
  return (
    <div className="pt-5 mb-5">
      {data.length ? data.sort().map(name => (
        <ComponentUsage
          key={name}
          name={name}
          componentUsageInProjects={componentsUsage[name]}
        />
      )) : getEmptyMessage('utils')}
    </div>
  );
}

// Usage info for all utils
function IconsUsage({ data }: { data: string[] }) {
  return (
    <div className="pt-5 mb-5">
      {data.length ? data.sort().map(name => (
        <ComponentUsage
          key={name}
          name={name}
          componentUsageInProjects={componentsUsage[name]}
        />
      )) : getEmptyMessage('utils')}
    </div>
  );
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

ComponentUsage.propTypes = {
  name: PropTypes.string.isRequired,
  componentUsageInProjects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    folderName: PropTypes.string,
    version: PropTypes.string,
    repositoryUrl: PropTypes.string,
    componentUsageCount: PropTypes.number,
    usages: PropTypes.arrayOf(PropTypes.shape({
      column: PropTypes.number,
      filePath: PropTypes.string,
      line: PropTypes.number,
      version: PropTypes.string,
    })),
  })).isRequired,
};

const usagePropTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ComponentsUsage.propTypes = usagePropTypes;
HooksUsage.propTypes = usagePropTypes;
UtilsUsage.propTypes = usagePropTypes;
IconsUsage.propTypes = usagePropTypes;
