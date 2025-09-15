import React from 'react';
import classNames from 'classnames';
import { type Placement } from 'react-bootstrap/Overlay';
import { OverlayTrigger } from '../Overlay';
import Tooltip from '../Tooltip';
import Icon from '../Icon';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  /** Component that renders the icon, currently defaults to `Icon` */
  iconAs?: React.ComponentType<any>,
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
  /** no children */
  children?: never;
}

const IconButton = React.forwardRef(({
  className,
  alt,
  invertColors = false,
  icon,
  src,
  iconClassNames,
  onClick = () => {},
  size = 'md',
  variant = 'primary',
  iconAs = Icon,
  isActive = false,
  children, // unused, just here because we don't want it to be part of 'attrs'
  ...attrs
} : Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const invert = invertColors ? 'inverse-' : '';
  const activeStyle = isActive ? `${variant}-` : '';
  const IconComponent = iconAs;

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
        {IconComponent && (
          <IconComponent
            className={classNames('btn-icon__icon', iconClassNames)}
            icon={icon as any}
            src={src}
          />
        )}
      </span>
    </button>
  );
});

interface PropsWithTooltip extends Props {
  /** tooltip placement can be top, left, right etc, choose from https://popper.js.org/docs/v2/constructors/#options */
  tooltipPlacement?: Placement,
  /** any content to pass to tooltip content area */
  tooltipContent: React.ReactNode,
}

/**
 * An icon button wrapped in overlaytrigger to display a tooltip.
 */
function IconButtonWithTooltip({
  tooltipPlacement = 'top', tooltipContent, ...props
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

(IconButton as any).IconButtonWithTooltip = IconButtonWithTooltip;

export default IconButton as typeof IconButton & {
  IconButtonWithTooltip: typeof IconButtonWithTooltip,
};
export { IconButtonWithTooltip };
