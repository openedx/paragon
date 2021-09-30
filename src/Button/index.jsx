import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'react-bootstrap/Button';
import ButtonDeprecated from './deprecated';

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
    {iconBefore && <Icon className={classNames('btn-icon-before', props.size && `pgn__icon__${props.size}`)} src={iconBefore} />}
    {children}
    {iconAfter && <Icon className={classNames('btn-icon-after', props.size && `pgn__icon__${props.size}`)} src={iconAfter} />}
  </Button>
));

WrappedButton.propTypes = {
  ...Button.propTypes,
  /** Docstring for the children prop */
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
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

WrappedButton.Deprecated = ButtonDeprecated;

export default WrappedButton;
export { default as ButtonGroup } from 'react-bootstrap/ButtonGroup';
export { default as ButtonToolbar } from 'react-bootstrap/ButtonToolbar';
