import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Container } from '~paragon-react';

import CodeBlock from '../components/CodeBlock';
import PropsTable from '../components/PropsTable';
import '../scss/index.scss';
import Layout from '../components/PageLayout';
import SEO from '../components/seo';

export default function PageTemplate({ data: { mdx, components: componentNodes } }) {

  const components = componentNodes.nodes.reduce((acc, currentValue) => {
    acc[currentValue.displayName] = currentValue;
    return acc;
  }, {});

  const shortcodes = React.useMemo(() => {
    const PropsTableFor = ({ name }) => {
      if (components[name]) {
        return <PropsTable {...components[name]} />
      }
      return null;
    }
    // Provide common components here
    return {
      pre: props => <div {...props} />,
      code: CodeBlock,
      Link,
      PropsTableFor,
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
        {Object.values(components).map(node => <PropsTable key={node.displayName} {...node} />)}
      </Container>
    </Layout>
  )
}


export const pageQuery = graphql`
query BlogPostQuery($id: String, $components: [String]) {
  mdx(id: {eq: $id}) {
    id
    body
    frontmatter {
      title
    }
  }
  components: allComponentMetadata(filter: {displayName: {in: $components}}) {
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
`