import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseButton from 'react-bootstrap/Button';
import BaseButtonGroup from 'react-bootstrap/ButtonGroup';
import BaseButtonToolbar from 'react-bootstrap/ButtonToolbar';

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
  /** Specifies class name to apply to the button */
  className: PropTypes.string,
  /** Disables the Button, preventing mouse events, even if the underlying component is an `<a>` element */
  disabled: PropTypes.bool,
  /** Specifies the text that is displayed within the button. */
  children: PropTypes.node.isRequired,
  /** A function that would specify what the button should do when the `onClick` event is triggered.
   * For example, the button could launch a `Modal`. The default is an empty function. */
  onClick: PropTypes.func,
  /** A function that would specify what the button should do when the `onKeyDown` event is triggered.
   * For example, this could handle using the `Escape` key to trigger the button's action.
   * The default is an empty function. */
  onKeyDown: PropTypes.func,
  /** Used to set the `type` attribute on the `button` tag.  The default type is `button`. */
  type: PropTypes.string,
  /** Specifies variant to use.
   * Can be on of the base variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `dark`,
   * `light`, `link`
   *
   * as well as one of the customized variants (= base variant prefixed with `inverse-`, `outline-`
   * or `inverse-outline-`)
   * */
  variant: PropTypes.string,
  /** An icon component to render.
  * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';` */
  iconBefore: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),
  /** An icon component to render.
  * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';` */
  iconAfter: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),
};

Button.defaultProps = {
  ...Button.defaultProps,
  children: undefined,
  className: undefined,
  iconBefore: undefined,
  iconAfter: undefined,
  disabled: false,
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

export default Button;
export { ButtonGroup, ButtonToolbar };
