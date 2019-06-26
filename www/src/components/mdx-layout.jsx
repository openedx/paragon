import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Navigation from './navigation';
import InternalMDXRenderer from 'gatsby-mdx/mdx-renderer';

import '../scss/index.scss';

import {MDXProvider} from '@mdx-js/react'
import CodeBlock from './CodeBlock'
const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}


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
    <MDXRenderer>{props.children}</MDXRenderer>
  </div>
);
