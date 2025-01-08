import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/PageLayout';

// Import the MDX file as a React component, which we'll then render with data to form this page
import CSSUtilitiesMdx from './css-utilities.mdx';

export default function CSSUtilitiesPage({ data, pageContext }) {
  return (
    <Layout isAutoToc githubEditPath={pageContext.githubEditPath}>
      <CSSUtilitiesMdx data={data} />
    </Layout>
  );
}

// This page is split into two parts, because graphQL pageQueries like this can
// only be used in .tsx files, not .mdx files.
export const pageQuery = graphql`
  {
    utilities: allCssUtilityClasses(
      filter: { isUtility: { eq: true } }
      sort: { selector: ASC }
    ) {
      nodes {
        selector
        declarations
      }
    }
  }
`;
