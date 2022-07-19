import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// @ts-ignore
import { Table, Container } from '~paragon-react'; // eslint-disable-line
import { ComponentStatus } from '../components/doc-elements';
import SEO from '../components/SEO';
import Layout from '../components/PageLayout';

export interface ComponentTypeInterface {
  frontmatter?: string,
  title?: string,
}

export default function StatusPage() {
  return (
    <Layout>
      <Container size="md" className="py-5">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <SEO title="Status" />
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
            const components = allMdx.nodes.map(({ frontmatter }: ComponentTypeInterface) => frontmatter)
              .filter(({ title }: ComponentTypeInterface) => title !== 'My Component');

            interface TableTypeInterface {
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
                }: TableTypeInterface) => ({
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
