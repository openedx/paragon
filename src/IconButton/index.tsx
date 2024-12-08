import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type Placement } from 'react-bootstrap/Overlay';

import { OverlayTrigger } from '../Overlay';
import Tooltip from '../Tooltip';
import Icon from '../Icon';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  iconAs?: typeof Icon | typeof FontAwesomeIcon,
  /** Additional CSS class[es] to apply to this button */
  className?: string;
  /** Alt text for your icon. For best practice, avoid using alt text to describe
   * the image in the `IconButton`. Instead, we recommend describing the function
   * of the button. */
  alt: string;
  /** Changes icon styles for dark background */
  invertColors?: boolean;
  /** An icon component to render. Example import of a Paragon icon component:
   * `import { Check } from '@openedx/paragon/icons';`
   * */
  // Note: React.ComponentType is what we want here. React.ElementType would allow some element type strings like "div",
  // but we only want to allow components like 'Add' (a specific icon component function/class)
  src?: React.ComponentType;
  /** Extra class names that will be added to the icon */
  iconClassNames?: string;
  /** Click handler for the button */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** whether to show the `IconButton` in an active state, whose styling is distinct from default state */
  isActive?: boolean;
  /** @deprecated Using FontAwesome icons is deprecated. Instead, pass iconAs={Icon} src={...} */
  icon?: { prefix?: string; iconName?: string, icon?: any[] },
  /** Type of button (uses Bootstrap options) */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'black' | 'brand';
  /** size of button to render */
  size?: 'sm' | 'md' | 'inline';
  /** Used with `IconButtonToggle` */
  value?: string;
  /** no children */
  children?: never;
}

const IconButton = React.forwardRef<HTMLButtonElement, Props>(({
  className,
  alt,
  invertColors,
  icon,
  src,
  iconClassNames,
  onClick,
  size,
  variant,
  iconAs,
  isActive,
  children, // unused, just here because we don't want it to be part of 'attrs'
  ...attrs
}, ref) => {
  const invert = invertColors ? 'inverse-' : '';
  const activeStyle = isActive ? `${variant}-` : '';
  if (!iconAs && process.env.NODE_ENV === 'development' && console) {
    const msg = '[Deprecated] IconButton: you have not provided a value for iconAs prop and '
      + 'are using a default one - FontAwesomeIcon, the default value is going to be changed soon '
      + 'as Paragon is moving away from FontAwesome, please use Paragon\'s icons instead.';
    // eslint-disable-next-line no-console
    console.warn(msg);
  }
  const IconComponent = iconAs || FontAwesomeIcon;
  return (
    <button
      aria-label={alt}
      className={classNames(
        'btn-icon',
        `btn-icon-${invert}${variant}`,
        `btn-icon-${size}`,
        {
          [`btn-icon-${invert}${activeStyle}active`]: isActive,
        },
        className,
      )}
      onClick={onClick}
      type="button"
      ref={ref}
      {...attrs}
    >
      <span className="btn-icon__icon-container">
        <IconComponent
          className={classNames('btn-icon__icon', iconClassNames)}
          icon={icon as any}
          src={src}
        />
      </span>
    </button>
  );
});

IconButton.defaultProps = {
  iconAs: undefined,
  src: undefined,
  icon: undefined,
  iconClassNames: undefined,
  className: undefined,
  invertColors: false,
  variant: 'primary',
  size: 'md',
  onClick: () => {},
  isActive: false,
  value: undefined,
  children: undefined,
};

IconButton.propTypes = {
  /** A custom class name. */
  className: PropTypes.string,
  /** Component that renders the icon, currently defaults to `FontAwesomeIcon`,
   *  but is going to be deprecated soon, please use Paragon's icons instead. */
  iconAs: PropTypes.elementType as any,
  /** An icon component to render. Example import of a Paragon icon component:
   * `import { Check } from '@openedx/paragon/icons';`
   * */
  src: PropTypes.elementType as any,
  /** Alt text for your icon. For best practice, avoid using alt text to describe
   * the image in the `IconButton`. Instead, we recommend describing the function
   * of the button. */
  alt: PropTypes.string.isRequired,
  /** Changes icon styles for dark background */
  invertColors: PropTypes.bool,
  /** Accepts a React fontawesome icon. */
  icon: PropTypes.shape({
    prefix: PropTypes.string,
    iconName: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    icon: PropTypes.array,
  }) as any,
  /** Extra class names that will be added to the icon */
  iconClassNames: PropTypes.string,
  /** Click handler for the button */
  onClick: PropTypes.func,
  /** Type of button (uses Bootstrap options) */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'dark', 'black', 'brand']),
  /** size of button to render */
  size: PropTypes.oneOf(['sm', 'md', 'inline']),
  /** whether to show the `IconButton` in an active state, whose styling is distinct from default state */
  isActive: PropTypes.bool,
  /** Used with <IconButtonToggle> */
  value: PropTypes.string,
};

interface PropsWithTooltip extends Props {
  /** choose from https://popper.js.org/docs/v2/constructors/#options */
  tooltipPlacement: Placement,
  /** any content to pass to tooltip content area */
  tooltipContent: React.ReactNode,
}

/**
 * An icon button wrapped in overlaytrigger to display a tooltip.
 */
function IconButtonWithTooltip({
  tooltipPlacement, tooltipContent, ...props
}: PropsWithTooltip) {
  const invert = props.invertColors ? 'inverse-' : '';
  return (
    <OverlayTrigger
      placement={tooltipPlacement}
      overlay={(
        <Tooltip
          id={`iconbutton-tooltip-${tooltipPlacement}`}
          variant={invert ? 'light' : undefined}
        >
          {tooltipContent}
        </Tooltip>
      )}
    >
      <IconButton {...props} />
    </OverlayTrigger>
  );
}

IconButtonWithTooltip.defaultProps = {
  ...IconButton.defaultProps,
  tooltipPlacement: 'top',
};

IconButtonWithTooltip.propTypes = {
  /** tooltip placement can be top, left, right etc, per https://popper.js.org/docs/v2/constructors/#options  */
  tooltipPlacement: PropTypes.string,
  /** any valid JSX or text to be rendered as tooltip contents */
  tooltipContent: PropTypes.node.isRequired,
  /** Type of button (uses Bootstrap options) */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'dark', 'black', 'brand']),
  /** Changes icon styles for dark background */
  invertColors: PropTypes.bool,
};

(IconButton as any).IconButtonWithTooltip = IconButtonWithTooltip;

export default IconButton as typeof IconButton & {
  IconButtonWithTooltip: typeof IconButtonWithTooltip,
};
export { IconButtonWithTooltip };
