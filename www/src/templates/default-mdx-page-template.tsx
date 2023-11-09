import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { Container } from '~paragon-react';
import CodeBlock from '../components/CodeBlock';
import Layout from '../components/PageLayout';
import SEO from '../components/SEO';
import LinkedHeading from '../components/LinkedHeading';
import { SettingsContext } from '../context/SettingsContext';

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
    githubEditPath: string,
    componentName: string,
    componentCategories: string[],
  },
}

export default function PageTemplate({ children, pageContext }: IPageTemplateType) {
  const { settings } = useContext(SettingsContext);
  const { githubEditPath, componentCategories, componentName } = pageContext;

  return (
    <Layout
      isAutoToc
      githubEditPath={githubEditPath}
      componentCategories={componentCategories}
      componentName={componentName}
    >
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title={pageContext?.frontmatter?.title} />
      <Container size={settings.containerWidth} className="py-5">
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
    githubEditPath: PropTypes.string,
    componentName: PropTypes.string,
    componentCategories: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
