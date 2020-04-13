import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Consumer } from './index';

const DropdownButton = ({ children, className, ...other }) => (
  <Consumer>
    {({
      buttonRef,
      isOpen,
      toggle,
      triggerId,
    }) => (
      // eslint-disable-next-line react/button-has-type
      <button
        {...other}
        id={classNames(triggerId, other.id)}
        aria-expanded={isOpen}
        aria-haspopup
        ref={buttonRef}
        className={classNames(
          'dropdown-toggle',
          'btn',
          className,
        )}
        onClick={(e) => {
          toggle(e);
          if (other.onClick) {
            other.onClick(e);
          }
        }}
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
