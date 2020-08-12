import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer as InternalMDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './CodeBlock';

import '../scss/index.scss';

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
};

export const MDXRenderer = ({ children }) => {
  let renderedChildren = children;

  if (typeof renderedChildren === 'string') {
    renderedChildren = <InternalMDXRenderer>{children}</InternalMDXRenderer>;
  }

  return (
    <MDXProvider
      components={components}
    >
      {renderedChildren}
    </MDXProvider>
  );
};

MDXRenderer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default props => (
  <div>
    <MDXRenderer>{props.children}</MDXRenderer>{/* eslint-disable-line react/prop-types */}
  </div>
);
