import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "./menu"
import { Icon, useToggle, ModalLayer, Nav, Row, Col, Container, Button } from '~paragon-react';
import { Menu as MenuIcon, Close } from '~paragon-icons';

const Navbar = ({ siteTitle, onMenuClick, menuIsOpen }) => (
  <Container as="header" className="py-3 bg-primary text-white sticky-top">
    <Row className="align-items-center">
      <Col sm={4}>
        <Button
          className="d-inline-flex align-items-center"
          variant="inverse-tertiary"
          onClick={onMenuClick}
        >
          {menuIsOpen ? (
            <>
            <Icon className="mr-2" src={Close} />
            Menu
            </>
          ) : (
            <>
              <Icon className="mr-2" src={MenuIcon} />
              Menu
            </>
          )}
        </Button>
      </Col>
      <Col sm={4} className="text-center">
        <h1 className="h4 m-0">
          <Link
            to="/"
            style={{ color: `white`, textDecoration: `none` }}
          >
            {siteTitle}
          </Link>
        </h1>
        <p className="text-uppercase m-0 x-small" style={{ opacity: 0.6 }}>
          Technical Documentation
        </p>
      </Col>
      <Col className="small" sm={4}>
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link className="text-white" href="https://github.com/edx/paragon">Github</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  </Container>
);
const Header = ({ siteTitle }) => {
  const [isOpen, open, close, toggle, ] = useToggle(false, {
    handleToggleOn: () => {
      document.body.style.overflow = 'hidden';
    },
    handleToggleOff: () => {
      document.body.style.overflow = 'initial';
    }
  });

  return (
    <div className="bg-white sticky-top" style={{ maxHeight: '100vh', overflow: 'scroll' }}>
      <Navbar siteTitle={siteTitle} onMenuClick={toggle} menuIsOpen={isOpen} />
      {isOpen && <Menu />}
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
