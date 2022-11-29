import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import { Link } from 'gatsby';
import {
  useToggle,
  Nav,
  Row,
  Col,
  Container,
  Icon,
  IconButton,
} from '~paragon-react';
import { Settings } from '~paragon-icons';
import { SettingsContext } from '../context/SettingsContext';

// @ts-ignore
import Logo from '../images/diamond.svg';

export interface INavbar {
  siteTitle: string,
  onSettingsClick: Function | undefined,
  showMinimizedTitle?: boolean,
}

function Navbar({
  siteTitle,
  showMinimizedTitle,
  onSettingsClick,
}: INavbar) {
  return (
    <Container as="header" className="py-3 bg-dark text-white sticky-top">
      <Row className="align-items-center text-center text-sm-left">
        <Col className="pgn-doc__header-button--menu mb-2 mb-sm-0 col-4" sm={5} />
        <Col className="mb-2 mb-sm-0 col-4" sm={showMinimizedTitle ? 2 : 3}>
          <Link
            to="/"
            style={{ textDecoration: 'none' }}
            className="d-block"
          >
            <div className="pgn-doc__header-title">
              <span
                className="pgn-doc__header-title-logo"
                role="img"
                aria-label={siteTitle}
              >
                <img src={Logo} alt={siteTitle} />
              </span>
              {!showMinimizedTitle && (
              <div className="ml-3 mr-3">
                <h1 className="pgn-doc__header-title-heading h4">{siteTitle}</h1>
                <p className="pgn-doc__header-title-description x-small">
                  Technical Documentation
                </p>
              </div>
              )}
            </div>
          </Link>
        </Col>
        <Col className="small" sm={12} xl={showMinimizedTitle ? 5 : 4}>
          <Nav className="justify-content-center justify-content-xl-end align-items-center">
            <Nav.Item>
              <IconButton
                src={Settings}
                iconAs={Icon}
                alt="Site settings"
                onClick={onSettingsClick}
                variant="light"
                size="sm"
              />
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

Navbar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  onSettingsClick: PropTypes.func.isRequired,
  showMinimizedTitle: PropTypes.bool,
};

Navbar.defaultProps = {
  showMinimizedTitle: false,
};

export interface IHeaderProps {
  siteTitle: string,
  showMinimizedTitle?: boolean,
}

function Header({ siteTitle, showMinimizedTitle }: IHeaderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, , close, toggle] = useToggle(false, {
    handleToggleOn: () => {
      document.body.style.overflow = 'hidden';
    },
    handleToggleOff: () => {
      document.body.style.overflow = 'initial';
    },
  });

  const { openSettings } = useContext(SettingsContext);

  useEffect(() => () => {
    document.body.style.overflow = 'initial';
  }, []);

  return (
    <FocusOn
      enabled={isOpen}
      onClickOutside={close}
      onEscapeKey={close}
      className="pgn-doc__header sticky-top"
    >
      <div
        className="bg-white"
        style={{ maxHeight: '100vh', overflow: 'auto' }}
      >
        <Navbar
          siteTitle={siteTitle}
          showMinimizedTitle={showMinimizedTitle}
          onSettingsClick={openSettings}
        />
      </div>
    </FocusOn>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  showMinimizedTitle: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: '',
  showMinimizedTitle: false,
};

export default Header;
