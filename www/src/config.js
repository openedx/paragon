/* eslint-disable */
const hasFeatureFlagEnabled = require('./utils/hasFeatureFlagEnabled');
/* eslint-enable */

// Feature flags used throughout the site should be configured here.
// You should generally allow two ways of enabling a feature flag:
// 1. Through environment variables which will enable a feature flag at build time
//    without a way of disabling it, to do so during local development edit the
//    .env.development file located at the root of docs site project (note that
//    you will need to restart development server for the changes to take effect).
//    See DIRECTION_SWITCHER feature for example of configuring feature flags this way.
// 2. As a query parameter in the URL, using`hasFeatureFlagEnabled` util function.
//    This will allow to enable feature flag by providing its name as a feature?
//    query parameter in the URL. (e.g. to enable LANGUAGE_SWITCHER feature you would append
//    '?feature=LANGUAGE_SWITCHER' to the URL)
const FEATURES = {};

const LANGUAGES = [
  {
    label: 'English',
    code: 'en',
  },
  {
    label: 'Arabic',
    code: 'ar',
  },
  {
    label: 'Catalan',
    code: 'ca',
  },
  {
    label: 'Chinese',
    code: 'zh-cn',
  },
  {
    label: 'French',
    code: 'fr',
  },
  {
    label: 'Hebrew',
    code: 'he',
  },
  {
    label: 'Indonesian',
    code: 'id',
  },
  {
    label: 'Polish',
    code: 'pl',
  },
  {
    label: 'Russian',
    code: 'ru',
  },
  {
    label: 'Thai',
    code: 'th',
  },
  {
    label: 'Ukrainian',
    code: 'uk',
  },
  {
    label: 'Spanish',
    code: 'es-419',
  },
  // {
  //   label: 'Korean',
  //   code: 'ko-kr',
  // },
  // {
  //   label: 'Portuguese',
  //   code: 'pt-br',
  // },
];

const INSIGHTS_TABS = Object.freeze({
  SUMMARY: 'Summary',
  PROJECTS: 'Projects',
  COMPONENTS: 'Components',
});

const INSIGHTS_PAGES = [
  {
    tab: INSIGHTS_TABS.SUMMARY,
    path: '/insights',
  },
  {
    tab: INSIGHTS_TABS.PROJECTS,
    path: '/insights/projects',
  },
  {
    tab: INSIGHTS_TABS.COMPONENTS,
    path: '/insights/components',
  },
];

module.exports = {
  INSIGHTS_TABS,
  INSIGHTS_PAGES,
  FEATURES,
  LANGUAGES,
};
