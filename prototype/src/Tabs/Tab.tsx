import React from 'react';
import type { Key } from 'react-stately';

export interface TabProps {
  /**
   * A unique identifier for the `Tab`, distinguishing it from its siblings.
   * Selecting a tab reports this value through `Tabs`' `activeKey` / `onSelect`.
   */
  eventKey: Key;
  /** Specifies the `Tab`'s navigation title. */
  title: React.ReactNode;
  /** Specifies the panel content shown when this `Tab` is selected. */
  children?: React.ReactNode;
  /**
   * Specifies notification bubble content. It appears on the top-right of the
   * `Tab`'s title.
   */
  notification?: React.ReactNode;
  /** Specifies whether the `Tab` is disabled. */
  disabled?: boolean;
  /** Specifies an additional class name to append to the `Tab`'s nav link. */
  tabClassName?: string;
}

/**
 * Declarative configuration for a single tab. `Tab` is never rendered to the DOM
 * itself — its parent `Tabs` reads these props to build the React Aria /
 * react-stately tab collection (the tab button from `title`/`notification`, the
 * panel from `children`). This mirrors `@openedx/paragon`'s `Tab`: the public
 * props (`eventKey`, `title`, `notification`, `disabled`) are unchanged.
 */
function Tab(_props: TabProps): React.ReactElement | null {
  // Rendering is handled by `Tabs`; a stray `<Tab>` outside `<Tabs>` renders
  // nothing rather than leaking an unstyled element into the page.
  return null;
}

export default Tab;
