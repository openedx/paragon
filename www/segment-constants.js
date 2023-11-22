/**
 * Events are identified by the following structured pattern:
 * openedx.paragon.event_environment.event_name.event_action.
 *
 */

export const sendSelectedIconCopy = (context) => {
  global.analytics.track('openedx.paragon.docs.icons-table.selected-icon.copied', context);
};

export const sendLeaveFeedbackClick = () => {
  global.analytics.track('openedx.paragon.docs.leave_feedback.clicked');
};

export const sendPlaygroundClick = () => {
  global.analytics.track('openedx.paragon.docs.menu.playground.visit_playground.clicked');
};

export const sendContrastCheckerClick = () => {
  global.analytics.track('openedx.paragon.docs.menu.tools.visit_contrast_checker.clicked');
};

export const sendPlaygroundUrlCopy = () => {
  global.analytics.track('openedx.paragon.docs.playground.copy-url.copied');
};

export const sendPageEditBtnClick = () => {
  global.analytics.track('openedx.paragon.docs.page_edit.clicked');
};

export const sendShadowGeneratorLayerEnabled = () => {
  global.analytics.track('openedx.paragon.docs.elevation.shadow-generator.layer.enabled');
};

export const sendShadowGeneratorLayerDisabled = () => {
  global.analytics.track('openedx.paragon.docs.elevation.shadow-generator.layer.disabled');
};

export const sendShadowGeneratorLayerRemoved = () => {
  global.analytics.track('openedx.paragon.docs.elevation.shadow-generator.layer.removed');
};

export const sendShadowGeneratorLayerAdded = () => {
  global.analytics.track('openedx.paragon.docs.elevation.shadow-generator.layer.added');
};

export const sendShadowGeneratorUpdated = (context) => {
  global.analytics.track('openedx.paragon.docs.elevation.shadow-generator.updated', context);
};

export const sendInsightsTabClick = (tabTitle) => {
  global.analytics.track(`openedx.paragon.docs.insights.tabs.${tabTitle.toLowerCase().trim()}.clicked`);
};

export const sendComponentUsageLinkClick = (context) => {
  global.analytics.track('openedx.paragon.docs.usage-insights.component-usage-link.clicked', context);
};

export const sendSettingsVisibility = (isOpen) => {
  global.analytics.track(`openedx.paragon.docs.settings.${isOpen ? 'opened' : 'closed'}`);
};

export const sendSettingsChange = (settingName, context) => {
  global.analytics.track(`openedx.paragon.docs.settings.${settingName}.changed`, context);
};

export const sendExampleWithHeading = (collapseIsOpen, context) => {
  global.analytics.track(`openedx.paragon.docs.ui.example-code-block.${collapseIsOpen ? 'closed' : 'opened'}`, context);
};

export const sendExampleWithoutHeading = (collapseIsOpen, context) => {
  global.analytics.track(`openedx.paragon.docs.ui.example-code-block.${collapseIsOpen ? 'closed' : 'opened'}`, context);
};
