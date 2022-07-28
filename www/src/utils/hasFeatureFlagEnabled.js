/**
 * Determines whether a specified feature flag is enabled.
 *
 * @param {string} featureFlag
 * @returns true if feature flag is in `?feature` query parameter
 */
function hasFeatureFlagEnabled(featureFlag) {
  const { location } = global;
  if (!location) {
    return false;
  }
  const searchParams = new URLSearchParams(location.search);
  const features = searchParams.getAll('feature');
  return features.includes(featureFlag);
}

module.exports = hasFeatureFlagEnabled;
