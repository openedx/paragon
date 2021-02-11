/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/*  TODO: The first of these two disabled linters is okay.
Focus lock is handling the keyboard for us. The second I'm not sure */

import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import Portal from './Portal';
import ModalContext from './ModalContext';

const overlayStyles = {
  zIndex: 3050, // $zindex-modal: 1050 !default;
  overflow: 'auto',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
};

const useMemoizedValues = ({ close, isOpen, isBlocking }) => useMemo(() => ({
  close,
  isOpen,
  isBlocking,
}), [close, isOpen, isBlocking]);

const ModalBackdrop = () => {
  const { close, isBlocking } = useContext(ModalContext);

  return (
    <div
      style={{
        ...overlayStyles,
        zIndex: -1,
        background: 'rgba(0,0,0,.5)',
      }}
      className="position-overlay"
      onClick={!isBlocking && close}
    />
  );
};

/**
 * The ModalBase should be used for any component that wishes to capture the
 * user in a *modal* context where the rest of the application is non-interactive.
 * The assumption made by this component is that if a modal object is visible then
 * it is "enabled"
 */
const ModalLayer = ({
  children, close, isOpen, isBlocking,
}) => {
  if (!isOpen) {
    return null;
  }

  const modalContextValue = useMemoizedValues({ close, isOpen, isBlocking });

  return (
    <ModalContext.Provider value={modalContextValue}>
      <Portal>
        <FocusOn
          scrollLock
          enabled={isOpen}
          onEscapeKey={close}
          onClickOutside={!isBlocking && close}
        >
          <div style={overlayStyles}>
            <ModalBackdrop />
            {children}
          </div>
        </FocusOn>
      </Portal>
    </ModalContext.Provider>
  );
};

ModalLayer.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isBlocking: PropTypes.bool,
};

ModalLayer.defaultProps = {
  isBlocking: false,
};

export default ModalLayer;
