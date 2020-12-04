import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import BaseToast from 'react-bootstrap/Toast';
import ToastContainer from './ToastContainer';
import { Button, IconButton } from '..';

function Toast({
  action, children, closeLabel, delay, onClose, show,
}) {
  const [autoHide, setAutoHide] = useState(true);
  return (
    <ToastContainer>
      <BaseToast
        autohide={autoHide}
        className="toast"
        delay={delay}
        onClose={onClose}
        onBlur={() => setAutoHide(true)}
        onFocus={() => setAutoHide(false)}
        onMouseOut={() => setAutoHide(true)}
        onMouseOver={() => setAutoHide(false)}
        show={show}
      >
        <div
          className="toast-header"
        >
          <p className="small">{children}</p>
          <div className="toast-header-btn-container">
            <IconButton
              alt={closeLabel}
              className="align-self-start"
              icon={faTimes}
              onClick={() => (onClose())}
              variant="primary"
              invertColors
            />
          </div>
        </div>
        {action && (
          <Button
            as={action.href ? 'a' : 'button'}
            href={action.href}
            onClick={action.onClick}
            size="sm"
            variant="inverse-outline-primary"
          >
            {action.label}
          </Button>
        )}
      </BaseToast>
    </ToastContainer>
  );
}

Toast.defaultProps = {
  action: null,
  closeLabel: 'Close',
  delay: 5000,
};

Toast.propTypes = {
  /** Fields used to build optional action button.
   * "label" is a string rendered inside the button.
   * "href" is a link that will render the action button as an anchor tag.
   * "onClick" is a function that is called when the button is clicked. */
  action: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
  }),
  /** A string or an element that is rendered inside the main body of the Toast. */
  children: PropTypes.string.isRequired,
  /** Alt text for the Toast's dismiss button. The recommended use is an i18n value.
   * The default is an English string. */
  closeLabel: PropTypes.string,
  /** Time in milliseconds for which the Toast will display. */
  delay: PropTypes.number,
  /** A function that is called on close. It can be used to perform
   * actions upon closing of the Toast, such as setting the "show"
   * element to false. */
  onClose: PropTypes.func.isRequired,
  /** Boolean used to control whether the Toast shows */
  show: PropTypes.bool.isRequired,
};

export default Toast;
