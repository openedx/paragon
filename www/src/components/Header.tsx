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
  ModalDialog,
  breakpoints,
  useMediaQuery,
} from '~paragon-react';
import { Menu as MenuIcon, Close, Settings } from '~paragon-icons'; // eslint-disable-line
import { SettingsContext } from '../context/SettingsContext';
import Menu from './Menu';

// @ts-ignore
import Logo from '../images/diamond.svg';
import Search from './Search';

export interface INavbar {
  siteTitle: string,
  onMenuClick: () => boolean,
  setTarget: React.Dispatch<React.SetStateAction<null>>,
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
          {showMinimizedTitle && (
            <Button
              ref={setTarget}
              className="d-inline-flex align-items-center"
              variant="inverse-tertiary"
              onClick={onMenuClick}
              iconBefore={menuIsOpen ? Close : MenuIcon}
            >
              Menu
            </Button>
          )}
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
        <Col className="small mb-2 mb-sm-0 col-4" sm={5} xl={showMinimizedTitle ? 5 : 4}>
          <Nav className="pgn-doc__header-settings-and-search">
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
            <Nav.Item>
              <Search />
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
  const { openSettings } = useContext(SettingsContext);
  const isMobile = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });

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
        {isMobile ? (
          <ModalDialog
            title="Docsite navigation"
            isOpen={isOpen}
            onClose={close}
            size="fullscreen"
            hasCloseButton
            isFullscreenOnMobile
          >
            <div className="pgn-doc__header-home--menu">
              <Menu />
            </div>
          </ModalDialog>
        ) : (
          <ModalPopup
            hasArrow
            placement="bottom"
            positionRef={target}
            isOpen={isOpen}
            onClose={close}
            onEscapeKey={close}
          >
            <div className="pgn-doc__header-home--menu">
              <Menu />
            </div>
          </ModalPopup>
        )}
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
