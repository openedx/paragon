import React, { useMemo, useRef } from 'react';
import {
  useTab, useTabList, useTabPanel, useFocusRing, useObjectRef, mergeProps,
} from 'react-aria';
import { useTabListState, Item, type Key } from 'react-stately';
import type { Node, TabListState } from 'react-stately';
import clsx from 'clsx';

import type { TabProps } from './Tab';
import '../styles/tabs.css';

/** Default text for the (not-yet-ported) responsive "More..." overflow tab. */
export const MORE_TAB_TEXT = 'More...';

/** Visual style of the `Tabs`' navigation. */
export type TabsVariant = 'tabs' | 'pills' | 'inverse-tabs' | 'inverse-pills' | 'button-group';

export interface TabsProps {
  /** The set of `<Tab>` elements to render. */
  children: React.ReactNode;
  /** Specifies the visual style to use (default: `tabs`). */
  variant?: TabsVariant;
  /** Specifies the initially active tab's `eventKey` (uncontrolled usage). */
  defaultActiveKey?: Key;
  /** Specifies the active tab's `eventKey` (controlled usage). */
  activeKey?: Key;
  /** Callback fired with the newly selected tab's `eventKey`. */
  onSelect?: (eventKey: Key) => void;
  /**
   * Specifies text for the responsive "More..." overflow tab. Retained for API
   * compatibility; the overflow dropdown is not part of this prototype — see the
   * migration notes in the docs.
   */
  moreTabText?: string;
  /** Specifies an additional class name to append to the tab list. */
  className?: string;
  /** Optional id applied to the wrapper element. */
  id?: string;
}

/** Extra per-tab config carried alongside the react-stately collection node. */
interface TabMeta {
  tabClassName?: string;
}

/**
 * A single tab button. Behaviour (selection on press, roving `tabindex`,
 * `aria-selected`/`aria-controls` linkage) comes from React Aria's `useTab`; the
 * keyboard-only focus ring reuses the same `[data-focus-visible]` mechanism as
 * `Button`. Styling is the global, public `nav-link` class layer.
 */
function TabItem({ item, state, meta }: {
  item: Node<object>;
  state: TabListState<object>;
  meta: TabMeta | undefined;
}) {
  const ref = useObjectRef<HTMLButtonElement>();
  const { tabProps, isSelected, isDisabled } = useTab({ key: item.key }, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      type="button"
      {...mergeProps(tabProps, focusProps)}
      ref={ref}
      data-focus-visible={isFocusVisible || undefined}
      className={clsx(
        'nav-item',
        'nav-link',
        isSelected && 'active',
        isDisabled && 'disabled',
        meta?.tabClassName,
      )}
    >
      {item.rendered}
    </button>
  );
}

/**
 * The panel for the currently-selected tab. React Aria mounts only the active
 * panel (rather than Bootstrap's "render all, hide inactive"), keeping the DOM
 * minimal and the `aria-labelledby`/`role="tabpanel"` linkage correct — see the
 * migration notes in the docs.
 */
function TabPanel({ state, className }: {
  state: TabListState<object>;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { tabPanelProps } = useTabPanel({}, state, ref);

  return (
    <div className={className}>
      <div {...tabPanelProps} ref={ref} className="tab-pane active">
        {state.selectedItem?.props.children}
      </div>
    </div>
  );
}

/**
 * Tabs organize related content into sections and let the user switch between
 * them. This is the prototype re-implementation of `@openedx/paragon`'s `Tabs`:
 * the declarative `<Tabs><Tab eventKey title>…</Tab></Tabs>` API — including
 * `variant`, `defaultActiveKey`/`activeKey`, `onSelect`, per-tab `disabled` and
 * `notification` — is unchanged, but the internals no longer depend on
 * `react-bootstrap`:
 *
 * - **Behaviour** comes from React Aria's `useTabList`/`useTab`/`useTabPanel`
 *   plus react-stately's `useTabListState`: correct `role="tablist"`/`tab`/
 *   `tabpanel` semantics, arrow-key navigation, and `aria-selected`/
 *   `aria-controls` linkage.
 * - **Styling** is the global, public `nav`/`nav-tabs`/`nav-pills`/… class layer
 *   (`src/styles/tabs.css`) over the same `--pgn-*` tokens, so a component and a
 *   raw `<ul class="nav nav-tabs">` render identically and theming is unaffected.
 */
export function Tabs({
  children,
  variant = 'tabs',
  defaultActiveKey,
  activeKey,
  onSelect,
  className,
  id,
  // `moreTabText` is accepted for API compatibility but currently inert.
  moreTabText: _moreTabText = MORE_TAB_TEXT,
}: TabsProps) {
  // Translate the declarative `<Tab>` children into a react-stately collection:
  // each becomes an `<Item>` whose `title` (plus optional notification badge) is
  // the tab label and whose children are the panel content. `disabledKeys` and
  // the per-tab `tabClassName` map are collected in the same pass.
  const { items, disabledKeys, meta } = useMemo(() => {
    const collectedDisabled: Key[] = [];
    const collectedMeta = new Map<Key, TabMeta>();
    const collectedItems = React.Children.toArray(children)
      .filter((child): child is React.ReactElement<TabProps> => React.isValidElement(child))
      .map((child, index) => {
        const {
          eventKey, title, notification, disabled, tabClassName, children: panel,
        } = child.props;
        const key: Key = eventKey ?? String(index);
        if (disabled) {
          collectedDisabled.push(key);
        }
        if (tabClassName) {
          collectedMeta.set(key, { tabClassName });
        }
        const label = notification
          ? (
            <>
              {title}
              <span className="pgn__tab-notification" role="status" aria-live="polite">
                {notification}
              </span>
            </>
          )
          : title;
        return (
          <Item key={key} title={label}>
            {panel}
          </Item>
        );
      });
    return { items: collectedItems, disabledKeys: collectedDisabled, meta: collectedMeta };
  }, [children]);

  const state = useTabListState<object>({
    children: items,
    selectedKey: activeKey,
    defaultSelectedKey: defaultActiveKey,
    disabledKeys,
    onSelectionChange: onSelect,
  });

  const tabListRef = useRef<HTMLDivElement>(null);
  const { tabListProps } = useTabList(
    { selectedKey: activeKey, defaultSelectedKey: defaultActiveKey },
    state,
    tabListRef,
  );

  return (
    <div id={id}>
      <div
        {...tabListProps}
        ref={tabListRef}
        className={clsx('nav', `nav-${variant}`, 'pgn__tabs', className)}
      >
        {[...state.collection].map((item) => (
          <TabItem key={item.key} item={item} state={state} meta={meta.get(item.key)} />
        ))}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} className="tab-content" />
    </div>
  );
}

Tabs.displayName = 'Tabs';

export default Tabs;
