import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class SheetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.sheetRootName = 'sheet-root';
    if (typeof document === 'undefined') {
      this.rootElement = null;
    } else if (document.getElementById(this.sheetRootName)) {
      this.rootElement = document.getElementById(this.sheetRootName);
    } else {
      const rootElement = document.createElement('div');
      rootElement.setAttribute('id', this.sheetRootName);
      rootElement.setAttribute('class', 'sheet-container');
      rootElement.setAttribute('data-testid', 'sheet-container');
      this.rootElement = document.body.appendChild(rootElement);
    }
  }

  render() {
    if (this.rootElement) {
      return ReactDOM.createPortal(
        this.props.children,
        this.rootElement,
      );
    }
    return null;
  }
}

SheetContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SheetContainer;
