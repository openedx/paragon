import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import BaseDropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownDeprecated from './deprecated';
import { IconButton, Button } from '..';

const DropdownToggle = React.forwardRef(({
  as,
  bsPrefix,
  ...otherProps
}, ref) => {
  // hide arrow from the toggle if it is rendered as IconButton
  // because it hinders the positioning of IconButton
  const prefix = as === IconButton ? 'pgn__dropdown-toggle-iconbutton' : bsPrefix;
  return <BaseDropdownToggle {...otherProps} as={as} bsPrefix={prefix} ref={ref} />;
});

DropdownToggle.propTypes = {
  /** Specifies the base element. */
  as: PropTypes.elementType,
  /** Overrides underlying component base CSS class name. */
  bsPrefix: PropTypes.string,
  /** An html id attribute, necessary for assistive technologies, such as screen readers. */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

DropdownToggle.defaultProps = {
  as: Button,
  bsPrefix: 'dropdown-toggle',
};

Dropdown.Deprecated = DropdownDeprecated;
Dropdown.Toggle = DropdownToggle;

export default Dropdown;
export { DropdownToggle };
export { default as DropdownButton } from 'react-bootstrap/DropdownButton';
export { default as SplitButton } from 'react-bootstrap/SplitButton';
