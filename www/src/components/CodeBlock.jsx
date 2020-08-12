import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/duotoneDark';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as ParagonReact from '~paragon-react';

function CodeBlock({ children, className, live }) {
  const language = className ? className.replace(/language-/, '') : 'jsx';

  if (live) {
    return (
      <div className="pgn-doc__code-block">
        <LiveProvider
          code={children}
          scope={{ ...ParagonReact, useState }}
          theme={theme}
        >
          <LivePreview className="pgn-doc__code-block-preview" />
          <LiveEditor className="pgn-doc__code-block-editor" />
          <LiveError className="pgn-doc__code-block-error" />
        </LiveProvider>
      </div>
    );
  }

  /* eslint-disable react/no-array-index-key */
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({
        className: preClassName, style, tokens, getLineProps, getTokenProps,
      }) => (
        <pre className={preClassName} style={{ ...style, padding: '1rem' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  live: PropTypes.bool,
};

CodeBlock.defaultProps = {
  live: false,
  className: '',
};

export default CodeBlock;
