import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  useToggle,
  ModalPopup,
  ModalDialog,
  breakpoints,
  useMediaQuery,
} from '~paragon-react';
import Navbar from './Navbar';
import { SettingsContext } from '../../context/SettingsContext';
import Menu from '../Menu';

export interface IHeaderProps {
  siteTitle: string,
  showMinimizedTitle?: boolean,
  componentName?: string,
  componentCategories?: string[],
}

function Header({
  siteTitle, showMinimizedTitle, componentName, componentCategories,
}: IHeaderProps) {
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
              <Menu componentName={componentName} componentCategories={componentCategories} />
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
              <Menu componentName={componentName} componentCategories={componentCategories} />
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
  componentName: PropTypes.string,
  componentCategories: PropTypes.arrayOf(PropTypes.string),
};

Header.defaultProps = {
  siteTitle: '',
  showMinimizedTitle: false,
  componentName: undefined,
  componentCategories: undefined,
};

export default Header;
