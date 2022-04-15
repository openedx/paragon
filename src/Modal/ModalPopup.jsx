import React from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import Portal from './Portal';
import PopperElement from './PopperElement';
import { ModalContextProvider } from './ModalContext';

const ModalPopup = ({
  children,
  onClose,
  isOpen,
  positionRef,
  isBlocking,
  withPortal,
  placement,
  ...popperProps
}) => {
  const RootComponent = withPortal ? Portal : React.Fragment;

  return (
    <ModalContextProvider onClose={onClose} isOpen={isOpen} isBlocking={isBlocking}>
      <RootComponent>
        <PopperElement target={positionRef} placement={placement} {...popperProps}>
          <FocusOn
            scrollLock={false}
            enabled={isOpen}
            onEscapeKey={onClose}
            onClickOutside={onClose}
          >
            {isOpen && (
              <>
                {children}
              </>
            )}
          </FocusOn>
        </PopperElement>
      </RootComponent>
    </ModalContextProvider>
  );
};

ModalPopup.propTypes = {
  /** Specifies the contents of the modal */
  children: PropTypes.node.isRequired,
  /** A callback function for when the modal is dismissed */
  onClose: PropTypes.func.isRequired,
  /** Is the modal dialog open or closed */
  isOpen: PropTypes.bool.isRequired,
  /** Prevent clicking on the backdrop to close the modal */
  isBlocking: PropTypes.bool,
  /** Insert modal into a different location in the DOM */
  withPortal: PropTypes.bool,
  // This type: https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react
  /** Specifies an element near which the modal should be displayed */
  positionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.shape({}) }),
  ]),
  /** Specifies position according to the element that the ``positionRef`` prop points to */
  placement: PopperElement.propTypes.placement,
};

ModalPopup.defaultProps = {
  isBlocking: false,
  withPortal: false,
  placement: 'bottom-start',
  positionRef: null,
};

export default ModalPopup;
