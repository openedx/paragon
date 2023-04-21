import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import axios from 'axios';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/duotoneDark';
import {
  LiveProvider, LiveEditor, LiveError, LivePreview,
} from 'react-live';
import { FormattedMessage, useIntl } from 'react-intl';
import * as ParagonReact from '~paragon-react';
import * as ParagonIcons from '~paragon-icons';
import { ContentCopy } from '~paragon-icons';
import MiyazakiCard from './exampleComponents/MiyazakiCard';
import HipsterIpsum from './exampleComponents/HipsterIpsum';
import ExamplePropsForm from './exampleComponents/ExamplePropsForm';

const {
  Collapsible, Toast, IconButton, Icon,
} = ParagonReact;

export type CollapsibleLiveEditorTypes = {
  children: React.ReactNode;
  clickToCopy: () => void;
};

function CollapsibleLiveEditor({ children, clickToCopy }: CollapsibleLiveEditorTypes) {
  const [collapseIsOpen, setCollapseIsOpen] = useState(false);
  return (
    <div className="pgn-doc__collapsible-live-editor">
      <Collapsible
        unmountOnExit={false}
        styling="card-lg"
        open={collapseIsOpen}
        onToggle={(isOpen: boolean) => setCollapseIsOpen(isOpen)}
        withIcon
        title={<strong>{collapseIsOpen ? 'Hide' : 'Show'} editable code example</strong>}
      >
        <p className="small text-gray mb-2">Any Paragon component or export may be added to the code example.</p>
        <div className="pgn-doc__collapsible-code-wrapper">
          {children}
          <IconButton
            className="pgn-doc__collapsible-live-editor-copy-btn"
            src={ContentCopy}
            iconAs={Icon}
            alt="Copy code example"
            onClick={clickToCopy}
            invertColors
          />
        </div>
      </Collapsible>
    </div>
  );
}

CollapsibleLiveEditor.propTypes = {
  children: PropTypes.node.isRequired,
};

export interface ICodeBlock {
  children: string,
  className?: string,
  live?: boolean,
}

function CodeBlock({
  children,
  className,
  live,
}: ICodeBlock) {
  const intl = useIntl();
  const language: any = className ? className.replace(/language-/, '') : 'jsx';
  const [showToast, setShowToast] = useState(false);

  const isCodeExampleCopied = () => {
    navigator.clipboard.writeText(children);
    setShowToast(true);
  };

  if (live) {
    return (
      <div className="pgn-doc__code-block">
        <LiveProvider
          code={children}
          scope={{
            ...ParagonIcons,
            ...ParagonReact,
            useCallback,
            useContext,
            useLayoutEffect,
            useEffect,
            useState,
            useReducer,
            useMemo,
            ExamplePropsForm,
            MiyazakiCard,
            HipsterIpsum,
            FormattedMessage,
            formatMessage: intl.formatMessage,
            MenuIcon: ParagonIcons.Menu,
            axios,
            GatsbyLink: Link,
            classNames,
            uuidv4,
          }}
          theme={theme}
        >
          <LivePreview className="pgn-doc__code-block-preview" />
          <CollapsibleLiveEditor clickToCopy={isCodeExampleCopied}>
            <LiveEditor className="pgn-doc__code-block-editor" />
          </CollapsibleLiveEditor>
          <LiveError className="pgn-doc__code-block-error" />
        </LiveProvider>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
        >
          Code example copied to clipboard!
        </Toast>
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
