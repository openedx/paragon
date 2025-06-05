/* eslint-disable react/require-default-props */
import React, {
  useCallback,
  useEffect,
  useState,
  ReactNode,
  ElementType,
  forwardRef,
  FC,
  ForwardRefExoticComponent,
  RefAttributes,
  cloneElement,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Alert as BaseAlert,
  AlertProps as BaseAlertProps,
} from 'react-bootstrap';
import divWithClassName from 'react-bootstrap/divWithClassName';
import { FormattedMessage } from 'react-intl';
import { useMediaQuery } from 'react-responsive';
import Icon, { IconProps } from '../Icon';
import breakpoints from '../utils/breakpoints';
import Button from '../Button';
// @ts-ignore for now - this needs to be converted to TypeScript
import ActionRow from '../ActionRow';

export const ALERT_CLOSE_LABEL_TEXT = 'Dismiss';

export type AlertVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';

export type BaseProps = Omit<BaseAlertProps, 'children' | 'variant' | 'closeLabel'>;

export interface AlertProps extends BaseProps {
  className?: string;
  bsPrefix?: string;
  variant?: AlertVariant;
  children?: ReactNode;
  icon?: React.ComponentType<IconProps>;
  show?: boolean;
  dismissible?: boolean;
  onClose?: () => void;
  actions?: React.ReactElement[];
  stacked?: boolean;
  closeLabel?: string | ReactNode;
}

export interface AlertHeadingProps {
  as?: ElementType;
  bsPrefix?: string;
  children?: ReactNode;
}

export interface AlertLinkProps {
  as?: ElementType;
  bsPrefix?: string;
  children?: ReactNode;
  href?: string;
}

export interface AlertComponent extends ForwardRefExoticComponent<AlertProps & RefAttributes<HTMLDivElement>> {
  Heading: FC<AlertHeadingProps>;
  Link: FC<AlertLinkProps>;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(({
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
    (Action: React.ReactElement) => {
      const addtlActionProps = { size: actionButtonSize, key: Action.props.children };
      return cloneElement(Action, addtlActionProps);
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
        {(dismissible || (actions && actions.length > 0)) && (
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
}) as AlertComponent;

// This is needed to display a default prop for Alert.Heading element
// Copied from react-bootstrap since BaseAlert.Heading component doesn't have defaultProps,
// so there seems to be no other way of providing correct default prop for base element
const DivStyledAsH4 = divWithClassName('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';

function AlertHeading(props: AlertHeadingProps): JSX.Element {
  return <BaseAlert.Heading {...props} />;
}

function AlertLink(props: AlertLinkProps): JSX.Element {
  return <BaseAlert.Link {...props} />;
}

AlertLink.propTypes = {
  /** Specifies the base element */
  as: PropTypes.elementType as PropTypes.Validator<ElementType>,
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,
};

AlertHeading.propTypes = {
  /** Specifies the base element */
  as: PropTypes.elementType as PropTypes.Validator<ElementType>,
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,
};

AlertLink.defaultProps = {
  as: 'a' as ElementType,
  bsPrefix: 'alert-link',
};

AlertHeading.defaultProps = {
  as: DivStyledAsH4,
  bsPrefix: 'alert-heading',
};

Alert.propTypes = {
  ...BaseAlert.propTypes,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,
  /** Specifies variant to use. */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'] as AlertVariant[]),
  /**
   * Animate the entering and exiting of the Alert. `true` will use the `<Fade>` transition,
   * more detailed customization is also provided.
   */
  transition: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      in: PropTypes.bool,
      appear: PropTypes.bool,
      children: PropTypes.node,
      onEnter: PropTypes.func,
      onEntered: PropTypes.func,
      onEntering: PropTypes.func,
      onExit: PropTypes.func,
      onExited: PropTypes.func,
      onExiting: PropTypes.func,
    }),
  ]) as PropTypes.Validator<BaseAlertProps['transition']>,
  /** Docstring for the children prop */
  children: PropTypes.node as PropTypes.Validator<ReactNode>,
  /** Docstring for the icon prop... Icon that will be shown in the alert */
  icon: PropTypes.func,
  /** Whether the alert is shown. */
  show: PropTypes.bool,
  /** Whether the alert is dismissible. Defaults to true. */
  dismissible: PropTypes.bool,
  /** Optional callback function for when the alert it dismissed. */
  onClose: PropTypes.func,
  /** Optional list of action elements. May include, at most, 2 actions, or 1 if dismissible is true. */
  actions: PropTypes.arrayOf(PropTypes.element) as PropTypes.Validator<React.ReactElement[]>,
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
  className: undefined,
  bsPrefix: undefined,
  variant: undefined,
};

Alert.Heading = AlertHeading;
Alert.Link = AlertLink;

export default Alert;
