import React from 'react';
import { FocusOn } from 'react-focus-on';
import type { Placement } from '@popperjs/core';
import { Modifier } from 'react-popper';
import Portal from './Portal';
import { ModalContextProvider } from './ModalContext';
import PopperElement from './PopperElement';

type PlacementOffsets = {
  [K in Placement]: number[] | undefined;
};

const PLACEMENT_OFFSETS: PlacementOffsets = {
  right: [-2, 10],
  left: [-2, 10],
  auto: undefined,
  'auto-start': undefined,
  'auto-end': undefined,
  top: undefined,
  bottom: undefined,
  'top-start': undefined,
  'top-end': undefined,
  'bottom-start': undefined,
  'bottom-end': undefined,
  'right-start': undefined,
  'right-end': undefined,
  'left-start': undefined,
  'left-end': undefined,
};

interface ModalPopupProps {
  /** Specifies the contents of the modal */
  children: React.ReactNode,
  /** A callback function for when the modal is dismissed */
  onClose: () => void,
  /** Is the modal dialog open or closed */
  isOpen: boolean,
  /** Prevent clicking on the backdrop or pressing Esc to close the modal */
  isBlocking?: boolean,
  /** Insert modal into a different location in the DOM */
  withPortal?: boolean,
  // This type: https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react
  /** Specifies an element near which the modal should be displayed */
  positionRef?: React.RefObject<HTMLElement> | null,
  /** Specifies position according to the element that the ``positionRef`` prop points to */
  placement?: Placement,
  /** Caret to the modal popup pointing to the target */
  hasArrow?: boolean,
  /** Disables aria-hidden isolation */
  noIsolation?: boolean,
}

function ModalPopup({
  children,
  onClose,
  isOpen,
  positionRef = null,
  isBlocking,
  withPortal,
  placement = 'bottom-start',
  hasArrow,
  noIsolation,
  ...popperProps
}: ModalPopupProps) {
  const RootComponent = withPortal ? Portal : React.Fragment;
  const placementOffsetValue = PLACEMENT_OFFSETS[placement] || [0, 10];

  const popperParams: Array<Modifier<string>> = [
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

  const handleOnClickOutside = (e: MouseEvent) => {
    if (e.type === 'touchstart') {
      return;
    }

    onClose();
  };

  return (
    <ModalContextProvider onClose={onClose} isOpen={isOpen} isBlocking={isBlocking}>
      <RootComponent>
        <PopperElement
          modifiers={hasArrow ? popperParams : undefined}
          target={positionRef?.current}
          placement={placement}
          {...popperProps}
        >
          <FocusOn
            scrollLock={false}
            enabled={isOpen}
            onEscapeKey={onClose}
            onClickOutside={handleOnClickOutside}
            noIsolation={noIsolation}
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

export default ModalPopup;
