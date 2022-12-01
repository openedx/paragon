import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  useToggle,
  Nav,
  Row,
  Col,
  Container,
  Icon,
  IconButton,
  Button,
  ModalPopup,
} from '~paragon-react';
import { Menu as MenuIcon, Close, Settings } from '~paragon-icons'; // eslint-disable-line
import { SettingsContext } from '../context/SettingsContext';

// @ts-ignore
import Logo from '../images/diamond.svg';
import Menu from './Menu';

export interface INavbar {
  siteTitle: string,
  onMenuClick: Function,
  setTarget: Function,
  onSettingsClick: Function | undefined,
  menuIsOpen?: boolean,
  showMinimizedTitle?: boolean,
}

function Navbar({
  siteTitle,
  onMenuClick,
  menuIsOpen,
  setTarget,
  showMinimizedTitle,
  onSettingsClick,
}: INavbar) {
  return (
    <Container as="header" className="py-3 bg-dark text-white sticky-top">
      <Row className="align-items-center text-center text-sm-left">
        <Col className="pgn-doc__header-button--menu mb-2 mb-sm-0 col-4" sm={5}>
          <Button
            ref={setTarget}
            className="d-inline-flex align-items-center"
            variant="inverse-tertiary"
            onClick={onMenuClick}
            iconBefore={menuIsOpen ? Close : MenuIcon}
          >
            Menu
          </Button>
        </Col>
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
  setTarget: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  onSettingsClick: PropTypes.func.isRequired,
  menuIsOpen: PropTypes.bool,
  showMinimizedTitle: PropTypes.bool,
};

Navbar.defaultProps = {
  menuIsOpen: false,
  showMinimizedTitle: false,
};

export interface IHeaderProps {
  siteTitle: string,
  showMinimizedTitle?: boolean,
}

function Header({ siteTitle, showMinimizedTitle }: IHeaderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, , close, toggle] = useToggle(false);
  const [target, setTarget] = useState(null);
  console.log('target', target);
  const { openSettings } = useContext(SettingsContext);

  useEffect(() => () => {
    document.body.style.overflow = 'initial';
  }, []);

  return (
    <div className="pgn-doc__header sticky-top">
      <div className="bg-white">
        <Navbar
          setTarget={setTarget}
          siteTitle={siteTitle}
          onMenuClick={toggle}
          menuIsOpen={isOpen}
          showMinimizedTitle={showMinimizedTitle}
          onSettingsClick={openSettings}
        />
        <ModalPopup
          hasArrow
          placement="bottom"
          positionRef={target}
          isOpen={isOpen}
          onClose={close}
          onEscapeKey={close}
        >
          <div className="home-menu">
            <Menu />
          </div>
        </ModalPopup>
      </div>
    </div>
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
