import React from 'react';
import {
  DataTable, Tabs, Tab, Container,
} from '~paragon-react'; // eslint-disable-line
import SEO from '../components/SEO';
import Layout from '../components/PageLayout';
import dependentProjectsUsages from '../../../dependent-usage.json';

const dependentProjects = dependentProjectsUsages.map(dependentUsage => ({
  ...dependentUsage,
  count: dependentUsage.usages.length,
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
      componentUsageCount: project.usages[componentName].length,
    });
  });
  return accumulator;
}, {});

// Paragon version in all projects
const ProjectsUsage = () => (
  <div className="pt-5 mb-5">
    <h3 className="mb-4">Projects in Open edX consuming Paragon</h3>
    <DataTable
      isSortable
      itemCount={dependentProjects.length}
      data={dependentProjects}
      columns={[
        { Header: 'Project Name', accessor: 'folderName' },
        { Header: 'Paragon Version', accessor: 'version' },
      ]}
    >
      <DataTable.TableControlBar />
      <DataTable.Table />
      <DataTable.EmptyTable content="No projects" />
      <DataTable.TableFooter />
    </DataTable>
  </div>
);

// Usage info about a single component
// eslint-disable-next-line
const ComponentUsage = ({ name, componentUsageInProjects }) => (
  <div className="mb-5">
    <h3 className="mb-4">{name}</h3>
    <DataTable
      isSortable
      itemCount={componentUsageInProjects.length} // eslint-disable-line
      data={componentUsageInProjects}
      columns={[
        { Header: 'Project Name', accessor: 'folderName' },
        { Header: 'Paragon Version', accessor: 'version' },
        { Header: 'Instance count', accessor: 'componentUsageCount' },
      ]}
    >
      <DataTable.Table />
      <DataTable.EmptyTable content="No usages" />
    </DataTable>
  </div>
);

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
  return (
    <Layout>
      <Container size="md" className="py-5">
        <SEO title="Usage Insights" />
        <header className="mb-5">
          <h1>Usage Insights</h1>
          <p>Last updated: 4-30-2021</p>
        </header>
        <Tabs defaultActiveKey="projects" id="uncontrolled-tab-example">
          <Tab eventKey="projects" title="Projects">
            <ProjectsUsage />
          </Tab>
          <Tab eventKey="components" title="Components">
            <ComponentsUsage />
          </Tab>
        </Tabs>
      </Container>
    </Layout>
  );
}
