import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function DropdownItem(props) {
  const {
    type, children, className, ...other
  } = props;
  return React.createElement(
    type,
    {
      ...other,
      className: classNames(
        'dropdown-item',
        className,
      ),
    },
    children,
  );
}

DropdownItem.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

DropdownItem.defaultProps = {
  type: 'a',
  children: undefined,
  className: null,
};

export default DropdownItem;
