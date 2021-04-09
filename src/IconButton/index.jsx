import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButton = ({
  alt,
  invertColors,
  icon,
  src,
  iconClassNames,
  onClick,
  variant,
  iconAs: IconComponent,
  ...attrs
}) => {
  const invertedHoverClass = invertColors ? `iconbutton-hover__${variant}--invert` : '';
  const invertedIconClass = invertColors ? `iconbutton__${variant}--invert` : '';

  return (
    <button
      {...attrs}
      aria-label={alt}
      className={classNames(
        'iconbutton-hover',
        invertedHoverClass,
        `iconbutton-hover__${variant}`,
        attrs.className,
      )}
      onClick={onClick}
      type="button"
    >
      <IconComponent
        className={`iconbutton iconbutton__${variant} ${invertedIconClass} ${iconClassNames}`}
        icon={icon}
        alt={alt}
        src={src}
      />
    </button>
  );
};

IconButton.defaultProps = {
  iconAs: FontAwesomeIcon,
  src: null,
  iconClassNames: '',
  invertColors: false,
  variant: 'primary',
};

IconButton.propTypes = {
  iconAs: PropTypes.elementType,
  /** An icon component to render. Example import of a Paragon icon component:
   * `import { Check } from '@edx/paragon/dist/icon';`
   * */
  src: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
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
