import React from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import Portal from './Portal';
import PopperElement from './PopperElement';
import { ModalContextProvider } from './ModalContext';

const PLACEMENT_OFFSETS = { right: [-2, 10], left: [-2, 10] };

function ModalPopup({
  children,
  onClose,
  isOpen,
  positionRef,
  isBlocking,
  withPortal,
  placement,
  hasArrow,
  ...popperProps
}) {
  const RootComponent = withPortal ? Portal : React.Fragment;
  const placementOffsetValue = PLACEMENT_OFFSETS[placement] || [0, 10];

  const popperParams = [
    {
      name: 'eventListeners',
      options: { scroll: false },
    },
    {
      name: 'offset',
      options: {
        offset: () => placementOffsetValue,
      },
    },
  ];

  return (
    <ModalContextProvider onClose={onClose} isOpen={isOpen} isBlocking={isBlocking}>
      <RootComponent>
        <PopperElement
          modifiers={hasArrow ? popperParams : null}
          target={positionRef}
          placement={placement}
          {...popperProps}
        >
          <FocusOn
            scrollLock={false}
            enabled={isOpen}
            onEscapeKey={onClose}
            onClickOutside={onClose}
          >
            {isOpen && (
              <div className="pgn__modal-popup__tooltip">
                {children}
                {hasArrow && (
                  <div
                    id="arrow"
                    data-testid="modal-popup-arrow"
                    className={`pgn__modal-popup__arrow pgn__modal-popup__arrow-${placement}`}
                    data-popper-arrow=""
                  />
                )}
              </div>
            )}
          </FocusOn>
        </PopperElement>
      </RootComponent>
    </ModalContextProvider>
  );
}

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
  /** Caret to the modal popup pointing to the target */
  hasArrow: PropTypes.bool,
};

ModalPopup.defaultProps = {
  isBlocking: false,
  withPortal: false,
  placement: 'bottom-start',
  positionRef: null,
  hasArrow: false,
};

export default ModalPopup;
