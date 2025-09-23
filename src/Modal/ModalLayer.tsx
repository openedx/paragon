/* eslint-disable jsx-a11y/no-static-element-interactions */
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import classNames from 'classnames';
import { FocusOn } from 'react-focus-on';
import Portal from './Portal';
import { ModalContextProvider } from './ModalContext';

// istanbul ignore next
function ModalBackdrop({ onClick }: { onClick?: () => void }) {
  return (
    (
      <div
        className="pgn__modal-backdrop"
        onClick={onClick}
        onKeyDown={onClick}
        data-testid="modal-backdrop"
      />
    )
  );
}

// istanbul ignore next
function ModalContentContainer({ children = null }: { children?: ReactNode }) {
  return <div className="pgn__modal-content-container">{children}</div>;
}

interface Props {
  /** Specifies the contents of the modal */
  children: ReactNode;
  /** A callback function for when the modal is dismissed */
  onClose: () => void;
  /** Is the modal dialog open or closed */
  isOpen: boolean;
  /** Prevent clicking on the backdrop or pressing Esc to close the modal */
  isBlocking?: boolean;
  /** Specifies the z-index of the modal */
  zIndex?: number;
}

/**
 * The ModalLayer should be used for any component that wishes to engage the user
 * in a "mode" where a layer on top of the application is interactive while the
 * rest of the application is made non-interactive. The assumption made by this
 * component is that if a modal object is visible then it is "enabled"
 */
function ModalLayer({
  children, onClose, isOpen, isBlocking = false, zIndex,
}: Props) {
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

  if (!isOpen) {
    return null;
  }

  const handleClose = isBlocking ? undefined : onClose;

  return (
    <ModalContextProvider onClose={onClose} isOpen={isOpen} isBlocking={isBlocking}>
      <Portal>
        <FocusOn
          allowPinchZoom
          scrollLock
          enabled={isOpen}
          onEscapeKey={handleClose}
          onClickOutside={handleClose}
          className={classNames(
            'pgn__modal-layer',
            zIndex ? `zindex-${zIndex}` : '',
          )}
        >
          <ModalContentContainer>
            <ModalBackdrop onClick={handleClose} />
            {children}
          </ModalContentContainer>
        </FocusOn>
      </Portal>
    </ModalContextProvider>
  );
}

export { ModalBackdrop, ModalContentContainer };
export default ModalLayer;
