import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Alert from 'react-bootstrap/Alert';
import { useMediaQuery } from 'react-responsive';
import { Icon } from '..';
import Button from '../Button';
import { breakpoints } from '../Responsive';
import ActionRow from '../ActionRow';

const WrappedAlert = React.forwardRef(({
  children,
  icon,
  actions,
  dismissible,
  onClose,
  closeLabel,
  stacked,
  ...props
}, ref) => {
  const [isStacked, setIsStacked] = useState(stacked);
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });
  const actionButtonSize = 'sm';

  useEffect(() => {
    if (isExtraSmall) {
      setIsStacked(true);
    } else {
      setIsStacked(stacked);
    }
  }, [isExtraSmall, stacked]);

  const cloneActionElement = useCallback(
    (Action) => {
      const addtlActionProps = { size: actionButtonSize, key: Action.props.children };
      return React.cloneElement(Action, addtlActionProps);
    },
    [],
  );

  return (
    <Alert
      {...props}
      className={classNames('alert-content', props.className)}
      ref={ref}
    >
      {icon && <Icon src={icon} className="alert-icon" />}
      <ActionRow
        isStacked={isStacked}
        isStackedReversed={false}
        isStackedCentered={false}
      >
        <div className="alert-message-content">
          {children}
        </div>
        {(dismissible || actions?.length > 0) && (
          <div className={classNames('pgn__alert-actions', { stacked: isStacked })}>
            {dismissible && (
              <Button
                size={actionButtonSize}
                variant="tertiary"
                onClick={onClose}
              >
                {closeLabel}
              </Button>
            )}
            {actions && actions.map(cloneActionElement)}
          </div>
        )}
      </ActionRow>
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
  /** Optional list of action elements. May include, at most, 2 actions, or 1 if dismissible is true. */
  actions: PropTypes.arrayOf(PropTypes.element),
  /** Position of the dismiss and call-to-action buttons. Defaults to ``false``. */
  stacked: PropTypes.bool,
};

WrappedAlert.defaultProps = {
  ...Alert.defaultProps,
  children: undefined,
  icon: undefined,
  actions: undefined,
  dismissible: false,
  onClose: () => {},
  closeLabel: 'Dismiss',
  show: true,
  stacked: false,
};

WrappedAlert.Link = Alert.Link;
WrappedAlert.Heading = Alert.Heading;

export default WrappedAlert;
