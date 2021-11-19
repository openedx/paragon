import React from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import Portal from './Portal';
import { ModalContextProvider } from './ModalContext';

// istanbul ignore next
const ModalBackdrop = ({ onClick }) => (

  // Focus lock is handling the keyboard eventfor us. Though adding a role="button"
  // would be appropriate, modal dialogs provide their own close button and this
  // would create a duplicative control.
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
  <div className="pgn__modal-backdrop" onClick={onClick} />
);

ModalBackdrop.propTypes = {
  onClick: PropTypes.func,
};

ModalBackdrop.defaultProps = {
  onClick: undefined,
};

// istanbul ignore next
const ModalContentContainer = ({ children }) => (
  <div className="pgn__modal-content-container">{children}</div>
);

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
const ModalLayer = ({
  children, onClose, isOpen, isBlocking,
}) => {
  if (!isOpen) {
    return null;
  }

  const onClickOutside = !isBlocking ? onClose : null;

  return (
    <ModalContextProvider onClose={onClose} isOpen={isOpen} isBlocking={isBlocking}>
      <Portal>
        <FocusOn
          allowPinchZoom
          scrollLock
          enabled={isOpen}
          onEscapeKey={onClose}
          onClickOutside={onClickOutside}
          className="pgn__modal-layer"
        >
          <ModalContentContainer>
            <ModalBackdrop onClick={onClickOutside} />
            {children}
          </ModalContentContainer>
        </FocusOn>
      </Portal>
    </ModalContextProvider>
  );
};

ModalLayer.propTypes = {
  /** Specifies the contents of the modal */
  children: PropTypes.node.isRequired,
  /** A callback function for when the modal is dismissed */
  onClose: PropTypes.func.isRequired,
  /** Is the modal dialog open or closed */
  isOpen: PropTypes.bool.isRequired,
  /** Prevent clicking on the backdrop to close the modal */
  isBlocking: PropTypes.bool,
};

ModalLayer.defaultProps = {
  isBlocking: false,
};

export { ModalBackdrop, ModalContentContainer };
export default ModalLayer;
