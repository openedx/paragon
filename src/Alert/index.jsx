import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseAlert from 'react-bootstrap/Alert';
import divWithClassName from 'react-bootstrap/divWithClassName';
import { FormattedMessage } from 'react-intl';
import { useMediaQuery } from 'react-responsive';
import Icon from '../Icon';
import breakpoints from '../utils/breakpoints';
import Button from '../Button';
import ActionRow from '../ActionRow';

export const ALERT_CLOSE_LABEL_TEXT = 'Dismiss';

const Alert = React.forwardRef(({
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
    <BaseAlert
      {...props}
      className={classNames('alert-content', props.className)}
      ref={ref}
    >
      {icon && <Icon src={icon} className="alert-icon" />}
      <div
        className={classNames({
          'pgn__alert-message-wrapper': !isStacked,
          'pgn__alert-message-wrapper-stacked': isStacked,
        })}
      >
        <div className="alert-message-content">
          {children}
        </div>
        {(dismissible || actions?.length > 0) && (
          <ActionRow className="pgn__alert-actions">
            <ActionRow.Spacer />
            {dismissible && (
              <Button
                size={actionButtonSize}
                variant="tertiary"
                onClick={onClose}
              >
                {closeLabel || (
                  <FormattedMessage
                    id="pgn.Alert.closeLabel"
                    defaultMessage="Dismiss"
                    description="Label of a close button on Alert component"
                  />
                )}
              </Button>
            )}
            {actions && actions.map(cloneActionElement)}
          </ActionRow>
        )}
      </div>
    </BaseAlert>
  );
});

// This is needed to display a default prop for Alert.Heading element
// Copied from react-bootstrap since BaseAlert.Heading component doesn't have defaultProps,
// so there seems to be no other way of providing correct default prop for base element
const DivStyledAsH4 = divWithClassName('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';

function AlertHeading(props) {
  return <BaseAlert.Heading {...props} />;
}
function AlertLink(props) {
  return <BaseAlert.Link {...props} />;
}

const commonPropTypes = {
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,
};

AlertLink.propTypes = commonPropTypes;
AlertHeading.propTypes = commonPropTypes;

AlertLink.defaultProps = {
  as: 'a',
  bsPrefix: 'alert-link',
};

AlertHeading.defaultProps = {
  as: DivStyledAsH4,
  bsPrefix: 'alert-heading',
};

Alert.propTypes = {
  ...BaseAlert.propTypes,
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
  /** Sets the text for alert close button, defaults to 'Dismiss'. */
  closeLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Alert.defaultProps = {
  ...BaseAlert.defaultProps,
  children: undefined,
  icon: undefined,
  actions: undefined,
  dismissible: false,
  onClose: () => {},
  closeLabel: undefined,
  show: true,
  stacked: false,
};

Alert.Heading = AlertHeading;
Alert.Link = AlertLink;

export default Alert;
