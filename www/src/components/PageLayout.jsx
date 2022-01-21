/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Container, Nav } from '~paragon-react'; // eslint-disable-line
import Header from './Header';
import Menu from './Menu';

const Layout = ({ children, showMinimizedTitle, hideFooterComponentMenu }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="d-flex flex-column">
      <Header
        siteTitle={data.site.siteMetadata?.title || 'Title'}
        showMinimizedTitle={showMinimizedTitle}
      />
      <main className="flex-grow-1">{children}</main>
      {!hideFooterComponentMenu && (
        <Container className="py-3 mt-5 bg-light-200 border-top border-light-300">
          <Menu />
        </Container>
      )}
      <Container as="footer" className="py-3 border-top border-light-300">
        <Nav className="d-flex align-items-center">
          <Nav.Item>
            <Link className="nav-link muted-link" to="/status">
              Library status
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link muted-link" to="/insights">
              Usage insights
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="muted-link"
              href="https://github.com/edx/.github/blob/master/CODE_OF_CONDUCT.md"
            >
              Code of Conduct
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="muted-link" href="https://open.edx.org/">
              Open edX
            </Nav.Link>
          </Nav.Item>
          <div className="flex-grow-1" />
          <a href="https://www.netlify.com">
            <img
              src="https://www.netlify.com/img/global/badges/netlify-light.svg"
              alt="Deploys by Netlify"
            />
          </a>
        </Nav>
      </Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showMinimizedTitle: PropTypes.bool,
  hideFooterComponentMenu: PropTypes.bool,
};

Layout.defaultProps = {
  showMinimizedTitle: false,
  hideFooterComponentMenu: false,
};

export default Layout;
