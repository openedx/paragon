import React from 'react';
import BaseAlert, { AlertProps } from 'react-bootstrap/Alert';

declare const ALERT_CLOSE_LABEL_TEXT: string;
export interface BaseAlertProps extends AlertProps {
  icon?: React.ReactElement,
  actions?: Array<React.ReactElement>,
  dismissible?: boolean,
  onClose?: () => void,
  closeLabel?: React.ReactElement,
  stacked?: boolean,
}
declare const Alert: React.ForwardRefExoticComponent<BaseAlertProps> & {
  Link: typeof BaseAlert.Link;
  Heading: typeof BaseAlert.Heading;
};
export { ALERT_CLOSE_LABEL_TEXT };
export default Alert;
