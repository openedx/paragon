export default function (props, newProp, oldProp, componentName) {
  if (props[oldProp] === undefined && props[newProp] === undefined) return null;

  if (props[newProp] !== undefined) {
    return props[newProp];
  }

  // eslint-disable-next-line no-console
  console.warn(`${componentName}: The prop ${oldProp} has been deprecated and will be removed in the next major release of Paragon. Use ${newProp} instead.`);
  return props[oldProp];
}
