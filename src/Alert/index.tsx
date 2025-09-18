/* eslint-disable react/require-default-props */
import type { ComponentType, ReactElement, ForwardedRef } from 'react';

import {
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

import classNames from 'classnames';
import {
  Alert as BaseAlert,
  AlertProps as BaseAlertProps,
} from 'react-bootstrap';
import { type TransitionComponent } from 'react-bootstrap/helpers';
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
  /** Specifies class name to append to the base element */
  className?: string;
  /** Overrides underlying component base CSS class name */
  bsPrefix?: string;
  /** Specifies variant to use. */
  variant?: AlertVariant;
  /**
   * Animate the entering and exiting of the Alert. `true` will use the `<Fade>` transition,
   * more detailed customization is also provided.
   */
  transition?: boolean | TransitionComponent;
  children?: ReactNode;
  /** Icon that will be shown in the alert */
  icon?: ComponentType<IconProps>;
  /** Whether the alert is shown. */
  show?: boolean;
  /** Whether the alert is dismissible. Defaults to false. */
  dismissible?: boolean;
  /** Optional callback function for when the alert it dismissed. */
  onClose?: () => void;
  /** Optional list of action elements. May include, at most, 2 actions, or 1 if dismissible is true. */
  actions?: ReactElement[];
  /** Position of the dismiss and call-to-action buttons. Defaults to `false`. */
  stacked?: boolean;
  /** Sets the text for alert close button, defaults to 'Dismiss'. */
  closeLabel?: string | ReactNode;
}

export interface AlertHeadingProps {
  /** Specifies the base element */
  as?: ElementType;
  /** Overrides underlying component base CSS class name */
  bsPrefix?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  children?: ReactNode;
}

export interface AlertLinkProps {
  /** Specifies the base element */
  as?: ElementType;
  /** Overrides underlying component base CSS class name */
  bsPrefix?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  children?: ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  href?: string;
}

export interface AlertComponent extends ForwardRefExoticComponent<AlertProps & RefAttributes<HTMLDivElement>> {
  Heading: FC<AlertHeadingProps>;
  Link: FC<AlertLinkProps>;
}

const Alert = forwardRef(({
  children,
  icon,
  actions,
  dismissible = false,
  onClose = () => {},
  closeLabel,
  stacked = false,
  show = true,
  ...props
}: AlertProps, ref: ForwardedRef<HTMLDivElement>) => {
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
    (Action: ReactElement) => {
      const addtlActionProps = { size: actionButtonSize, key: Action.props.children };
      return cloneElement(Action, addtlActionProps);
    },
    [],
  );

  return (
    <BaseAlert
      {...props}
      className={classNames('alert-content', props.className)}
      show={show}
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

function AlertHeading({
  as = DivStyledAsH4,
  bsPrefix = 'alert-heading',
  ...props
}: AlertHeadingProps): JSX.Element {
  return <BaseAlert.Heading {...{ as, bsPrefix, ...props }} />;
}

function AlertLink({
  as = 'a',
  bsPrefix = 'alert-link',
  ...props
}: AlertLinkProps): JSX.Element {
  return <BaseAlert.Link {...{ as, bsPrefix, ...props }} />;
}

Alert.Heading = AlertHeading;
Alert.Link = AlertLink;

export default Alert;
