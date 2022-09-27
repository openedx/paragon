import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// eslint-disable-next-line import/no-cycle
import { Consumer } from './index';

function DropdownMenu({ children, ...other }) {
  return (
    <Consumer>
      {({
        handleMenuKeyDown,
        isOpen,
        menuRef,
        triggerId,
      }) => (
      /* eslint-disable-next-line jsx-a11y/interactive-supports-focus */
        <div
          {...other}
          aria-labelledby={triggerId}
          aria-hidden={!isOpen}
          ref={menuRef}
          role="menu"
          className={classNames(
            'dropdown-menu',
            { show: isOpen },
            other.className,
          )}
          onKeyDown={(e) => {
            handleMenuKeyDown(e);
            if (other.onKeyDown) {
              other.onKeyDown(e);
            }
          }}
        >
          {children}
        </div>
      )}
    </Consumer>
  );
}

DropdownMenu.propTypes = {
  children: PropTypes.node,
};

DropdownMenu.defaultProps = {
  children: undefined,
};

export default DropdownMenu;
