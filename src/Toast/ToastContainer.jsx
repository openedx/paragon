import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ToastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.toastRootName = 'toast-root';
    if (typeof document === 'undefined') {
      this.rootElement = null;
    } else if (document.getElementById(this.toastRootName)) {
      this.rootElement = document.getElementById(this.toastRootName);
    } else {
      const rootElement = document.createElement('div');
      rootElement.setAttribute('id', this.toastRootName);
      rootElement.setAttribute('class', 'toast-container');
      rootElement.setAttribute('role', 'alert');
      rootElement.setAttribute('aria-live', 'polite');
      rootElement.setAttribute('aria-atomic', 'true');
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

ToastContainer.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
};

export default ToastContainer;
