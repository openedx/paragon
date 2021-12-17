import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger, Tooltip } from '..';

const IconButton = React.forwardRef(({
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
}, ref) => {
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
        {
          [`btn-icon-${invert}${activeStyle}active`]: isActive,
        },
        attrs.className,
      )}
      onClick={onClick}
      type="button"
      ref={ref}
    >
      <span className="btn-icon__icon-container">
        <IconComponent
          {...attrs}
          className={`btn-icon__icon ${iconClassNames}`}
          icon={icon}
          src={src}
        />
      </span>
    </button>
  );
});

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
  /** size of button to render */
  size: PropTypes.oneOf(['sm', 'md', 'inline']),
  /** whether to show the IconButton in an active state, whose styling is distinct from default state */
  isActive: PropTypes.bool,
};

/**
 *
 * @param { object } args Arguments
 * @param { string } args.tooltipPlacement choose from https://popper.js.org/docs/v2/constructors/#options
 * @param { React.Component } args.tooltipContent any content to pass to tooltip content area
 * @returns { IconButton } a button wrapped in overlaytrigger
 */
const WithTooltip = ({
  tooltipPlacement, tooltipContent, variant, invertColors, ...props
}) => {
  const invert = invertColors ? 'inverse-' : '';
  return (
    <OverlayTrigger
      key={tooltipPlacement}
      placement={tooltipPlacement}
      overlay={(
        <Tooltip
          id={`iconbutton-tooltip-${tooltipPlacement}`}
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
  tooltipPlacement: 'top',
  variant: 'primary',
  invertColors: false,
};

WithTooltip.propTypes = {
  /** tooltip placement can be top, left, right etc, per https://popper.js.org/docs/v2/constructors/#options  */
  tooltipPlacement: PropTypes.string,
  /** any valid JSX or text to be rendered as tooltip contents */
  tooltipContent: PropTypes.node.isRequired,
  /** Type of button (uses Bootstrap options) */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'dark', 'black']),
  /** Changes icon styles for dark background */
  invertColors: PropTypes.bool,
};

IconButton.WithTooltip = WithTooltip;

export default IconButton;
