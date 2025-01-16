import React from 'react';
import { graphql, type PageProps } from 'gatsby';
import PageTemplate, { type StandardContext } from '../../templates/default-mdx-page-template';

// Import the MDX file as a React component, which we'll then render with data to form this page
import CSSUtilitiesMdx from '../../page-fragments/css-utilities-content.mdx';

/** Data from the GraphQL query below */
interface PageData {
  utilities: Record<string, any>;
}

export default function CSSUtilitiesPage({ data, pageContext }: PageProps<PageData, StandardContext>) {
  return (
    <PageTemplate pageContext={pageContext}>
      <CSSUtilitiesMdx data={data} />
    </PageTemplate>
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
