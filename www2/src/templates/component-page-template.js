import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Container } from '~paragon-react';

import CodeBlock from '../components/CodeBlock';
import PropsTable from '../components/PropsTable';
import '../scss/index.scss';

// Provide common components here
const shortcodes = {
  pre: props => <div {...props} />,
  code: CodeBlock,
  Link,
};

export default function PageTemplate({ data: { mdx, components } }) {
  return (
    <Container size="lg">
      <Link to="/">Home</Link>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
      {components.nodes.map(node => <PropsTable {...node} />)}
    </Container>
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