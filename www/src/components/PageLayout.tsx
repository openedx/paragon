/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import {
  Container,
  Nav,
  Row,
  Col,
  Sticky,
  useMediaQuery,
  breakpoints,
  Stack,
} from '~paragon-react';
import ComponentsList from './ComponentsList';
import Header from './header';
import Menu from './Menu';
import Settings from './Settings';
import Toc from './Toc';
import { SettingsContext } from '../context/SettingsContext';
import LeaveFeedback from './LeaveFeedback';
import AutoToc from './AutoToc';
import PageEditBtn from './PageEditBtn';

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable-next-line global-require */
  require('~paragon-style/scss/core/core.scss');
}

export interface ILayout {
  children: React.ReactNode,
  showMinimizedTitle: boolean,
  hideFooterComponentMenu: boolean,
  isMdx: boolean,
  tocData: Array<number>,
  tab?: string,
  isAutoToc?: boolean,
  githubEditPath?: string,
}

function Layout({
  children,
  showMinimizedTitle,
  hideFooterComponentMenu,
  isMdx,
  tocData,
  isAutoToc,
  tab,
  githubEditPath,
}: ILayout) {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.extraLarge.minWidth });
  const { settings } = useContext(SettingsContext);
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
        showMinimizedTitle={isMobile || showMinimizedTitle}
      />
      <Settings showMinimizedTitle={showMinimizedTitle} />
      {isMdx || !hideFooterComponentMenu ? (
        <Container fluid>
          <Row className="flex-xl-nowrap">
            <Col className="d-none d-xl-block p-0" xl={settings.containerWidth === 'xl' ? 'auto' : 2}>
              <Sticky offset={6} className="pgn-doc__toc p-0 pt-3">
                <Menu />
              </Sticky>
            </Col>
            <Col
              xl={settings.containerWidth === 'xl' ? 10 : 8}
              lg={9}
              md={12}
              as="main"
              className="flex-grow-1"
            >
              {children}
              <Container size="md">
                <hr />
                <Stack direction="horizontal" gap={2}>
                  <PageEditBtn className="mb-5" githubEditPath={githubEditPath} />
                  <LeaveFeedback className="mb-5" />
                </Stack>
              </Container>
            </Col>
            <Col
              xl={2}
              lg={3}
              as={isAutoToc ? AutoToc : Toc}
              data={tocData}
              tab={tab}
              className="d-none d-lg-block"
            />
          </Row>
        </Container>
      ) : (
        <main className="flex-grow-1">
          {children}
        </main>
      )}
      {!hideFooterComponentMenu && <ComponentsList />}
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
              href="https://github.com/openedx/.github/blob/master/CODE_OF_CONDUCT.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Conduct
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="muted-link"
              href="https://open.edx.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open edX
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <LeaveFeedback className="muted-link" isNavLink />
          </Nav.Item>
          <Nav.Item>
            <LeaveFeedback />
          </Nav.Item>
          <Nav.Item>
            <LeaveFeedback className="muted-link" isNavLink />
          </Nav.Item>
          {!hideFooterComponentMenu && (
          <Nav.Item>
            <PageEditBtn
              className="muted-link"
              githubEditPath={githubEditPath ?? ''}
              isNavLink
            />
          </Nav.Item>
          )}
          <div className="flex-grow-1" />
          <Nav.Link
            className="muted-link"
            href="https://www.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.netlify.com/img/global/badges/netlify-light.svg"
              alt="Deploys by Netlify"
            />
          </Nav.Link>
        </Nav>
      </Container>
    </div>
  );
}

const itemsShape = {
  url: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array,
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
  tab: PropTypes.string,
  githubEditPath: PropTypes.string,
};

Layout.defaultProps = {
  tocData: {},
  showMinimizedTitle: false,
  hideFooterComponentMenu: false,
  isMdx: false,
  tab: undefined,
  isAutoToc: false,
  githubEditPath: undefined,
};

export default Layout;
