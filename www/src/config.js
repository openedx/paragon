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
    label: 'Italian (Italy)',
    code: 'it-it',
  },
  {
    label: 'Polish',
    code: 'pl',
  },
  // {
  //   label: 'Portuguese (Brazil)',
  //   code: 'pt-br',
  // },
  {
    label: 'Portuguese (Portugal)',
    code: 'pt-pt',
  },
  {
    label: 'Russian',
    code: 'ru',
  },
  {
    label: 'Spanish',
    code: 'es-419',
  },
  {
    label: 'Spanish (Argentina)',
    code: 'es-ar',
  },
  {
    label: 'Spanish (Spain)',
    code: 'es-es',
  },
  {
    label: 'Thai',
    code: 'th',
  },
  {
    label: 'Ukrainian',
    code: 'uk',
  },
  // {
  //   label: 'Korean',
  //   code: 'ko-kr',
  // },
  {
    label: 'Turkish (Turkey)',
    code: 'tr-tr',
  },
];

const INSIGHTS_TABS = Object.freeze({
  SUMMARY: 'Summary',
  PROJECTS: 'Projects',
  COMPONENTS: 'Components',
  HOOKS: 'Hooks',
  UTILS: 'Utils',
  ICONS: 'Icons',
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
  {
    tab: INSIGHTS_TABS.HOOKS,
    path: '/insights/hooks',
  },
  {
    tab: INSIGHTS_TABS.UTILS,
    path: '/insights/utils',
  },
  {
    tab: INSIGHTS_TABS.ICONS,
    path: '/insights/icons',
  },
];

const FOUNDATION_PAGES = [
  {
    label: 'Colors',
    path: '/foundations/colors/',
  },
  {
    label: 'Elevation',
    path: '/foundations/elevation/',
  },
  {
    label: 'Typography',
    path: '/foundations/typography/',
  },
  {
    label: 'Layout',
    path: '/foundations/layout/',
  },
  {
    label: 'Spacing',
    path: '/foundations/spacing/',
  },
  {
    label: 'Icons',
    path: '/foundations/icons/',
  },
  {
    label: 'CSS Utilities',
    path: '/foundations/css-utilities/',
  },
  {
    label: 'Responsive',
    path: '/foundations/responsive/',
  },
  {
    label: 'Brand icons',
    path: '/foundations/brand-icons/',
  },
];

module.exports = {
  INSIGHTS_TABS,
  INSIGHTS_PAGES,
  FEATURES,
  LANGUAGES,
  FOUNDATION_PAGES,
};
