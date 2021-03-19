/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Nav } from '~paragon-react';
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="d-flex flex-column">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="flex-grow-1">{children}</main>
      <Container as="footer" className="py-3 mt-5 border-top border-light-300">
        <Nav className="d-flex align-items-center">
          <Nav.Item>
            <Nav.Link className="muted-link" href="https://github.com/edx/.github/blob/master/CODE_OF_CONDUCT.md">Code of Conduct</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="muted-link" href="https://open.edx.org/">Open edX</Nav.Link>
          </Nav.Item>
          <div className="flex-grow-1" />

          <a href="https://www.netlify.com">
            <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
          </a>
        </Nav>
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
