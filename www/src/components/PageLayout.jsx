/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Container, Nav, Row, Col } from '~paragon-react'; // eslint-disable-line
import Header from './Header';
import Menu from './Menu';
import Settings from './Settings';
import Toc from './Toc';

const Layout = ({
  children,
  showMinimizedTitle,
  hideFooterComponentMenu,
  isMdx,
  tocData,
}) => {

  /** Initializes a no-op analytics client if one is not already specified. */
  useEffect(() => {
    if (!global.analytics) {
      global.analytics = {};
      global.analytics.track = () => {};
    }
  }, []);

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
      <Settings />
      {isMdx ? (
        <Container fluid>
          <Row className="flex-xl-nowrap">
            <Col className="d-none d-xl-block" xl={2} />
            <Col
              xl={8}
              lg={9}
              md={12}
              as="main"
              className="flex-grow-1"
            >
              {children}
            </Col>
            <Col
              xl={2}
              lg={3}
              as={Toc}
              data={tocData}
              className="d-none d-lg-block"
            />
          </Row>
        </Container>
      ) : (
        <main className="flex-grow-1">
          {children}
        </main>
      )}
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

const itemsShape = {
  url: PropTypes.string,
  title: PropTypes.string,
};
itemsShape.items = PropTypes.arrayOf(PropTypes.shape(itemsShape));

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  tocData: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape(itemsShape)),
  }),
  showMinimizedTitle: PropTypes.bool,
  hideFooterComponentMenu: PropTypes.bool,
  isMdx: PropTypes.bool,
};

Layout.defaultProps = {
  tocData: {},
  showMinimizedTitle: false,
  hideFooterComponentMenu: false,
  isMdx: false,
};

export default Layout;
