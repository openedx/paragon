/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const createPages = require('./utils/createPages');
const onCreateNode = require('./utils/onCreateNode');
const onCreateWebpackConfig = require('./utils/onCreateWebpackConfig');
const createCssUtilityClassNodes = require('./utils/createCssUtilityClassNodes');

exports.onCreateWebpackConfig = ({ actions }) => onCreateWebpackConfig(actions);

exports.onCreateNode = ({ node, actions, getNode }) => onCreateNode(node, actions, getNode);

exports.createPages = ({ graphql, actions, reporter }) => createPages(graphql, actions, reporter);

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  createCssUtilityClassNodes({ actions, createNodeId, createContentDigest });
};
