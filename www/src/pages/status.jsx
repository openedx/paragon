
import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { ComponentStatus } from '../components/doc-elements';
import { Table } from '~paragon-react';
import SEO from '../components/seo'

export default function() {
  return (
    <div>
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
          if (!allMdx || !allMdx.nodes) return null;
          const components = allMdx.nodes.map(({ frontmatter }) => frontmatter);
          
          return (
            <Table
              className="pgn-doc__status-table"
              data={components.map(({ title, status, designStatus, devStatus, notes }) => ({
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
    </div>
  );
}

