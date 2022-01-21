import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import { Link } from 'gatsby';
import Menu from './Menu';
import {
  useToggle,
  Nav,
  Row,
  Col,
  Container,
  Button,
  Form,
} from '~paragon-react'; // eslint-disable-line
import { Menu as MenuIcon, Close } from '~paragon-icons'; // eslint-disable-line
import { THEMES } from '../../theme-config';
import ThemeContext from '../context/ThemeContext';

const Navbar = ({
  siteTitle,
  onMenuClick,
  menuIsOpen,
  showMinimizedTitle,
  selectedTheme,
  onThemeChange,
}) => (
  <Container as="header" className="py-3 bg-dark text-white sticky-top">
    <Row className="align-items-center">
      <Col sm={4}>
        <Button
          className="d-inline-flex align-items-center"
          variant="inverse-tertiary"
          onClick={onMenuClick}
          iconBefore={menuIsOpen ? Close : MenuIcon}
        >
          Menu
        </Button>
      </Col>
      <Col sm={4}>
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
          className="d-block text-center"
        >
          {showMinimizedTitle ? (
            <span
              style={{ fontSize: '36px', lineHeight: 1 }}
              role="img"
              aria-label="Paragon"
            >
              💎
            </span>
          ) : (
            <>
              <h1 className="h4 m-0 text-white">{siteTitle}</h1>
              <p
                className="text-uppercase text-white m-0 x-small"
                style={{ opacity: 0.6 }}
              >
                Technical Documentation
              </p>
            </>
          )}
        </Link>
      </Col>
      <Col className="small" sm={4}>
        <Nav className="justify-content-end align-items-center">
          <Form.Group
            as={Row}
            controlId="themeSelector"
            className="mr-5 mb-0 align-items-center flex-grow-1"
          >
            <Form.Control
              size="sm"
              as="select"
              value={selectedTheme}
              onChange={onThemeChange}
            >
              {THEMES.map(theme => (
                <option
                  key={theme.label}
                  value={theme.stylesheet}
                >
                  {theme.label}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <img
            className="d-inline-block mr-2"
            src="https://img.shields.io/npm/v/@edx/paragon.svg"
            alt="npm_version"
          />
          <Nav.Item>
            <Nav.Link
              className="text-white"
              href="https://github.com/edx/paragon/releases"
            >
              Changelog
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-white"
              href="https://github.com/edx/paragon"
            >
              GitHub
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  </Container>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  selectedTheme: PropTypes.string.isRequired,
  onThemeChange: PropTypes.func.isRequired,
  menuIsOpen: PropTypes.bool,
  showMinimizedTitle: PropTypes.bool,
};
Navbar.defaultProps = {
  menuIsOpen: false,
  showMinimizedTitle: false,
};

const Header = ({ siteTitle, showMinimizedTitle }) => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, open, close, toggle] = useToggle(false, {
    handleToggleOn: () => {
      document.body.style.overflow = 'hidden';
    },
    handleToggleOff: () => {
      document.body.style.overflow = 'initial';
    },
  });

  const { theme, onThemeChange } = useContext(ThemeContext);

  // returned function will be called on component unmount
  useEffect(() => () => {
    document.body.style.overflow = 'initial';
  },
  []);

  return (
    <FocusOn
      enabled={isOpen}
      onClickOutside={close}
      onEscapeKey={close}
    >
      <div
        className="bg-white sticky-top"
        style={{ maxHeight: '100vh', overflow: 'auto' }}
      >
        <Navbar
          siteTitle={siteTitle}
          onMenuClick={toggle}
          menuIsOpen={isOpen}
          showMinimizedTitle={showMinimizedTitle}
          selectedTheme={theme}
          onThemeChange={onThemeChange}
        />
        {isOpen && <Menu />}
      </div>
    </FocusOn>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  showMinimizedTitle: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: '',
  showMinimizedTitle: false,
};

export default Header;
