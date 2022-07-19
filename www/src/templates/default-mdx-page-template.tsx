import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
// @ts-ignore
import { Container } from '~paragon-react'; // eslint-disable-line

import CodeBlock from '../components/CodeBlock';
import Layout from '../components/PageLayout';
import SEO from '../components/SEO';

const shortcodes = {
  pre: (
    props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>,
  ) => <div {...props} />,
  code: CodeBlock,
  Link,
};

export interface PageTemplateTypeInterface {
  children: React.ReactNode,
  pageContext: {
    frontmatter: {
      title: string,
    },
  },
}

export default function PageTemplate({ children, pageContext }: PageTemplateTypeInterface) {
  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title={pageContext?.frontmatter?.title} />
      <Container size="md" className="py-5">
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </Container>
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
