import React from 'react';
import { graphql, type PageProps } from 'gatsby';
import PageTemplate, { type StandardContext } from '../../templates/default-mdx-page-template';

// Import the MDX file as a React component, which we'll then render with data to form this page
import LayoutMdx from '../../page-fragments/layout-content.mdx';

/** Data from the GraphQL query below */
interface PageData {
  utilities: Record<string, any>;
}

export default function LayoutPage({ data, pageContext }: PageProps<PageData, StandardContext>) {
  return (
    <PageTemplate pageContext={pageContext}>
      <LayoutMdx data={data} />
    </PageTemplate>
  );
}

// This page is split into two parts, because graphQL pageQueries like this can
// only be used in .tsx files, not .mdx files.
export const pageQuery = graphql`
{
  flexUtilities: allCssUtilityClasses(filter: {declarations: {regex: "/flex/"}, isUtility: {eq: true}}) {
    nodes {
      selector
      declarations
    }
  }
  displayUtilities: allCssUtilityClasses(filter: {declarations: {regex: "/display/"}, isUtility: {eq: true}}) {
    nodes {
      selector
      declarations
    }
  }
  positionUtilities: allCssUtilityClasses(filter: {selector: {regex: "/(^fixed-)|(position)/"}}) {
    nodes {
      selector
      declarations
    }
  }
  maxWidthUtilities: allCssUtilityClasses(filter: {selector: {regex: "/(^mw-)/"}}) {
    nodes {
      selector
      declarations
    }
  }
  miscUtilities: allCssUtilityClasses(filter: {declarations: {regex: "/(float)|(overflow)/"}, isUtility: {eq: true}}) {
    nodes {
      selector
      declarations
    }
  }
}
`;
