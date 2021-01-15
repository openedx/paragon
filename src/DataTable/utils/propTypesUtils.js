/* eslint-disable import/prefer-default-export */

export const requiredWhen = (propType, dependentOnProp) => (props, propName, componentName, ...rest) => {
  if (props[dependentOnProp] === true && props[propName] === undefined) {
    return new Error(`${componentName}: ${propName} is required when ${dependentOnProp} is set to true.`);
  }
  return propType(props, propName, componentName, ...rest);
};
