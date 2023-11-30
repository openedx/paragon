/**
 * Events are identified by the following structured pattern:
 * openedx.paragon.event_environment.event_name.event_action
 */

export const ICON_COPIED_EVENT = 'openedx.paragon.docs.icons-table.selected-icon.copied';
export const LEAVE_FEEDBACK_CLICKED_EVENT = 'openedx.paragon.docs.leave-feedback.clicked';
export const CONTRAST_CHECKER_CLICKED_EVENT = 'openedx.paragon.docs.menu.tools.visit-contrast-checker.clicked';
export const PAGE_EDIT_BTN_CLICKED_EVENT = 'openedx.paragon.docs.page-edit.clicked';

export const PLAYGROUND_EVENTS = {
  LINK_CLICKED: 'openedx.paragon.docs.menu.playground.visit-playground.clicked',
  URL_COPIED: 'openedx.paragon.docs.playground.copy-url.copied',
};

export const SHADOW_GENERATOR_LAYER_EVENTS = {
  ENABLED: 'openedx.paragon.docs.elevation.shadow-generator.layer.enabled',
  DISABLED: 'openedx.paragon.docs.elevation.shadow-generator.layer.disabled',
  REMOVED: 'openedx.paragon.docs.elevation.shadow-generator.layer.removed',
  ADDED: 'openedx.paragon.docs.elevation.shadow-generator.layer.added',
  UPDATED: 'openedx.paragon.docs.elevation.shadow-generator.layer.updated',
};

export const SETTINGS_EVENTS = {
  OPENED: 'openedx.paragon.docs.settings.opened',
  CLOSED: 'openedx.paragon.docs.settings.closed',
  CHANGED: 'openedx.paragon.docs.setting.changed',
};

export const EXAMPLE_CODE_BLOCK_WITH_HEADING_EVENTS = {
  CLOSED: 'openedx.paragon.docs.example-code-block.closed',
  OPENED: 'openedx.paragon.docs.example-code-block.opened',
};

export const EXAMPLE_CODE_BLOCK_WITHOUT_HEADING_EVENTS = {
  CLOSED: 'openedx.paragon.docs.example-code-block.without-heading.closed',
  OPENED: 'openedx.paragon.docs.example-code-block.without-heading.opened',
};

export const USAGE_INSIGHTS_EVENTS = {
  TAB_CLICKED: 'openedx.paragon.docs.usage-insights.tab.clicked',
  COMPONENT_LINK_CLICKED: 'openedx.paragon.docs.usage-insights.component-usage-link.clicked',
};
