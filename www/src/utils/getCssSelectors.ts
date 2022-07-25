/**
 * Given the `props` and a `fileName` like `aspect-ratio`, return the array of classes that
 * correspond to that file. This function exists to simplify the Thumbprint Atomic MDX.
 */
const getCssSelectors = (
  nodes: Array<any>,
  regExpStr: RegExp,
) => {
  // return Object.keys(props.data, fileName);
  if (!regExpStr) {
    return nodes;
  }

  const regex = RegExp(regExpStr);
  return nodes.filter((rule: { selector: string; }) => regex.test(rule.selector));
};

export default getCssSelectors;
