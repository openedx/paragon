import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButton = ({
  alt,
  invertColors,
  icon,
  iconClassNames,
  onClick,
  variant,
}) => {
  const invertedHoverClass = invertColors ? `iconbutton-hover__${variant}--invert` : '';
  const invertedIconClass = invertColors ? `iconbutton__${variant}--invert` : '';

  return (
    <div className="iconbutton-refwrapper">
      <button
        aria-label={alt}
        className={`iconbutton-hover ${invertedHoverClass} iconbutton-hover__${variant}`}
        onClick={onClick}
        type="button"
      >
        <FontAwesomeIcon
          className={`iconbutton iconbutton__${variant} ${invertedIconClass} ${iconClassNames}`}
          icon={icon}
          alt={alt}
        />
      </button>
    </div>
  );
};

IconButton.defaultProps = {
  iconClassNames: '',
  invertColors: false,
  variant: 'primary',
};

IconButton.propTypes = {
  /** Alt text for your icon. For best practice, avoid using alt text to describe
   * the image in the IconButton. Instead, we recommend describing the function
   * of the button. */
  alt: PropTypes.string.isRequired,
  /** Changes icon styles for dark background */
  invertColors: PropTypes.bool,
  /** Accepts a React fontawesome icon. https://fontawesome.com/how-to-use/on-the-web/using-with/react */
  icon: PropTypes.shape({
    prefix: PropTypes.string,
    iconName: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    icon: PropTypes.array,
  }).isRequired,
  /** Extra class names that will be added to the icon */
  iconClassNames: PropTypes.string,
  /** Click handler for the button */
  onClick: PropTypes.func.isRequired,
  /** Type of button (uses Bootstrap options) */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'dark']),
};

export default IconButton;
