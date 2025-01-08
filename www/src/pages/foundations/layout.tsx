import React from 'react';
import { graphql, type PageProps } from 'gatsby';
import Layout from '../../components/PageLayout';

// Import the MDX file as a React component, which we'll then render with data to form this page
import LayoutMdx from './layout.mdx';

/** Data from the GraphQL query below */
interface PageData {
  utilities: Record<string, any>;
}

/** context data added to props by createsPages()/onCreatePage() */
interface StandardContext {
  githubEditPath: string;
}

export default function LayoutPage({ data, pageContext }: PageProps<PageData, StandardContext>) {
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
