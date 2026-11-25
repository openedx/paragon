import React from 'react';
import classNames from 'classnames';
import BasePopover from 'react-bootstrap/Popover';
import BasePopoverTitle from 'react-bootstrap/PopoverTitle';
import BasePopoverContent from 'react-bootstrap/PopoverContent';
import { ArrowProps } from 'react-bootstrap/esm/Overlay';

type PlacementVariant = 'auto' | 'top' | 'bottom' | 'left' | 'right';

interface PopoverProps {
  /** An html id attribute, necessary for accessibility. */
  id: string;
  /**
   * Sets the direction the Popover is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the popover.
   */
  placement?: PlacementVariant;
  /**
   * When this prop is set, it creates a `Popover` with
   * a `Popover.Title` inside passing the children directly to it.
   */
  title?: string;
  /**
   * An `Overlay` injected set of props for positioning the popover arrow.
   *
   * This is generally provided by the `Overlay` component positioning the popover.
   */
  arrowProps?: ArrowProps;
  /**
   * When this prop is set, it creates a `Popover` with
   * a `Popover.Content` inside passing the children directly to it.
   */
  content?: boolean;
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popper?: Record<string, any>;
  /** Whether the `Overlay` is shown. */
  show?: boolean;
  /** Specifies the content of the `Overlay` */
  children?: React.ReactNode;
  /** Specifies class name to append to the base element */
  className?: string;
  /** The visual style of the `Overlay` */
  variant?: string;
  /** Specifies the base element */
  as?: React.ElementType;
  /** Overrides underlying component base CSS class name */
  bsPrefix?: string;
}

interface PopoverSubcomponentProps {
  /** Specifies the base element */
  as?: React.ElementType;
  /** Overrides underlying component base CSS class name */
  bsPrefix?: string;
  /** Specifies class name to append to the base element */
  className?: string;
  /** Specifies the content of the component */
  children?: React.ReactNode;
}

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(({
  children,
  variant,
  placement = 'right',
  title,
  arrowProps,
  content,
  popper,
  show,
  className,
  ...props
}, ref) => (
  <BasePopover
    {...props}
    placement={placement}
    title={title}
    arrowProps={arrowProps}
    content={content}
    popper={popper}
    show={show}
    className={classNames({ [`popover-${variant}`]: !!variant }, className)}
    ref={ref}
  >
    {children}
  </BasePopover>
));

function PopoverTitle({
  as = 'div',
  bsPrefix = 'popover-header',
  ...props
}: PopoverSubcomponentProps) {
  return <BasePopoverTitle as={as} bsPrefix={bsPrefix} {...props} />;
}

function PopoverContent({
  as = 'div',
  bsPrefix = 'popover-body',
  ...props
}: PopoverSubcomponentProps) {
  return <BasePopoverContent as={as} bsPrefix={bsPrefix} {...props} />;
}

Popover.displayName = 'Popover';
PopoverTitle.displayName = 'Popover.Title';
PopoverContent.displayName = 'Popover.Content';

// Create the compound component with proper typing
const PopoverWithSubcomponents = Object.assign(Popover, {
  Title: PopoverTitle,
  Content: PopoverContent,
}) as typeof Popover & {
  Title: typeof PopoverTitle;
  Content: typeof PopoverContent;
};

export { PopoverTitle, PopoverContent };
export default PopoverWithSubcomponents;
