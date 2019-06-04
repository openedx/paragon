import React from 'react';
import PropTypes from 'prop-types';

class DropdownItem extends React.PureComponent {
  render() {
    const {
      type,
      children,
      ...other
    } = this.props;

    const item = React.createElement(
      type,
      {
        ...other,
        className: 'dropdown-item',
      },
      children,
    );
    return item;
  }
}

DropdownItem.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

DropdownItem.defaultProps = {
  type: 'a',
  children: undefined,
};

export default DropdownItem;
