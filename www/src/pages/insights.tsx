import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import {
  DataTable,
  Tabs,
  Tab,
  Container,
  // @ts-ignore
} from '~paragon-react'; // eslint-disable-line
import SEO from '../components/SEO';
import Layout from '../components/PageLayout';
import SummaryUsageExamples from '../components/insights/SummaryUsageExamples';
import ProjectUsageExamples from '../components/insights/ProjectUsageExamples';
import ComponentUsageExamples from '../components/insights/ComponentUsageExamples';
import getGithubProjectUrl from '../utils/getGithubProjectUrl';
import dependentProjectsAnalysis from '../../../dependent-usage.json';
import { INSIGHTS_TABS, INSIGHTS_PAGES } from '../config';

const {
  lastModified: analysisLastUpdated,
  projectUsages: dependentProjectsUsages,
} = dependentProjectsAnalysis;

interface IDependentUsage {
  version?: string,
  name?: string,
  repository?: { type: string, url: string } | string,
  folderName?: string,
  usages: { [key: string]: any } | ArrayLike<any>,
}

const dependentProjects = dependentProjectsUsages.map((dependentUsage: IDependentUsage) => ({
  ...dependentUsage,
  repositoryUrl: getGithubProjectUrl(dependentUsage.repository),
  count: Object.values(dependentUsage.usages).reduce((accumulator, usage) => accumulator + usage.length, 0),
}));

const componentsUsage = dependentProjectsUsages.reduce((accumulator: any, project: any) => {
  Object.keys(project.usages).forEach((componentName: string) => {
    if (!accumulator[componentName]) {
      accumulator[componentName] = [];
    }
    accumulator[componentName] = accumulator[componentName].concat({
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

const summaryComponentsUsage = Object.entries(componentsUsage).map(([componentName, usages]: [string, any]) => {
  const componentUsageCounts = usages
    .reduce((accumulator: number, project: any) => accumulator + project.componentUsageCount, 0);
  return {
    name: componentName,
    count: componentUsageCounts,
    usages: componentsUsage[componentName],
  };
});

const SummaryUsage = () => {
  const summaryTableData = summaryComponentsUsage.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    // eslint-disable-next-line no-nested-ternary
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  });
  const round = (n: number) => Math.round(n * 10) / 10;
  const averageComponentsUsedPerProject = dependentProjects
    .reduce((accumulator, project) => accumulator + project.count, 0) / dependentProjects.length;

    type RowType = {
      row: {
        original: {
          name: string,
          repositoryUrl: string,
          usages: [],
        }
      }
    };

    return (
      <div className="pt-5 mb-5">
        <div className="mb-5">
          <h2>Overview</h2>
          <p>
            Paragon is used by at least <strong>{dependentProjects.length} projects</strong>, with an average
            of <strong>{round(averageComponentsUsedPerProject)} component instances</strong> per project.
          </p>
        </div>
        <h3>Overall component usage</h3>
        <DataTable
          isExpandable
          isSortable
          itemCount={summaryTableData.length}
          data={summaryTableData}
          renderRowSubComponent={({ row }: RowType) => <SummaryUsageExamples row={row} />}
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
            { Header: 'Instance Count', accessor: 'count' },
          ]}
        >
          <DataTable.TableControlBar />
          <DataTable.Table />
          <DataTable.EmptyTable content="No summary available" />
          <DataTable.TableFooter />
        </DataTable>
      </div>
    );
};

// Paragon version in all projects
const ProjectsUsage = () => {
    type RowType = {
      row: {
        original: {
          name: string,
          repositoryUrl: string,
          usages: Array<{
            filePath: string,
            line: number,
          }>
        }
      }
    };

    return (
      <div className="pt-5 mb-5">
        <h3 className="mb-4">Projects in Open edX consuming Paragon</h3>
        <DataTable
          isExpandable
          isSortable
          itemCount={dependentProjects.length}
          data={dependentProjects}
          renderRowSubComponent={({ row }: RowType) => <ProjectUsageExamples row={row} />}
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
            { Header: 'Instance Count', accessor: 'count' },
          ]}
        >
          <DataTable.TableControlBar />
          <DataTable.Table />
          <DataTable.EmptyTable content="No projects" />
          <DataTable.TableFooter />
        </DataTable>
      </div>
    );
};

export interface IComponentUsage {
  name: string,
  componentUsageInProjects: Function,
}

// Usage info about a single component
const ComponentUsage = ({ name, componentUsageInProjects }: IComponentUsage) => {
    type RowType = {
      row: {
        original: {
          name: string,
          repositoryUrl: string,
          usages: Array<{
            filePath: string,
            line: number,
          }>
        }
      }
    };

    return (
      <div className="mb-5">
        <h3 className="mb-4">{name}</h3>
        <DataTable
          isExpandable
          isSortable
                itemCount={componentUsageInProjects.length} // eslint-disable-line
          data={componentUsageInProjects}
          renderRowSubComponent={({ row }: RowType) => <ComponentUsageExamples row={row} />}
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
};

// Usage info for all components
const ComponentsUsage = () => (
  <div className="pt-5 mb-5">
    {Object.keys(componentsUsage).sort().map(name => (
      <ComponentUsage
        key={name}
        name={name}
        componentUsageInProjects={componentsUsage[name]}
      />
    ))}
  </div>
);

export type InsightsPageTypes = {
  pageContext: {
    tab: string,
  }
};

export default function InsightsPage({ pageContext: { tab } }: InsightsPageTypes) {
  const handleOnSelect = (value: string) => {
    if (value !== tab) {
      global.analytics.track('Usage Insights', { tab: value });
      // @ts-ignore
      navigate(INSIGHTS_PAGES.find((item: { tab: string; }) => item.tab === value).path);
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
            <SummaryUsage />
          </Tab>
          <Tab eventKey={INSIGHTS_TABS.PROJECTS} title="Projects">
            <ProjectsUsage />
          </Tab>
          <Tab eventKey={INSIGHTS_TABS.COMPONENTS} title="Components">
            <ComponentsUsage />
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
