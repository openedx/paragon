import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.rootName = 'paragon-portal-root';
    // istanbul ignore if
    if (typeof document === 'undefined') {
      this.rootElement = null;
    } else if (document.getElementById(this.rootName)) {
      this.rootElement = document.getElementById(this.rootName);
    } else {
      const rootElement = document.createElement('div');
      rootElement.setAttribute('id', this.rootName);
      this.rootElement = document.body.appendChild(rootElement);
    }
  }

  render() {
    // istanbul ignore else
    if (this.rootElement) {
      return ReactDOM.createPortal(
        this.props.children,
        this.rootElement,
      );
    }
    // istanbul ignore next
    return null;
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Portal;
