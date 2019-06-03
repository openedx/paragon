import React from 'react';
import PropTypes from 'prop-types';

class DropdownItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.itemRef = React.createRef();
  }

  componentDidMount = () => {
    const firstItem = this.itemRef.current.offsetParent.childNodes[0];
    firstItem.focus();
  }
  render() {
    const {
      itemLink,
      itemContent,
      ...other
    } = this.props;

    return (
      <a {...other} className="dropdown-item" href={itemLink} ref={this.itemRef}>{itemContent}</a>
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
