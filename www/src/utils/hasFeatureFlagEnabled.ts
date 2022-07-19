/**
 * Determines whether a specified feature flag is enabled.
 *
 * @param {string} featureFlag
 * @returns true if feature flag is in `?feature` query parameter
 */
export default function hasFeatureFlagEnabled(featureFlag: string) {
  const { location } = global;
  if (!location) {
    return false;
  }
  const searchParams = new URLSearchParams(location.search);
  const features = searchParams.getAll('feature');
  return features.includes(featureFlag);
}
