import React from 'react';
import PropTypes from 'prop-types';
import { MenuIcon, Close, Settings } from '~paragon-icons';
import {
  Nav,
  Row,
  Col,
  Container,
  Icon,
  IconButton,
  Button,
} from '~paragon-react';
import SiteTitle from './SiteTitle';
import Search from '../Search';

export interface INavbar {
  siteTitle: string,
  onMenuClick: () => boolean,
  setTarget: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>,
  onSettingsClick?: () => void,
  menuIsOpen?: boolean,
  showMinimizedTitle?: boolean,
  showSettingsIcon?: boolean,
}

export default function Navbar({
  siteTitle,
  onMenuClick,
  menuIsOpen,
  setTarget,
  showMinimizedTitle,
  showSettingsIcon,
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
          <SiteTitle isFullVersion={!showMinimizedTitle} title={siteTitle} />
        </Col>
        <Col className="small mb-2 mb-sm-0 col-4" sm={5} xl={showMinimizedTitle ? 5 : 4}>
          {showSettingsIcon && (
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
          )}
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
  showSettingsIcon: PropTypes.bool,
};

Navbar.defaultProps = {
  menuIsOpen: false,
  showMinimizedTitle: false,
  showSettingsIcon: true,
};
