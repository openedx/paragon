const { createFilePath } = require('gatsby-source-filesystem');

function onCreateNode(node, actions, getNode) {
  const { createNodeField } = actions;
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
      .split('README')[0]
      .toLowerCase();

    // Is this node (page) a page about a Paragon component, from src/**/.md(x),
    // or (when false) is it one of the .mdx/.tsx files in www/src/ ?
    const isChangelog = node.internal.contentFilePath.endsWith('CHANGELOG.md');
    const isComponentPageNode = !node.internal.contentFilePath.includes('www/src/');
    const slug = (/* eslint-disable */
      isChangelog ? '/changelog/' :
      isComponentPageNode ? `/components${value}` :
      value
    );/* eslint-enable */

    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with 'components' prefix. you
      // don't need a separating '/' before the value because
      // createFilePath returns a path with the leading '/'.
      value: slug,
    });
  }
}

module.exports = onCreateNode;
