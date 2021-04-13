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
    <span className={classNames('d-flex', 'align-items-center')}>
      {iconBefore && <Icon className="mr-2" src={iconBefore} />}
      {children}
      {iconAfter && <Icon className="ml-2" src={iconAfter} />}
    </span>
  </Button>
));

WrappedButton.propTypes = {
  ...Button.propTypes,
  /** Docstring for the children prop */
  children: PropTypes.string,
  /** Docstring for className... A class name to append to the button */
  className: PropTypes.string,
  /** An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@edx/paragon/dist/icon';` */
  iconBefore: PropTypes.node,
  /** An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@edx/paragon/dist/icon';` */
  iconAfter: PropTypes.node,
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
