import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import Button from '../Button';


const propTypes = {
  className: PropTypes.string,
  state: PropTypes.string,
  labels: PropTypes.objectOf(PropTypes.string).isRequired,
  icons: PropTypes.objectOf(PropTypes.node),
  disabledStates: PropTypes.arrayOf(PropTypes.string),
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
  disabledStates: ['pending', 'complete', 'error'],
};


function AsyncActionButton({
  className,
  state,
  labels,
  icons,
  disabledStates,
  ...attributes
}) {
  const isDisabled = disabledStates.indexOf(state) !== -1;
  const icon = icons[state] !== undefined ? icons[state] : icons.default;

  return (
    <Button
      aria-live="assertive"
      disabled={isDisabled}
      className={classNames(
        'pgn__async-action-btn',
        `pgn__async-action-btn-state-${state}`,
        className,
        { disabled: isDisabled },
      ).split(' ')}
      {...attributes}
    >
      <span className="d-flex align-items-center justify-content-center">
        {icon ? <span className="pgn__async-action-btn-icon">{icon}</span> : null}
        {labels[state] !== undefined ? labels[state] : labels.default}
      </span>
    </Button>
  );
}


AsyncActionButton.propTypes = propTypes;
AsyncActionButton.defaultProps = defaultProps;


export default AsyncActionButton;
