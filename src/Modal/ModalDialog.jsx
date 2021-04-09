import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalLayer from './ModalLayer';
import { Icon, IconButton } from '..';
import { Close } from '../../icons';
import ModalCloseButton from './ModalCloseButton';
import ModalDialogHeader from './ModalDialogHeader';
import ModalDialogTitle from './ModalDialogTitle';
import ModalDialogFooter from './ModalDialogFooter';
import ModalDialogBody from './ModalDialogBody';
import ModalDialogHero from './ModalDialogHero';

function ModalDialog({
  children,
  title,
  isOpen,
  onClose,
  size,
  variant,
  hasCloseButton,
}) {
  return (
    <ModalLayer isOpen={isOpen} onClose={onClose}>
      <div
        role="dialog"
        aria-label={title}
        className={classNames(
          'pgn__modal',
          'pgn__modal-scroll-internal',
          {
            [`pgn__modal-${size}`]: size,
            [`pgn__modal-${variant}`]: variant,
          },
        )}
      >
        {hasCloseButton && (
          <div className="pgn__modal-close-container">
            <ModalCloseButton
              as={IconButton}
              iconAs={Icon}
              invertColors={variant === 'dark'}
              src={Close}
              alt="Close"
            />
          </div>
        )}
        {children}
      </div>
    </ModalLayer>
  );
}

ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string,
};

ModalDialog.defaultProps = {
  isOpen: false,
  hasCloseButton: true,
  size: 'md',
  variant: 'default',
};

ModalDialog.Header = ModalDialogHeader;
ModalDialog.Title = ModalDialogTitle;
ModalDialog.Footer = ModalDialogFooter;
ModalDialog.CloseButton = ModalCloseButton;
ModalDialog.Body = ModalDialogBody;
ModalDialog.Hero = ModalDialogHero;

export default ModalDialog;
