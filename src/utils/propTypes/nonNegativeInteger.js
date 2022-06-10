const isNonNegativeInteger = (x) => typeof x === 'number' && Number.isInteger(x) && Number.isFinite(x) && x >= 0;

const nonNegativeInteger = (props, propName, componentName) => {
  const value = props[propName];

  if (value == null || isNonNegativeInteger(value)) {
    return null;
  }

  return new Error(`${propName} in ${componentName} must be a non-negative integer.`);
};

const requiredNonNegativeNumber = (props, propName, componentName) => {
  const value = props[propName];

  if (nonNegativeInteger(value)) {
    return null;
  }

  return new Error(`${propName} in ${componentName} must be a non-negative integer.`);
};

nonNegativeInteger.isRequired = requiredNonNegativeNumber;

export default nonNegativeInteger;
