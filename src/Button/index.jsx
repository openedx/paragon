import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'react-bootstrap/Button';
import BaseButtonGroup from 'react-bootstrap/ButtonGroup';
import BaseButtonToolbar from 'react-bootstrap/ButtonToolbar';

import Icon from '../Icon';

const WrappedButton = React.forwardRef(({
  children,
  iconAfter,
  iconBefore,
  ...props
}, ref) => (
  <Button
    {...props}
    className={classNames(props.className)}
    ref={ref}
  >
    {iconBefore && <Icon className="btn-icon-before" size={props.size} src={iconBefore} />}
    {children}
    {iconAfter && <Icon className="btn-icon-after" size={props.size} src={iconAfter} />}
  </Button>
));

WrappedButton.propTypes = {
  ...Button.propTypes,
  /** Docstring for the children prop */
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /** Docstring for className... A class name to append to the button */
  className: PropTypes.string,
  /** An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@edx/paragon/icons';` */
  iconBefore: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /** An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@edx/paragon/icons';` */
  iconAfter: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};

WrappedButton.defaultProps = {
  ...Button.defaultProps,
  children: undefined,
  className: undefined,
  iconBefore: undefined,
  iconAfter: undefined,
};

function ButtonGroup(props) {
  return <BaseButtonGroup {...props} />;
}
function ButtonToolbar(props) {
  return <BaseButtonToolbar {...props} />;
}

ButtonGroup.propTypes = {
  /** Specifies element type for this component. */
  as: PropTypes.elementType,
  /** An ARIA role describing the button group. */
  role: PropTypes.string,
  /** Specifies the size for all Buttons in the group. */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Display as a button toggle group. */
  toggle: PropTypes.bool,
  /** Specifies if the set of Buttons should appear vertically stacked. */
  vertical: PropTypes.bool,
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,
};

ButtonGroup.defaultProps = {
  as: 'div',
  role: 'group',
  toggle: false,
  vertical: false,
  bsPrefix: 'btn-group',
  size: 'md',
};

ButtonToolbar.propTypes = {
  /** An ARIA role describing the button group. */
  role: PropTypes.string,
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,
};

ButtonToolbar.defaultProps = {
  role: 'toolbar',
  bsPrefix: 'btn-toolbar',
};

export default WrappedButton;
export { ButtonGroup, ButtonToolbar };
