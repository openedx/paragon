const isGreaterThan = (lowerBound) => (
  (props, propName, componentName) => {
    const value = props[propName];

    if (typeof value === 'number' && !Number.isNaN(value) && value > lowerBound) {
      return null;
    }

    return new Error(`${propName} in ${componentName} must be a non-NaN number greater than ${lowerBound}.`);
  }
);

export default isGreaterThan;
