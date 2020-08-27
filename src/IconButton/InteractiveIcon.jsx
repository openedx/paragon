import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InteractiveIcon = ({
  alt,
  invertColors,
  icon,
  iconClassNames,
  onClick,
  variant,
}) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 32) {
    // prevents scrolling when Space is pressed
      e.preventDefault();
      onClick();
    }
  };
  // if there is a click handler, the icon will act as a button
  const buttonProps = onClick ? {
    role: 'button',
    onClick,
    onKeyDown: handleKeyDown,
  } : {};

  const darkHoverClass = invertColors ? `iconbutton-hover__${variant}--dark` : '';
  const darkIconClass = invertColors ? `iconbutton__${variant}--dark` : '';

  return (
    <div
      className={`iconbutton-hover ${darkHoverClass} iconbutton-hover__${variant}`}
      {...buttonProps}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      <FontAwesomeIcon
        className={`iconbutton iconbutton__${variant} ${darkIconClass} ${iconClassNames}`}
        icon={icon}
        alt={alt}
      />
    </div>
  );
};

InteractiveIcon.defaultProps = {
  iconClassNames: '',
  onClick: undefined,
  invertColors: false,
  variant: 'primary',
};

InteractiveIcon.propTypes = {
  /** Alt text for your icon  */
  alt: PropTypes.string.isRequired,
  /** If true, adjusts colors for a dark background */
  invertColors: PropTypes.bool,
  /** Accepts a React fontawesome icon. */
  icon: PropTypes.shape({}).isRequired,
  /** Extra class names that will be added to the icon */
  iconClassNames: PropTypes.string,
  /** Function executed on click */
  onClick: PropTypes.func,
  /** Type of button (uses Bootstrap options) */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
};

export default InteractiveIcon;
