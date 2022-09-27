import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useArrowKeyNavigation from '../hooks/useArrowKeyNavigation';

function Menu({
  as,
  arrowKeyNavigationSelector,
  children,
  ...props
}) {
  const parentRef = useArrowKeyNavigation({ selectors: arrowKeyNavigationSelector });
  const className = classNames(props.className, 'pgn__menu');

  return React.createElement(
    as,
    {
      ...props,
      ref: parentRef,
      className,
    },
    (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {children}
      </>
    ),
  );
}

Menu.propTypes = {
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
   */
  arrowKeyNavigationSelector: PropTypes.string,
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Specifies the content of the menu */
  children: PropTypes.node,
};

Menu.defaultProps = {
  className: undefined,
  arrowKeyNavigationSelector: 'a:not(:disabled),button:not(:disabled),input:not(:disabled)',
  as: 'div',
  children: null,
};

export default Menu;
