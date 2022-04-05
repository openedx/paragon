import React from 'react';
import PropTypes from 'prop-types';
import BaseDropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import BaseDropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownDeprecated from './deprecated';
import { IconButton, Button } from '..';

const Dropdown = React.forwardRef(
  // eslint-disable-next-line prefer-arrow-callback
  function Dropdown({
    autoClose,
    onToggle,
    ...rest
  }, ref) {
    const [show, setShow] = React.useState(false);
    const isClosingPermitted = (source) => {
      console.log('debug', 'isClosingPermitted', { autoClose, source });

      // autoClose=false only permits close on button click
      if (autoClose === false) {
        return source === 'click';
      }
      // autoClose=inside doesn't permit close on rootClose
      if (autoClose === 'inside') {
        return source !== 'rootClose';
      }
      // autoClose=outside doesn't permit close on select
      if (autoClose === 'outside') {
        return source !== 'select';
      }
      return true;
    };

    const handleToggle = (isOpen, event, metadata) => {
      if (isOpen) {
        setShow(true);
        return;
      }
      let { source } = { ...metadata };
      if (event.currentTarget === document && (source !== 'keydown' || event.key === 'Escape')) {
        source = 'rootClose';
      }
      if (isClosingPermitted(source)) {
        setShow(false);
        onToggle?.(isOpen, event, metadata);
      }
    };

    return <BaseDropdown show={show} onToggle={handleToggle} {...rest} ref={ref} />;
  },
);

const DropdownToggle = React.forwardRef(
  // eslint-disable-next-line prefer-arrow-callback
  function DropdownToggle({
    as,
    bsPrefix,
    ...otherProps
  }, ref) {
    // hide arrow from the toggle if it is rendered as IconButton
    // because it hinders the positioning of IconButton
    const prefix = as === IconButton ? 'pgn__dropdown-toggle-iconbutton' : bsPrefix;
    return <BaseDropdownToggle {...otherProps} as={as} bsPrefix={prefix} ref={ref} />;
  },
);

Dropdown.propTypes = {
  onToggle: PropTypes.func,
  autoClose: PropTypes.bool,
};

Dropdown.defaultProps = {
  onToggle: undefined,
  autoClose: true,
};

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
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Header = BaseDropdown.Header;
Dropdown.Divider = BaseDropdown.Divider;

export default Dropdown;
export { DropdownToggle };
export { default as DropdownButton } from 'react-bootstrap/DropdownButton';
export { default as SplitButton } from 'react-bootstrap/SplitButton';
