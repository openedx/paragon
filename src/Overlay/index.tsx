import React from 'react';
import BaseOverlay, { type OverlayProps, type Placement } from 'react-bootstrap/Overlay';
import BaseOverlayTrigger, { type OverlayTriggerProps, type OverlayTriggerType } from 'react-bootstrap/OverlayTrigger';
import Fade from 'react-bootstrap/Fade';
import PropTypes from 'prop-types';

// Note: The only thing this file adds to the base component is propTypes validation.
// As more Paragon consumers adopt TypeScript, we could consider removing almost all of this code
// and just re-export the Overlay and OverlayTrigger components from react-bootstrap unmodified.

const PLACEMENT_VARIANTS: Placement[] = [
  'auto-start',
  'auto',
  'auto-end',
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-end',
  'bottom',
  'bottom-start',
  'left-end',
  'left',
  'left-start',
];

const TRIGGER_VARIANTS: OverlayTriggerType[] = [
  'hover',
  'click',
  'focus',
];

function Overlay(props: OverlayProps) {
  return <BaseOverlay {...props} />;
}
function OverlayTrigger(props: OverlayTriggerProps) {
  return (
    <BaseOverlayTrigger {...props}>
      {props.children}
    </BaseOverlayTrigger>
  );
}

const triggerType = PropTypes.oneOf(TRIGGER_VARIANTS);

Overlay.propTypes = {
  /** Specifies the content of the `Overlay`. */
  children: PropTypes.node.isRequired,
  /**
   * A component instance, DOM node, or function that returns either.
   * The overlay will be positioned in relation to the target.
   */
  container: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func]),
  /** Callback fired before the `Overlay` transitions in. */
  onEnter: PropTypes.func,
  /** Callback fired after the `Overlay` finishes transitioning in. */
  onEntered: PropTypes.func,
  /** Callback fired as the `Overlay` begins to transition in. */
  onEntering: PropTypes.func,
  /** Callback fired right before the `Overlay` transitions out */
  onExit: PropTypes.func,
  /** Callback fired after the `Overlay` finishes transitioning out. */
  onExited: PropTypes.func,
  /** Callback fired as the Overlay begins to transition out. */
  onExiting: PropTypes.func,
  /**
   * A callback invoked by the overlay when it wishes to be hidden.
   * Required if `rootClose` is specified.
   */
  onHide: PropTypes.func,
  /** The placement of the `Overlay` in relation to it's target. */
  placement: PropTypes.oneOf(PLACEMENT_VARIANTS),
  /** A set of popper options and props passed directly to `Popper`. */
  popperConfig: PropTypes.shape({}),
  /** Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay. */
  rootClose: PropTypes.bool,
  /** Specify event for triggering a “root close” toggle. */
  rootCloseEvent: PropTypes.oneOf(['click', 'mousedown']),
  /** Set the visibility of the `Overlay`. */
  show: PropTypes.bool,
  /**
   * The visibility of the `Overlay`. `show` is a controlled prop so should
   * be paired with `onToggle` to avoid breaking user interactions.
   *
   * Manually toggling show does not wait for delay to change the visibility.
   *
   * Controls `onToggle`.
   */
  target: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func]),
  /**
   * Animate the entering and exiting of the Overlay. `true` will use the `<Fade>` transition,
   * or a custom react-transition-group `<Transition>` component can be provided.
   */
  transition: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

OverlayTrigger.propTypes = {
  /** Specifies the content of the `OverlayTrigger`. */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  /** An element or text to overlay next to the target. */
  overlay: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  /** The initial visibility state of the `Overlay`. */
  defaultShow: PropTypes.bool,
  /** A millisecond delay amount to show and hide the `Overlay` once triggered. */
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({})]),
  /** The initial flip state of the `Overlay`. */
  flip: PropTypes.bool,
  onHide: PropTypes.func,
  /**
   * A callback that fires when the user triggers a change in tooltip visibility.
   * `onToggle` is called with the desired next show, and generally should be
   * passed back to the `show` prop. `onToggle` fires after the configured `delay`.
   *
   * Controls `show`.
   */
  onToggle: PropTypes.func,
  /** The placement of the `Overlay` in relation to it's target. */
  placement: PropTypes.oneOf(PLACEMENT_VARIANTS),
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popperConfig: PropTypes.shape({}),
  /**
   * The visibility of the `Overlay`. `show` is a controlled prop so should
   * be paired with `onToggle` to avoid breaking user interactions.
   *
   * Manually toggling show does not wait for delay to change the visibility.
   *
   * Controls `onToggle`.
   */
  show: PropTypes.bool,
  target: PropTypes.instanceOf(EventTarget),
  /** Specify which action or actions trigger `Overlay` visibility. */
  trigger: PropTypes.oneOfType([triggerType, PropTypes.arrayOf(triggerType)]),
};

Overlay.defaultProps = {
  container: undefined,
  onEnter: undefined,
  onEntered: undefined,
  onEntering: undefined,
  onExit: undefined,
  onExited: undefined,
  onExiting: undefined,
  onHide: undefined,
  placement: 'top',
  popperConfig: {},
  rootClose: false,
  rootCloseEvent: undefined,
  show: false,
  target: undefined,
  transition: Fade,
};

OverlayTrigger.defaultProps = {
  defaultShow: false,
  delay: undefined,
  flip: undefined,
  onHide: undefined,
  onToggle: undefined,
  placement: undefined,
  popperConfig: {},
  show: undefined,
  target: undefined,
  trigger: ['hover', 'focus'],
};

export { OverlayTrigger };
export default Overlay;
