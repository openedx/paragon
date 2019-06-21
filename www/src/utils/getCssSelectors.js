/**
 * Given the `props` and a `fileName` like `aspect-ratio`, return the array of classes that
 * correspond to that file. This function exists to simplify the Thumbprint Atomic MDX.
 */
const getCssSelectors = (nodes, regExpStr) => {
  // return Object.keys(props.data, fileName);
  if (!regExpStr) {
    return nodes;
  }

  var regex = RegExp(regExpStr);
  return nodes.filter(rule => regex.test(rule.selector));
};
    // props.data.all.edges.find(({ node }) => node.atomicFileName === fileName)
    //     .node.atomicClasses;

export default getCssSelectors;
