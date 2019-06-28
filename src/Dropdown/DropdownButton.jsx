import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Consumer } from './index';

const DropdownButton = ({ children, className, ...other }) =>
  (
    <Consumer>
      {({
        toggle,
        buttonRef,
        triggerId,
        ariaExpanded,
        ariaHasPopup,
      }) => (
        <button
          {...other}
          id={triggerId}
          aria-expanded={ariaExpanded}
          aria-haspopup={ariaHasPopup}
          ref={buttonRef}
          className={classNames(
            'dropdown-toggle',
            'btn',
            className,
          )}
          onClick={toggle}
        >
          {children}
        </button>
      )}
    </Consumer>
  );

DropdownButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DropdownButton.defaultProps = {
  children: undefined,
  className: 'btn-light',
};

export default DropdownButton;
