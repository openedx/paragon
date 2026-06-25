import React from 'react';
import BaseOverlay, { type OverlayProps, type OverlayChildren, type Placement } from 'react-bootstrap/Overlay';
import BaseOverlayTrigger, { type OverlayTriggerProps, type OverlayTriggerType } from 'react-bootstrap/OverlayTrigger';
import Fade from 'react-bootstrap/Fade';

// Note: The only thing this file adds to the base components is default prop values.
// As more Paragon consumers adopt TypeScript, we could consider removing almost all of this code
// and just re-export the Overlay and OverlayTrigger components from react-bootstrap unmodified.

export interface ParagonOverlayProps extends OverlayProps {
  /** Specifies the content of the `Overlay`. */
  children: OverlayChildren;
  /**
   * A component instance, DOM node, or function that returns either.
   * The overlay will be positioned in relation to the target.
   */
  container?: OverlayProps['container'];
  /** Callback fired before the `Overlay` transitions in. */
  onEnter?: (node: HTMLElement, isAppearing: boolean) => any;
  /** Callback fired after the `Overlay` finishes transitioning in. */
  onEntered?: (node: HTMLElement, isAppearing: boolean) => any;
  /** Callback fired as the `Overlay` begins to transition in. */
  onEntering?: (node: HTMLElement, isAppearing: boolean) => any;
  /** Callback fired right before the `Overlay` transitions out. */
  onExit?: (node: HTMLElement) => any;
  /** Callback fired after the `Overlay` finishes transitioning out. */
  onExited?: (node: HTMLElement) => any;
  /** Callback fired as the Overlay begins to transition out. */
  onExiting?: (node: HTMLElement) => any;
  /**
   * A callback invoked by the overlay when it wishes to be hidden.
   * Required if `rootClose` is specified.
   */
  onHide?: (e: Event) => void;
  /**
   * The placement of the `Overlay` in relation to its target.
   *
   * Valid values are: `auto`, `auto-start`, `auto-end`, `top`, `bottom`, `right`, `left`,
   * `top-start`, `top-end`, `bottom-start`, `bottom-end`, `right-start`, `right-end`, `left-start`, `left-end`.
   */
  placement?: Placement;
  /** A set of popper options and props passed directly to `Popper`. */
  popperConfig?: OverlayProps['popperConfig'];
  /** Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay. */
  rootClose?: boolean;
  /** Specify event for triggering a "root close" toggle. */
  rootCloseEvent?: OverlayProps['rootCloseEvent'];
  /** Set the visibility of the `Overlay`. */
  show?: boolean;
  /** The target element the `Overlay` is positioned in relation to. */
  target: OverlayProps['target'];
  /**
   * Animate the entering and exiting of the Overlay. `true` will use the `<Fade>` transition,
   * or a custom react-transition-group `<Transition>` component can be provided.
   */
  transition?: OverlayProps['transition'];
}

export interface ParagonOverlayTriggerProps extends OverlayTriggerProps {
  /** Specifies the content of the `OverlayTrigger`. */
  children: OverlayTriggerProps['children'];
  /** An element or text to overlay next to the target. */
  overlay: OverlayTriggerProps['overlay'];
  /** The initial visibility state of the `Overlay`. */
  defaultShow?: boolean;
  /** A millisecond delay amount to show and hide the `Overlay` once triggered. */
  delay?: OverlayTriggerProps['delay'];
  /** The initial flip state of the `Overlay`. */
  flip?: boolean;
  /** Callback fired when the visibility of the overlay changes. */
  onHide?: OverlayTriggerProps['onHide'];
  /**
   * A callback that fires when the user triggers a change in tooltip visibility.
   * `onToggle` is called with the desired next show, and generally should be
   * passed back to the `show` prop. `onToggle` fires after the configured `delay`.
   */
  onToggle?: OverlayTriggerProps['onToggle'];
  /** The placement of the `Overlay` in relation to its target. */
  placement?: Placement;
  /** A `Popper.js` config object passed to the underlying popper instance. */
  popperConfig?: OverlayTriggerProps['popperConfig'];
  /**
   * The visibility of the `Overlay`. `show` is a controlled prop so should be
   * paired with `onToggle` to avoid breaking user interactions.
   */
  show?: boolean;
  /** The target element the `Overlay` is positioned in relation to. */
  target?: OverlayTriggerProps['target'];
  /** Specify which action or actions trigger `Overlay` visibility. */
  trigger?: OverlayTriggerType | OverlayTriggerType[];
}

function Overlay({
  placement = 'top',
  popperConfig = {},
  rootClose = false,
  show = false,
  transition = Fade,
  ...props
}: ParagonOverlayProps) {
  return (
    <BaseOverlay
      placement={placement}
      popperConfig={popperConfig}
      rootClose={rootClose}
      show={show}
      transition={transition}
      {...props}
    />
  );
}

function OverlayTrigger({
  defaultShow = false,
  popperConfig = {},
  trigger = ['hover', 'focus'],
  ...props
}: ParagonOverlayTriggerProps) {
  return (
    <BaseOverlayTrigger
      defaultShow={defaultShow}
      popperConfig={popperConfig}
      trigger={trigger}
      {...props}
    >
      {props.children}
    </BaseOverlayTrigger>
  );
}

export { OverlayTrigger };
export default Overlay;
