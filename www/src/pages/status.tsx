import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Table, Container } from '~paragon-react';
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
              <Table
                className="pgn-doc__status-table"
                data={components.map(({
                  title, status, designStatus, devStatus, notes,
                }: ITable) => ({
                  name: (
                    <div>
                      <h6>{title} <ComponentStatus status={status} /></h6>
                      <pre>{notes}</pre>
                    </div>
                  ),
                  designStatus: <ComponentStatus status={designStatus} />,
                  devStatus: <ComponentStatus status={devStatus} />,
                }))}
                columns={[
                  {
                    label: 'Component',
                    key: 'name',
                    width: 'col-2',
                  },
                  {
                    label: 'Design',
                    key: 'designStatus',
                    width: 'col-3',
                  },
                  {
                    label: 'Development',
                    key: 'devStatus',
                    width: 'col-3',
                  },
                ]}
              />
            );
          }}
        />
      </Container>
    </Layout>
  );
}
