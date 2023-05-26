import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseButton from 'react-bootstrap/Button';
import BaseButtonGroup from 'react-bootstrap/ButtonGroup';
import BaseButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonDeprecated from './deprecated';

import Icon from '../Icon';

const Button = React.forwardRef(({
  children,
  iconAfter,
  iconBefore,
  ...props
}, ref) => (
  <BaseButton
    {...props}
    className={classNames(props.className)}
    ref={ref}
  >
    {iconBefore && <Icon className="btn-icon-before" size={props.size} src={iconBefore} />}
    {children}
    {iconAfter && <Icon className="btn-icon-after" size={props.size} src={iconAfter} />}
  </BaseButton>
));

Button.propTypes = {
  ...Button.propTypes,
  /** Used to determine the type of button to be rendered.  See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable button types. For example, `buttonType="light"`. The default is `undefined`. */
  buttonType: PropTypes.string,
  /** Specifies Bootstrap class names to apply to the button. See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable class names. The default is an empty array. */
  className: PropTypes.string,
  /** Specifies the text that is displayed within the button. */
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line max-len
  /** A function that defines a reference for the button. An example `inputRef` from the calling component could look something like: `inputRef={(input) => { this.button = input; }}`. The default is an empty function. */
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) }),
  ]),
  /** Used to determine if the button is a "Close" style button to leverage bootstrap styling. Example use case is with the Status Alert [dismiss button](https://getbootstrap.com/docs/4.0/components/alerts/#dismissing). The default is false. */
  isClose: PropTypes.bool,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onBlur` event is triggered. For example, the button could change in color or `buttonType` when focus is changed. The default is an empty function. */
  onBlur: PropTypes.func,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onClick` event is triggered. For example, the button could launch a `Modal`. The default is an empty function. */
  onClick: PropTypes.func,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onKeyDown` event is triggered.  For example, this could handle using the `Escape` key to trigger the button's action. The default is an empty function. */
  onKeyDown: PropTypes.func,
  /** Used to set the `type` attribute on the `button` tag.  The default type is `button`. */
  type: PropTypes.string,
  /** Specifies variant to use. */
  variant: PropTypes.oneOf([
    'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link', 'outline-primary',
    'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-dark', 'outline-light']),
  /** An icon component to render.
  * Example import of a Paragon icon component: `import { Check } from '@edx/paragon/icons';` */
  iconBefore: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /** An icon component to render.
  * Example import of a Paragon icon component: `import { Check } from '@edx/paragon/icons';` */
  iconAfter: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};

Button.defaultProps = {
  ...Button.defaultProps,
  children: undefined,
  className: undefined,
  iconBefore: undefined,
  iconAfter: undefined,
};

Button.Deprecated = ButtonDeprecated;

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

export default Button;
export { ButtonGroup, ButtonToolbar };
