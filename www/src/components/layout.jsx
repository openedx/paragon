import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col, Collapsible, Icon } from '~paragon-react';
import { Menu, Close } from '~paragon-icons';

import Navigation from './navigation';

import '../scss/index.scss';

const ResponsiveNavigation = () => {
  const [collapseIsOpen, setCollapseOpen] = React.useState(false);

  return (
    <>
      <Collapsible.Advanced
        open={collapseIsOpen}
        onToggle={isOpen => setCollapseOpen(isOpen)}
        className="d-lg-none"
      >
        <Collapsible.Trigger tag="button" className="d-inline-flex btn btn-primary align-items-center" style={{ position: 'sticky', top: '1rem', margin: '1rem 0 0', zIndex: 2000 }}>
          <Collapsible.Visible whenClosed><Icon className="mr-2" src={Menu} /> Menu</Collapsible.Visible>
          <Collapsible.Visible whenOpen><Icon className="mr-2" src={Close} /> Close Menu</Collapsible.Visible>
        </Collapsible.Trigger>

        <Collapsible.Body onClick={(e) => {
          if (e.target.tagName == 'A') {
            setCollapseOpen(false)
          }
        }}>
          <Navigation siteTitle="TODO CHANGE THIS" />
        </Collapsible.Body>
      </Collapsible.Advanced>

      <div className="d-none d-lg-block" style={{ position:'sticky', top: '0', maxHeight: '100vh', overflow: 'auto' }}>
        <Navigation siteTitle="TODO CHANGE THIS" />
      </div>
    </>
  );
}

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
      <Container size="xl">
        <Row>
          <Col lg="3">
            <ResponsiveNavigation />
          </Col>
          <Col className="py-5">
            {children}
          </Col>
        </Row>
      </Container>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
