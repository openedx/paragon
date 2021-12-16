import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger, Tooltip } from '..';

const IconButton = ({
  alt,
  invertColors,
  icon,
  src,
  iconClassNames,
  onClick,
  size,
  variant,
  iconAs: IconComponent,
  isActive,
  ...attrs
}) => {
  const invert = invertColors ? 'inverse-' : '';
  const activeStyle = isActive ? `${variant}-` : '';
  return (
    <button
      {...attrs}
      aria-label={alt}
      className={classNames(
        'btn-icon',
        `btn-icon-${invert}${variant}`,
        `btn-icon-${size}`,
        isActive ? `btn-icon-${invert}${activeStyle}active` : '',
        attrs.className,
      )}
      onClick={onClick}
      type="button"
    >
      <span className="btn-icon__icon-container">
        <IconComponent
          className={`btn-icon__icon ${iconClassNames}`}
          icon={icon}
          src={src}
        />
      </span>
    </button>
  );
};

IconButton.defaultProps = {
  iconAs: FontAwesomeIcon,
  src: null,
  icon: {},
  iconClassNames: '',
  invertColors: false,
  variant: 'primary',
  size: 'md',
  onClick: () => {},
  isActive: false,
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
  }),
  /** Extra class names that will be added to the icon */
  iconClassNames: PropTypes.string,
  /** Click handler for the button */
  onClick: PropTypes.func,
  /** Type of button (uses Bootstrap options) */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'dark', 'black']),
  size: PropTypes.oneOf(['sm', 'md', 'inline']),
  isActive: PropTypes.bool,
};

/**
 *
 * @param { object } args Arguments
 * @param { string } args.placement choose from https://popper.js.org/docs/v2/constructors/#options
 * @param { React.Component } args.tooltipContent any content to pass to tooltip content area
 * @returns { IconButton } a button wrapped in overlaytrigger
 */
const WithTooltip = ({
  placement, tooltipContent, variant, invertColors, ...props
}) => {
  const invert = invertColors ? 'inverse-' : '';
  return (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={(
        <Tooltip
          id={`iconbutton-tooltip-${placement}`}
          variant={invert ? 'light' : ''}
        >
          {tooltipContent}
        </Tooltip>
      )}
    >
      <IconButton variant={variant} invertColors={invertColors} {...props} />
    </OverlayTrigger>
  );
};

WithTooltip.defaultProps = {
  placement: 'top',
  variant: 'primary',
  invertColors: false,
};

WithTooltip.propTypes = {
  placement: PropTypes.string,
  tooltipContent: PropTypes.node.isRequired,
  /** Type of button (uses Bootstrap options) */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'dark', 'black']),
  /** Changes icon styles for dark background */
  invertColors: PropTypes.bool,
};

IconButton.WithTooltip = WithTooltip;

export default IconButton;
