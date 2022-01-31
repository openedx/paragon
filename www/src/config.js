import hasFeatureFlagEnabled from './utils/hasFeatureFlagEnabled';

export const FEATURE_DIRECTION_SWITCHER = 'DIRECTION_SWITCHER';

export const FEATURES = {
  DIRECTION_SWITCHER: process.env.FEATURE_DIRECTION_SWITCHER || hasFeatureFlagEnabled(FEATURE_DIRECTION_SWITCHER),
};
