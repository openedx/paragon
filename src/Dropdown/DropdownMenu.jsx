import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Consumer } from './index';

const DropdownMenu = ({ children, ...other }) =>
  (
    <Consumer>
      {({
        className,
        handleMenuKeyDown,
        menuRef,
        ariaLabelledBy,
        ariaHidden,
      }) => (
        /* eslint-disable-next-line jsx-a11y/interactive-supports-focus */
        <div
          {...other}
          aria-labelledby={ariaLabelledBy}
          aria-hidden={ariaHidden}
          ref={menuRef}
          className={classNames(
            'dropdown-menu',
            className,
          )}
          role="menu"
          onKeyDown={handleMenuKeyDown}
        >
          {children}
        </div>
      )}
    </Consumer>
  );

DropdownMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DropdownMenu.defaultProps = {
  children: undefined,
  className: null,
};

export default DropdownMenu;
