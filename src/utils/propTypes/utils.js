/**
 * Returns the passed target PropType (targetType) if the conditionFn returns true
 * when called with the props object.
 * If the conditional is false and the associated prop is not included, raise an error,
 * giving the provided filterString as the explanation for the failure.
 * @param {func} targetType - target PropType method
 * @param {func} conditionFn - function taking the props object and returning whether or
 *   not the associated prop should be required
 * @param {string} filterString - string explanation of the isRequiredFn condition for error
 *   messages.
 * @return {func} - PropType based on targetType that is required if conditionFn returns true
 *   when called with the props object.
 */
export const customPropTypeRequirement = (targetType, conditionFn, filterString) => (
  (props, propName, componentName, ...rest) => {
    if (conditionFn(props) && props[propName] === undefined) {
      return new Error(
        `${componentName}: ${propName} is required when ${filterString}`,
      );
    }
    return targetType(props, propName, componentName, ...rest);
  }
);

/**
 * Checks if all specified properties are defined in the `props` object.
 *
 * @param {Object} props - The object in which the properties are checked.
 * @param {string[]} otherPropNames - An array of strings representing the property names to be checked.
 * @returns {boolean} `true` if all properties are defined and not equal to `undefined`, `false` otherwise.
 */
export const isEveryPropDefined = (props, otherPropNames) => otherPropNames
  .every(propName => props[propName] !== undefined);

/**
 * Returns a PropType entry with the given propType that is required if otherPropName
 * is truthy.
 * @param {func} propType - target PropType
 * @param {string} otherPropName - string name for prop that, if true, marks the
 *   associated prop as required
 * @return {func} - PropType based on propType that is required if otherPropName is
 *   set to true.
 */
export const requiredWhen = (propType, otherPropName) => (
  customPropTypeRequirement(
    propType,
    (props) => {
      if (Array.isArray(otherPropName)) {
        return isEveryPropDefined(props, otherPropName);
      }
      return props[otherPropName] === true;
    },
    `${otherPropName} ${Array.isArray(otherPropName) ? 'are defined' : 'is truthy'}`,
  )
);

/**
 * Returns a PropType entry with the given propType that is required if otherPropName
 * is false-y.
 * @param {func} propType - target PropType
 * @param {string} otherPropName - string name for prop that, if false-y, marks the
 *   associated prop as required
 * @return {func} - PropType based on propType that is required if otherPropName is
*    false-y
 */
export const requiredWhenNot = (propType, otherPropName) => (
  customPropTypeRequirement(
    propType,
    (props) => !props[otherPropName],
    `not ${otherPropName}`,
  )
);
