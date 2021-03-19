import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { Container } from "~paragon-react"

import CodeBlock from "../components/CodeBlock"
import "../scss/index.scss"
import Layout from "../components/PageLayout"
import SEO from "../components/seo"

const shortcodes = {
  pre: props => <div {...props} />,
  code: CodeBlock,
  Link,
}

export default function PageTemplate({ children, pageContext, ...props }) {
  return (
    <Layout>
      <SEO title={pageContext?.frontmatter?.title} />
      <Container size="md" className="py-5">
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </Container>
    </Layout>
  )
}
