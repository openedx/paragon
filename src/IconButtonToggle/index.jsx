import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {object} args arguments
 * @param {boolean} args.activeValue the current value of the active/selected iconButton.
 *                                   if not provided, none of the iconButtons will initially be active
 * @param {Function} args.onChange callback to call when toggle value changes.
 *                                 Receives value of the selected toggle button.
 * @param {Array<IconButton>} args.children children components expected to be IconButton
 * @returns {React.Component} A React component
 */
function IconButtonToggle({ activeValue, onChange, children }) {
  const iconButtons = useMemo(
    () => React.Children.map(children, iconButton => {
      const isActive = iconButton.props.value === activeValue;
      return React.cloneElement(iconButton, {
        onClick: () => { onChange(iconButton.props.value); },
        isActive,
        'aria-selected': isActive,
        'data-testid': `icon-btn-val-${iconButton.props.value}`,
      });
    }),
    [children, activeValue, onChange],
  );
  return <div className="pgn__icon-button-toggle__container">{iconButtons}</div>;
}

IconButtonToggle.defaultProps = {
  onChange: () => {},
  activeValue: undefined,
};

IconButtonToggle.propTypes = {
  /** value to use to check which button to set to active */
  activeValue: PropTypes.string,
  /** handler that is passed the currently active button's value when a button is selected */
  onChange: PropTypes.func,
  /** child nodes of type `IconButton` (or its subcomponents) to be rendered within toggle group */
  children: PropTypes.node.isRequired,
};

export default IconButtonToggle;
