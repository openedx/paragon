import React from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import Portal from './Portal';
import PopperElement from './PopperElement';
import { ModalContextProvider } from './ModalContext';

const ModalPopup = ({
  children, close, isOpen, positionRef, isBlocking, withPortal, placement, ...popperProps
}) => {
  const RootComponent = withPortal ? Portal : React.Fragment;

  return (
    <ModalContextProvider close={close} isOpen={isOpen} isBlocking={isBlocking}>
      <RootComponent>
        <PopperElement target={positionRef} placement={placement} {...popperProps}>
          <FocusOn
            scrollLock={false}
            enabled={isOpen}
            onEscapeKey={close}
            onClickOutside={close}
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
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isBlocking: PropTypes.bool,
  withPortal: PropTypes.bool,
  // This type: https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react
  positionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.element }),
  ]).isRequired,
  placement: PopperElement.propTypes.placement,
};

ModalPopup.defaultProps = {
  isBlocking: false,
  withPortal: false,
  placement: 'bottom-start',
};

export default ModalPopup;
