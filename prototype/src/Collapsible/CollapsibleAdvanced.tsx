import React, {
  createContext, useContext, useImperativeHandle, useMemo, useRef,
} from 'react';
import { useDisclosure, type AriaButtonProps } from 'react-aria';
import { useDisclosureState } from 'react-stately';
import clsx from 'clsx';

import styles from './Collapsible.module.css';

/**
 * The value shared by `CollapsibleAdvanced` with its `Trigger`, `Body` and
 * `Visible` descendants. `triggerProps`/`panelProps`/`panelRef` are wired by
 * React Aria's `useDisclosure`; `open`/`close`/`toggle` are the imperative
 * escape hatches Paragon's API exposes.
 */
export interface CollapsibleContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  /**
   * Retained for API compatibility with `@openedx/paragon`. See the note on
   * `CollapsibleAdvancedProps.unmountOnExit`.
   */
  unmountOnExit: boolean;
  /** React Aria disclosure button props for the primary trigger. */
  triggerProps: AriaButtonProps & {
    id: string;
    'aria-expanded'?: boolean;
    'aria-controls'?: string;
  };
  /** React Aria disclosure panel props for the body. */
  panelProps: React.HTMLAttributes<HTMLElement>;
  /** Ref React Aria uses to drive the panel's expand/collapse animation. */
  panelRef: React.RefObject<HTMLDivElement | null>;
}

export const CollapsibleContext = createContext<CollapsibleContextValue | null>(null);

/** Reads the nearest `CollapsibleAdvanced` context or throws a helpful error. */
export function useCollapsibleContext(): CollapsibleContextValue {
  const ctx = useContext(CollapsibleContext);
  if (!ctx) {
    throw new Error('Collapsible.Trigger/Body/Visible must be used within a <Collapsible.Advanced>.');
  }
  return ctx;
}

export interface CollapsibleAdvancedProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onToggle'> {
  /** Specifies contents of the component. */
  children?: React.ReactNode;
  /** Specifies class name to append to the base element. */
  className?: string;
  /** Specifies whether the `Collapsible` should be initially open (uncontrolled). */
  defaultOpen?: boolean;
  /** Specifies whether the `Collapsible` is open (controlled). */
  open?: boolean;
  /** Callback fired when the `Collapsible`'s state is toggled. */
  onToggle?: (isOpen: boolean) => void;
  /** Callback fired when the `Collapsible` opens. */
  onOpen?: () => void;
  /** Callback fired when the `Collapsible` closes. */
  onClose?: () => void;
  /**
   * Retained for API compatibility. In this prototype the React Aria disclosure
   * keeps the panel in the DOM (as `hidden="until-found"`) rather than
   * unmounting it, so its content stays findable via browser find-in-page and
   * indexable — see the "migration decisions" note in the docs.
   */
  unmountOnExit?: boolean;
}

/**
 * Imperative handle exposed via `ref`. An **uncontrolled** `Collapsible` can be
 * opened or closed programmatically by calling these methods.
 */
export interface CollapsibleHandle {
  open: () => void;
  close: () => void;
  toggle: () => void;
  readonly isOpen: boolean;
}

/**
 * The low-level, fully-composable Collapsible. Owns the open/closed state and
 * the React Aria disclosure wiring, and shares them with `Collapsible.Trigger`,
 * `Collapsible.Body` and `Collapsible.Visible` via context.
 *
 * This is the prototype re-implementation of `@openedx/paragon`'s
 * `CollapsibleAdvanced`. The public API (`open`/`defaultOpen`, the
 * `onOpen`/`onClose`/`onToggle` callbacks, the imperative `open()`/`close()`
 * ref) is unchanged; internally the hand-rolled class-component state machine
 * becomes React Aria's `useDisclosureState` + `useDisclosure`, which also
 * supply correct `aria-expanded`/`aria-controls` linkage and the collapse
 * animation.
 */
export const CollapsibleAdvanced = React.forwardRef<CollapsibleHandle, CollapsibleAdvancedProps>((
  {
    children,
    className,
    defaultOpen = false,
    open,
    onToggle,
    onOpen,
    onClose,
    unmountOnExit = true,
    ...rest
  },
  ref,
) => {
  const state = useDisclosureState({
    isExpanded: open,
    defaultExpanded: defaultOpen,
    onExpandedChange: (isExpanded) => {
      onToggle?.(isExpanded);
      if (isExpanded) {
        onOpen?.();
      } else {
        onClose?.();
      }
    },
  });

  const panelRef = useRef<HTMLDivElement | null>(null);
  const { buttonProps, panelProps } = useDisclosure({}, state, panelRef);

  useImperativeHandle(ref, () => ({
    open: () => state.expand(),
    close: () => state.collapse(),
    toggle: () => state.toggle(),
    get isOpen() { return state.isExpanded; },
  }), [state]);

  const value = useMemo<CollapsibleContextValue>(() => ({
    isOpen: state.isExpanded,
    open: state.expand,
    close: state.collapse,
    toggle: state.toggle,
    unmountOnExit,
    triggerProps: buttonProps as CollapsibleContextValue['triggerProps'],
    panelProps,
    panelRef,
  }), [state, unmountOnExit, buttonProps, panelProps]);

  return (
    <div
      {...rest}
      className={clsx(styles.collapsible, className)}
      data-open={state.isExpanded || undefined}
    >
      <CollapsibleContext.Provider value={value}>
        {children}
      </CollapsibleContext.Provider>
    </div>
  );
});

CollapsibleAdvanced.displayName = 'CollapsibleAdvanced';

export default CollapsibleAdvanced;
