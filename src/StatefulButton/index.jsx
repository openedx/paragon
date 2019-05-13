import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import Button from '../Button';


const propTypes = {
  className: PropTypes.string,
  state: PropTypes.string,
  labels: PropTypes.objectOf(PropTypes.node).isRequired,
  icons: PropTypes.objectOf(PropTypes.node),
  disabledStates: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

const defaultProps = {
  className: undefined,
  state: 'default',
  icons: {
    default: undefined,
    pending: <Icon className="icon fa fa-spinner fa-spin" />,
    complete: <Icon className="icon fa fa-check-circle" />,
    error: <Icon className="icon fa fa-times-circle" />,
  },
  disabledStates: ['pending', 'complete'],
  onClick: undefined,
};


function StatefulButton({
  className,
  state,
  labels,
  icons,
  disabledStates,
  onClick,
  ...attributes
}) {
  const isDisabled = disabledStates.indexOf(state) !== -1;
  const icon = icons[state] !== undefined ? icons[state] : icons.default;

  return (
    <Button
      aria-live="assertive"
      aria-disabled={isDisabled}
      className={classNames(
        'pgn__stateful-btn',
        `pgn__stateful-btn-state-${state}`,
        className,
        { disabled: isDisabled },
      )}
      onClick={(e) => {
        // Swallow clicks if the button is disabled.
        // We do this instead of disabling the button to prevent
        // it from losing focus (disabled elements cannot have focus).
        if (isDisabled) {
          e.preventDefault();
          return;
        }

        if (onClick) onClick(e);
      }}
      {...attributes}
    >
      <span className="d-flex align-items-center justify-content-center">
        {icon ? <span className="pgn__stateful-btn-icon">{icon}</span> : null}
        {labels[state] !== undefined ? labels[state] : labels.default}
      </span>
    </Button>
  );
}


StatefulButton.propTypes = propTypes;
StatefulButton.defaultProps = defaultProps;


export default StatefulButton;
