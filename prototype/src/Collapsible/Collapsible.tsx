import React from 'react';
import clsx from 'clsx';

import CollapsibleAdvanced, {
  CollapsibleContext,
  useCollapsibleContext,
  type CollapsibleAdvancedProps,
  type CollapsibleHandle,
} from './CollapsibleAdvanced';
import CollapsibleTrigger from './CollapsibleTrigger';
import CollapsibleBody from './CollapsibleBody';
import CollapsibleVisible from './CollapsibleVisible';
import styles from './Collapsible.module.css';

/** Style variant of the convenience `Collapsible`. */
export type CollapsibleStyling = 'basic' | 'card' | 'card-lg';

/** The default expand/collapse chevrons (Material "expand more/less"). */
const ExpandMore = () => (
  <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </svg>
);
const ExpandLess = () => (
  <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
  </svg>
);

export interface CollapsibleProps
  extends Omit<CollapsibleAdvancedProps, 'children' | 'title'> {
  /** Specifies contents of the component. */
  children: React.ReactNode;
  /** Specifies the title shown in the trigger. */
  title: React.ReactNode;
  /** Specifies the style variant (default: `card`). */
  styling?: CollapsibleStyling;
  /** Icon shown when the `Collapsible` is closed. */
  iconWhenClosed?: React.ReactNode;
  /** Icon shown when the `Collapsible` is open. */
  iconWhenOpen?: React.ReactNode;
}

export interface CollapsibleComponent
  extends React.ForwardRefExoticComponent<
  CollapsibleProps & React.RefAttributes<CollapsibleHandle>
  > {
  Advanced: typeof CollapsibleAdvanced;
  Body: typeof CollapsibleBody;
  Trigger: typeof CollapsibleTrigger;
  Visible: typeof CollapsibleVisible;
  Context: typeof CollapsibleContext;
}

/**
 * A ready-styled Collapsible: pass a `title` and children, pick a `styling`
 * (`basic`, `card`, or `card-lg`), and it wires up the trigger, chevron icons,
 * and animated body for you. For layouts that deviate from these presets, drop
 * to `Collapsible.Advanced` and compose `Trigger` / `Body` / `Visible` yourself.
 *
 * This is the prototype re-implementation of `@openedx/paragon`'s `Collapsible`;
 * the public prop API (`title`, `styling`, `iconWhenOpen`/`iconWhenClosed`,
 * `defaultOpen`, the callbacks, and the imperative ref) is unchanged.
 */
export const Collapsible = React.forwardRef<CollapsibleHandle, CollapsibleProps>((
  {
    children,
    className,
    title,
    styling = 'card',
    iconWhenClosed,
    iconWhenOpen,
    ...other
  },
  ref,
) => {
  const closedIcon = iconWhenClosed ?? <ExpandMore />;
  const openIcon = iconWhenOpen ?? <ExpandLess />;
  const titleElement = React.isValidElement(title) ? title : <span>{title}</span>;

  const stylingClass = styling === 'basic'
    ? styles.basic
    : clsx(styles.card, styling === 'card-lg' && styles.cardLg);

  return (
    <CollapsibleAdvanced {...other} ref={ref} className={clsx(stylingClass, className)}>
      <CollapsibleTrigger className={styles.trigger}>
        {titleElement}
        <span className={styles.icon}>
          <CollapsibleVisible whenClosed>{closedIcon}</CollapsibleVisible>
          <CollapsibleVisible whenOpen>{openIcon}</CollapsibleVisible>
        </span>
      </CollapsibleTrigger>

      <CollapsibleBody className={styles.body}>{children}</CollapsibleBody>
    </CollapsibleAdvanced>
  );
}) as CollapsibleComponent;

Collapsible.displayName = 'Collapsible';

Collapsible.Advanced = CollapsibleAdvanced;
Collapsible.Body = CollapsibleBody;
Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Visible = CollapsibleVisible;
Collapsible.Context = CollapsibleContext;

export { useCollapsibleContext };

export default Collapsible;
