import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { Icon } from '..';

const WrappedAlert = React.forwardRef(({
  children,
  icon,
  ...props
}, ref) => (
  <Alert
    {...props}
    className={`alert-content ${props.className}`}
    ref={ref}
  >
    {icon && <Icon src={icon} className="alert-icon" />}
    <div className="alert-message-content">
      {children}
    </div>
  </Alert>
));

WrappedAlert.propTypes = {
  ...Alert.propTypes,
  /** Docstring for the children prop */
  children: PropTypes.node,
  /** Docstring for the icon prop... Icon that will be shown in the alert */
  icon: PropTypes.func,
};

WrappedAlert.defaultProps = {
  ...Alert.defaultProps,
  children: undefined,
  icon: undefined,
};

WrappedAlert.Link = Alert.Link;
WrappedAlert.Heading = Alert.Heading;

export default WrappedAlert;
