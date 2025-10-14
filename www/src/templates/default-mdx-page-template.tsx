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

interface HProps {
  // We know that our heading elements (<h1>, <h2>, etc.) will always have content (children) and IDs:
  id: string;
  children: React.ReactNode;
}

const shortcodes = {
  h1: (props: JSX.IntrinsicElements['h1'] & HProps) => <LinkedHeading h="1" {...props} />,
  h2: (props: JSX.IntrinsicElements['h2'] & HProps) => <LinkedHeading h="2" {...props} />,
  h3: (props: JSX.IntrinsicElements['h3'] & HProps) => <LinkedHeading h="3" {...props} />,
  h4: (props: JSX.IntrinsicElements['h4'] & HProps) => <LinkedHeading h="4" {...props} />,
  h5: (props: JSX.IntrinsicElements['h5'] & HProps) => <LinkedHeading h="5" {...props} />,
  h6: (props: JSX.IntrinsicElements['h6'] & HProps) => <LinkedHeading h="6" {...props} />,
  pre: (props: JSX.IntrinsicElements['pre']) => <div {...props as any} />,
  code: CodeBlock,
  Link,
};

/** context data added to props by createsPages()/onCreatePage() */
export interface StandardContext {
  frontmatter: { title: string; };
  githubEditPath: string;
}

export interface IPageTemplateType {
  children: React.ReactNode;
  pageContext: StandardContext;
}

export default function PageTemplate({ children, pageContext }: IPageTemplateType) {
  const { settings } = useContext(SettingsContext);

  return (
    <Layout isAutoToc githubEditPath={pageContext.githubEditPath}>
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
  }).isRequired,
};
