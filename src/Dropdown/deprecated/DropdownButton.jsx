import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// eslint-disable-next-line import/no-cycle
import { Consumer } from './index';

function DropdownButton({ children, className, ...other }) {
  return (
    <Consumer>
      {({
        buttonRef,
        isOpen,
        toggle,
        triggerId,
      }) => (
        <button
          {...other}
          id={classNames(triggerId, other.id)}
          aria-expanded={isOpen}
          aria-haspopup
          type="button"
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
}

DropdownButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DropdownButton.defaultProps = {
  children: undefined,
  className: 'btn-light',
};

export default DropdownButton;
