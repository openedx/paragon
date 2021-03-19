import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container } from '~paragon-react'; // eslint-disable-line
import CodeBlock from '../components/CodeBlock';
import GenericPropsTable from '../components/PropsTable';
import '../scss/index.scss';
import Layout from '../components/PageLayout';
import SEO from '../components/SEO';

export default function PageTemplate({
  data: { mdx, components: componentNodes },
}) {
  const components = componentNodes.nodes.reduce((acc, currentValue) => {
    acc[currentValue.displayName] = currentValue;
    return acc;
  }, {});

  const shortcodes = React.useMemo(() => {
    const PropsTable = ({ displayName, ...props }) => { // eslint-disable-line react/prop-types
      if (components[displayName]) {
        return <GenericPropsTable {...components[displayName]} {...props} />;
      }
      return null;
    };
    // Provide common components here
    return {
      pre: props => <div {...props} />,
      code: CodeBlock,
      Link,
      PropsTable,
    };
  }, [components]);

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Container size="md" className="py-5">
        <h1 className="mb-4">{mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        {Object.values(components).map(node => (
          <GenericPropsTable key={node.displayName} {...node} />
        ))}
      </Container>
    </Layout>
  );
}

PageTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
      body: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    }),
    components: PropTypes.objectOf(PropTypes.object), // eslint-disable-line react/forbid-prop-types
  }).isRequired,
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String, $components: [String]) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
    components: allComponentMetadata(
      filter: { displayName: { in: $components } }
    ) {
      nodes {
        ...ComponentDocGenData
      }
    }
  }

  fragment ComponentDocGenData on ComponentMetadata {
    displayName
    props {
      defaultValue {
        value
      }
      name
      type {
        name
        raw
        value
      }
      required
      docblock
      doclets
      description {
        id
        text
        childMdx {
          body
        }
      }
    }
  }
`;
