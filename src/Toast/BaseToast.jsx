/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import Icon from '../Icon';
import IconButton from '../IconButton';
import Button from '../Button';
import { Close } from '../../icons';

function Toast({
  id, message, onDismiss, actions, className, duration, ...rest
}) {
  const intl = useIntl();
  const intlCloseLabel = intl.formatMessage({
    id: 'pgn.Toast.closeLabel',
    defaultMessage: 'Close',
    description: 'Close label for Toast component',
  });

  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(() => onDismiss(id), duration);

    return () => clearTimeout(timerRef.current);
  }, [id, onDismiss, duration]);

  const clearTimer = () => {
    clearTimeout(timerRef.current);
  };

  const startTimer = () => {
    clearTimer();
    timerRef.current = setTimeout(() => onDismiss(id), duration);
  };

  return (
    <div
      className={classNames('pgn__toast', className)}
      onMouseOver={clearTimer}
      onMouseOut={startTimer}
      onFocus={clearTimer}
      onBlur={startTimer}
      {...rest}
    >
      <div className="pgn__toast__header small">
        <p className="pgn__toast__message">{message}</p>

        <IconButton
          iconAs={Icon}
          alt={intlCloseLabel}
          className="pgn__toast__close-btn align-self-start"
          src={Close}
          onClick={() => onDismiss(id)}
          variant="primary"
          invertColors
        />
      </div>
      {actions
        ? (
          <div className="pgn__toast__optional-actions">
            {actions.map((action) => (
              <Button
                as={action.href ? 'a' : 'button'}
                href={action.href}
                onClick={action.onClick}
                size="sm"
                variant="inverse-outline-primary"
              >
                {action.label}
              </Button>
            ))}
          </div>
        )
        : null}
    </div>
  );
}

export default Toast;

Toast.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      href: PropTypes.string,
    }),
  ),
  className: PropTypes.string,
  duration: PropTypes.number,
};

Toast.defaultProps = {
  onDismiss: () => {},
  actions: null,
  className: '',
  duration: 5000,
};
