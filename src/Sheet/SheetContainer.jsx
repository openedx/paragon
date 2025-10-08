import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SheetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.sheetRootName = 'sheet-root';
    this.updateRootElement();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.className !== this.props.className) {
      this.updateRootElement();
    }
  }

  updateRootElement = () => {
    const { className } = this.props;

    if (typeof document === 'undefined') {
      this.rootElement = null;
      return;
    }

    let rootElement = document.getElementById(this.sheetRootName);

    if (!rootElement) {
      rootElement = document.createElement('div');
      rootElement.setAttribute('id', this.sheetRootName);
      rootElement.setAttribute('data-testid', 'sheet-container');
      document.body.appendChild(rootElement);
    }

    const classes = classNames('sheet-container', className);
    rootElement.setAttribute('class', classes);

    this.rootElement = rootElement;
  };

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
  /** Additional CSS classes to apply to the sheet container */
  className: PropTypes.string,
};

SheetContainer.defaultProps = {
  className: undefined,
};

export default SheetContainer;
