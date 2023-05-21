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

    const isChangelogNode = node.fileAbsolutePath && node.fileAbsolutePath.endsWith('CHANGELOG.md');

    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with 'components' prefix. you
      // don't need a separating '/' before the value because
      // createFilePath returns a path with the leading '/'.
      value: isChangelogNode ? 'changelog' : `/components${value}`,
    });
  }
}

module.exports = onCreateNode;
