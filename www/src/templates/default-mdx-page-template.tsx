import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import CodeBlock from '../components/CodeBlock';
import Layout from '../components/PageLayout';
import SEO from '../components/SEO';
import LinkedHeading from '../components/LinkedHeading';
import ContentWrapper from '../components/ContentWrapper';

const shortcodes = {
  h1: (props: HTMLHeadingElement) => <LinkedHeading h="1" {...props} />,
  h2: (props: HTMLHeadingElement) => <LinkedHeading h="2" {...props} />,
  h3: (props: HTMLHeadingElement) => <LinkedHeading h="3" {...props} />,
  h4: (props: HTMLHeadingElement) => <LinkedHeading h="4" {...props} />,
  h5: (props: HTMLHeadingElement) => <LinkedHeading h="5" {...props} />,
  h6: (props: HTMLHeadingElement) => <LinkedHeading h="6" {...props} />,
  pre: (props:
  JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
  code: CodeBlock,
  Link,
};

export interface IPageTemplateType {
  children: React.ReactNode,
  pageContext: {
    frontmatter: {
      title: string,
    },
  },
}

export default function PageTemplate({ children, pageContext }: IPageTemplateType) {
  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title={pageContext?.frontmatter?.title} />
      <ContentWrapper addAnchors={false}>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </ContentWrapper>
    </Layout>
  );
}

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  // Require mdx files to define their page title using frontmatter
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
};
