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
      <div className="d-lg-flex d-block">

        <div className="flex-shrink-0">
          <ResponsiveNavigation />
        </div>

        <div className="py-5 px-lg-5 flex-grow-1">
          <Container size="lg" style={{ marginLeft: '0' }}>
          {children}
          </Container>
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
