import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/duotoneDark';
import {
  LiveProvider, LiveEditor, LiveError, LivePreview,
} from 'react-live';
import { FormattedMessage, useIntl } from 'react-intl';
import * as ParagonReact from '~paragon-react'; // eslint-disable-line
import * as ParagonIcons from '~paragon-icons'; // eslint-disable-line
import MiyazakiCard from './exampleComponents/MiyazakiCard';
import HipsterIpsum from './exampleComponents/HipsterIpsum';

const { Button, Collapsible } = ParagonReact;

function CollapsibleLiveEditor({ children }) {
  const [collapseIsOpen, setCollapseIsOpen] = useState(false);
  return (
    <div className="pgn-doc__collapsible-live-editor">
      <Collapsible.Advanced
        open={collapseIsOpen}
        onToggle={(isOpen) => setCollapseIsOpen(isOpen)}
      >
        <Collapsible.Trigger tag={Button} variant="link">
          <Collapsible.Visible whenClosed>Show code example</Collapsible.Visible>
          <Collapsible.Visible whenOpen>Hide code example</Collapsible.Visible>
        </Collapsible.Trigger>
        <Collapsible.Body className="mt-2">
          {children}
        </Collapsible.Body>
      </Collapsible.Advanced>
    </div>
  );
}

CollapsibleLiveEditor.propTypes = {
  children: PropTypes.node.isRequired,
};

function CodeBlock({
  children,
  className,
  live,
}) {
  const intl = useIntl();
  const language = className ? className.replace(/language-/, '') : 'jsx';

  if (live) {
    return (
      <div className="pgn-doc__code-block">
        <LiveProvider
          code={children}
          scope={{
            ...ParagonIcons,
            ...ParagonReact,
            useCallback,
            useEffect,
            useState,
            useMemo,
            MiyazakiCard,
            HipsterIpsum,
            FormattedMessage,
            formatMessage: intl.formatMessage,
            MenuIcon: ParagonIcons.Menu,
            Image: children.includes('Dropzone') && typeof window !== 'undefined' ? window.Image : ParagonReact.Image,
            axios,
          }}
          theme={theme}
        >
          <LivePreview className="pgn-doc__code-block-preview" />
          <CollapsibleLiveEditor>
            <LiveEditor className="pgn-doc__code-block-editor" />
          </CollapsibleLiveEditor>
          <LiveError className="pgn-doc__code-block-error" />
        </LiveProvider>
      </div>
    );
  }

  /* eslint-disable react/no-array-index-key */
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({
        className: preClassName,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <pre className={preClassName} style={{ ...style, padding: '1rem', overflowY: 'auto' }}>
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
