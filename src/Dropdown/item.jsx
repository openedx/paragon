import React from 'react';
import PropTypes from 'prop-types';

class DropdownItem extends React.PureComponent {
  render() {
    const {
      itemLink,
      itemContent,
    } = this.props;

    return (
      <React.Fragment>
        <a className="dropdown-item" href={itemLink}>{itemContent}</a>
      </React.Fragment>
    );
  }
}

DropdownItem.propTypes = {
  itemLink: PropTypes.string,
  itemContent: PropTypes.string,
};

DropdownItem.defaultProps = {
  itemLink: null,
  itemContent: 'Item',
};

export default DropdownItem;
