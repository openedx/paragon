import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import { alertButtonProps } from './propTypes';

const AlertButtons = ({
  button,
  className,
  closeLabel,
  dismissible,
  onClose,
}) => {
  const buttonSize = 'sm';

  const [ctaButtonText, ctaButtonAttrs] = useMemo(
    () => {
      const buttonAttrs = {};
      const buttonText = button?.buttonText;
      if (button) {
        const {
          className: ctaButtonClassName,
          ...restButtonAttrs
        } = button;
        delete restButtonAttrs.buttonText;
        Object.assign(buttonAttrs, {
          size: buttonSize,
          className: classNames(ctaButtonClassName, { 'ml-3': dismissible }),
          ...restButtonAttrs,
        });
      }
      return [buttonText, buttonAttrs];
    },
    [JSON.stringify(button)],
  );

  return (
    <div className={classNames('pgn__alert-buttons d-flex justify-content-end', className)}>
      {dismissible && (
        <Button
          size={buttonSize}
          variant="tertiary"
          onClick={onClose}
        >
          {closeLabel}
        </Button>
      )}
      {button && (
        <Button {...ctaButtonAttrs}>
          {ctaButtonText}
        </Button>
      )}
    </div>
  );
};

AlertButtons.propTypes = {
  className: PropTypes.string,
  button: alertButtonProps,
  dismissible: PropTypes.bool,
  onClose: PropTypes.func,
  closeLabel: PropTypes.string,
};

AlertButtons.defaultProps = {
  className: undefined,
  button: undefined,
  dismissible: false,
  onClose: () => {},
  closeLabel: 'Dismiss',
};

export default AlertButtons;
