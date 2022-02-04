import hasFeatureFlagEnabled from './utils/hasFeatureFlagEnabled';

export const FEATURE_DIRECTION_SWITCHER = 'DIRECTION_SWITCHER';

// Feature flags used throughout the site should be configured here.
// You should generally allow two ways of enabling a feature flag:
// 1. Through environment variables which will enable a feature flag at build time
//    without a way of disabling it, to do so during local development edit the
//    .env.development file located at the root of docs site project (note that
//    you will need to restart development server for the changes to take effect).
//    See DIRECTION_SWITCHER feature for example of configuring feature flags this way.
// 2. As a query parameter in the URL, using hasFeatureFlagEnabled util function.
//    This will allow to enable feature flag by providing its name as a feature?
//    query parameter in the URL. (e.g. to enable DIRECTION_SWITCHER feature you would append
//    '?feature=DIRECTION_SWITCHER' to the URL)
export const FEATURES = {
  DIRECTION_SWITCHER: process.env.FEATURE_DIRECTION_SWITCHER || hasFeatureFlagEnabled(FEATURE_DIRECTION_SWITCHER),
};
