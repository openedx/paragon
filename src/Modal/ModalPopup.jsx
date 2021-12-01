import React from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import Portal from './Portal';
import PopperElement from './PopperElement';
import { ModalContextProvider } from './ModalContext';

const ModalPopup = ({
  children, onClose, isOpen, positionRef, isBlocking, withPortal, placement, ...popperProps
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
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isBlocking: PropTypes.bool,
  withPortal: PropTypes.bool,
  // This type: https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react
  positionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.shape({}) }),
  ]).isRequired,
  placement: PopperElement.propTypes.placement,
};

ModalPopup.defaultProps = {
  isBlocking: false,
  withPortal: false,
  placement: 'bottom-start',
};

export default ModalPopup;
