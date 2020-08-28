import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Nav } from '~paragon-react';

import Navigation from './navigation';

import '../scss/index.scss';


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="pgn-doc_container">
        <Navigation siteTitle={data.site.siteMetadata.title} />
        <div className="pgn-doc__main-content">
          {children}
        </div>
        <footer className="pgn-doc_footer border-top border-light d-flex align-items-center">
          <Nav className="flex-grow-1">
            <Nav.Item>
              <Nav.Link href="https://github.com/edx/paragon">Contribute on Github</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://github.com/edx/.github/blob/master/CODE_OF_CONDUCT.md">Code of Conduct</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://open.edx.org/">Open edX</Nav.Link>
            </Nav.Item>
          </Nav>
          <p className="m-0 text-muted">
            <a href="https://www.netlify.com">
              <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
            </a>
          </p>
        </footer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
