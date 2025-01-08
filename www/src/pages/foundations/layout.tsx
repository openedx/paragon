import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/PageLayout';

// Import the MDX file as a React component, which we'll then render with data to form this page
import LayoutMdx from './layout.mdx';

export default function LayoutPage({ data, pageContext }) {
  return (
    <Layout isAutoToc githubEditPath={pageContext.githubEditPath}>
      <LayoutMdx data={data} />
    </Layout>
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
