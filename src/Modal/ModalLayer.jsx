import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import Portal from './Portal';
import { ModalContextProvider } from './ModalContext';

// istanbul ignore next
function ModalBackdrop({ onClick }) {
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  return <div className="pgn__modal-backdrop" onClick={onClick} onKeyDown={onClick} />;
}

ModalBackdrop.propTypes = {
  onClick: PropTypes.func,
};

ModalBackdrop.defaultProps = {
  onClick: undefined,
};

// istanbul ignore next
function ModalContentContainer({ children }) {
  return <div className="pgn__modal-content-container">{children}</div>;
}

ModalContentContainer.propTypes = {
  children: PropTypes.node,
};

ModalContentContainer.defaultProps = {
  children: null,
};

/**
 * The ModalLayer should be used for any component that wishes to engage the user
 * in a "mode" where a layer on top of the application is interactive while the
 * rest of the application is made non-interactive. The assumption made by this
 * component is that if a modal object is visible then it is "enabled"
 */
function ModalLayer({
  children, onClose, isOpen, isHidden, isBlocking, zIndex,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('pgn__hidden-scroll-padding-right');
    } else {
      document.body.classList.remove('pgn__hidden-scroll-padding-right');
    }
    return () => {
      document.body.classList.remove('pgn__hidden-scroll-padding-right');
    };
  }, [isOpen]);

  if (!isOpen && !isHidden) {
    return null;
  }

  const onClickOutside = !isBlocking ? onClose : null;

  return (
    <ModalContextProvider onClose={onClose} isOpen={isOpen} isHidden={isHidden} isBlocking={isBlocking}>
      <Portal>
        <FocusOn
          allowPinchZoom
          scrollLock
          enabled={isOpen && !isHidden}
          onEscapeKey={onClose}
          onClickOutside={onClickOutside}
          className={classNames({
            'pgn__modal-layer': isOpen && !isHidden,
            [`zindex-${zIndex}`]: !!zIndex,
          })}
        >
          <ModalContentContainer>
            {!isHidden && <ModalBackdrop onClick={onClickOutside} />}
            <div className={classNames({ 'd-none': isHidden })}>
              {children}
            </div>
          </ModalContentContainer>
        </FocusOn>
      </Portal>
    </ModalContextProvider>
  );
}

ModalLayer.propTypes = {
  /** Specifies the contents of the modal */
  children: PropTypes.node.isRequired,
  /** A callback function for when the modal is dismissed */
  onClose: PropTypes.func.isRequired,
  /** Is the modal dialog open or closed */
  isOpen: PropTypes.bool.isRequired,
  /** Prevent clicking on the backdrop to close the modal */
  isBlocking: PropTypes.bool,
  /** Specifies the z-index of the modal */
  zIndex: PropTypes.number,
};

ModalLayer.defaultProps = {
  isBlocking: false,
  zIndex: undefined,
};

export { ModalBackdrop, ModalContentContainer };
export default ModalLayer;
