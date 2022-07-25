import React from 'react';
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

const {
  lastModified: analysisLastUpdated,
  projectUsages: dependentProjectsUsages,
} = dependentProjectsAnalysis;

const dependentProjects = dependentProjectsUsages.map(dependentUsage => ({
  ...dependentUsage,
  repositoryUrl: getGithubProjectUrl(dependentUsage.repository),
  // eslint-disable-next-line no-return-assign
  count: Object.values(dependentUsage.usages).reduce((accumulator, usage) => accumulator += usage.length, 0),
}));

const componentsUsage = dependentProjectsUsages.reduce((accumulator, project) => {
  Object.keys(project.usages).forEach(componentName => {
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

const summaryComponentsUsage = Object.entries(componentsUsage).map(([componentName, usages]) => {
  const componentUsageCounts = usages
  // eslint-disable-next-line max-len
    .reduce((accumulator: any, project: { componentUsageCount: number; }) => accumulator += project.componentUsageCount, 0);
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
  // eslint-disable-next-line no-return-assign
    .reduce((accumulator, project) => accumulator += project.count, 0) / dependentProjects.length;

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
      <div className="mb-5">
        <h3>Overview</h3>
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
          itemCount={componentUsageInProjects.length}
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

export default function InsightsPage() {
  const tabs = ['/insights', '/insights/?tab=projects', '/insights/?tab=components'];

  const handleOnSelect = (value: any) => {
    switch (value) {
      case tabs[0]:
        global.analytics.track('Usage Insights', { tab: 'Summary' });
        break;
      case tabs[1]:
        global.analytics.track('Usage Insights', { tab: 'Projects' });
        break;
      case tabs[2]:
        global.analytics.track('Usage Insights', { tab: 'Components' });
        break;
      default:
        break;
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
          defaultKey={tabs[0]}
          id="uncontrolled-tab-example"
          onSelect={handleOnSelect}
        >
          <Tab eventKey={tabs[0]} title="Summary">
            <SummaryUsage />
          </Tab>
          <Tab eventKey={tabs[1]} title="Projects">
            <ProjectsUsage />
          </Tab>
          <Tab eventKey={tabs[2]} title="Components">
            <ComponentsUsage />
          </Tab>
        </Tabs>
      </Container>
    </Layout>
  );
}
