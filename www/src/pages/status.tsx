import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { DataTable, Container } from '~paragon-react'; // eslint-disable-line
import { ComponentStatus } from '../components/doc-elements';
import SEO from '../components/SEO';
import Layout from '../components/PageLayout';
import { SettingsContext } from '../context/SettingsContext';

export interface IComponents {
  frontmatter?: string,
  title?: string,
}

export default function StatusPage() {
  const { settings } = useContext(SettingsContext);

  return (
    <Layout isAutoToc>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title="Status" />
      <Container size={settings.containerWidth} className="py-5">
        <h1>Library Status</h1>

        <h3>Components Status</h3>
        <StaticQuery
          query={graphql`query ComponentStatusQuery {
            allMdx(filter: {frontmatter: {type: {eq: "component"}}}, sort: {fields: frontmatter___title}) {
              nodes {
                frontmatter {
                  designStatus
                  devStatus
                  status
                  notes
                  status
                  title
                  type
                }
              }
            }
          }`}
          render={({ allMdx }) => {
            if (!allMdx || !allMdx.nodes) { return null; }
            const components = allMdx.nodes.map(({ frontmatter }: IComponents) => frontmatter)
              .filter(({ title }: IComponents) => title !== 'My Component');

            interface ITable {
              title: string,
              status: string,
              designStatus: string,
              devStatus: string,
              notes: string,
            }

            return (
              <DataTable
                data={components.map(({
                  title, status, designStatus, devStatus, notes,
                }: ITable) => ({
                  name: (
                    <div className="status-indicator-wrapper">
                      <h5>{title} <ComponentStatus status={status} /></h5>
                      <pre>{notes}</pre>
                    </div>
                  ),
                  designStatus: <ComponentStatus status={designStatus} />,
                  devStatus: <ComponentStatus status={devStatus} />,
                }))}
                columns={[
                  {
                    Header: 'Component',
                    accessor: 'name',
                  },
                  {
                    Header: 'Design',
                    accessor: 'designStatus',
                  },
                  {
                    Header: 'Development',
                    accessor: 'devStatus',
                  },
                ]}
              >
                <DataTable.Table />
              </DataTable>
            );
          }}
        />
      </Container>
    </Layout>
  );
}
