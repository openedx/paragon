import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Alert from 'react-bootstrap/Alert';
import { useMediaQuery } from 'react-responsive';
import useToggle from '../hooks/useToggle';
import { Icon } from '..';
import AlertButtons from './AlertButtons';
import { alertButtonProps } from './propTypes';
import { breakpoints } from '../Responsive';

const WrappedAlert = React.forwardRef(({
  children,
  icon,
  button,
  dismissible,
  onClose,
  closeLabel,
  show,
  stacked,
  ...props
}, ref) => {
  const [isOpen, /* open */, close] = useToggle(show);
  const [isStacked, setIsStacked] = useState(stacked);
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  useEffect(() => {
    if (isExtraSmall) {
      setIsStacked(true);
    } else {
      setIsStacked(stacked);
    }
  }, [isExtraSmall, stacked]);

  const handleClose = useCallback((e) => {
    close();
    onClose(e);
  }, []);

  return (
    <Alert
      {...props}
      show={isOpen}
      className={classNames('alert-content', props.className)}
      ref={ref}
    >
      {icon && <Icon src={icon} className="alert-icon" />}
      <div
        className={classNames(
          'pgn__alert-content-wrapper',
          {
            'd-flex align-content-center align-items-center': (dismissible || button) && !isStacked,
          },
        )}
      >
        <div className="alert-message-content">
          {children}
        </div>
        {(dismissible || button) && (
          <AlertButtons
            className={classNames({
              'mt-3': isStacked,
              'ml-4': !isStacked,
            })}
            button={button}
            dismissible={dismissible}
            closeLabel={closeLabel}
            onClose={handleClose}
          />
        )}
      </div>
    </Alert>
  );
});

WrappedAlert.propTypes = {
  ...Alert.propTypes,
  /** Docstring for the children prop */
  children: PropTypes.node,
  /** Docstring for the icon prop... Icon that will be shown in the alert */
  icon: PropTypes.func,
  /** Whether the alert is shown. */
  show: PropTypes.bool,
  /** Whether the alert is dismissible. Defaults to true. */
  dismissible: PropTypes.bool,
  /** Optional callback function for when the alert it dismissed. */
  onClose: PropTypes.func,
  /** Optional list of props button */
  button: alertButtonProps,
  /** Position of the dismiss and call-to-action buttons. Defaults to ``false``. */
  stacked: PropTypes.bool,
};

WrappedAlert.defaultProps = {
  ...Alert.defaultProps,
  children: undefined,
  icon: undefined,
  button: undefined,
  dismissible: false,
  onClose: () => {},
  closeLabel: 'Dismiss',
  show: true,
  stacked: false,
};

WrappedAlert.Link = Alert.Link;
WrappedAlert.Heading = Alert.Heading;

export default WrappedAlert;
