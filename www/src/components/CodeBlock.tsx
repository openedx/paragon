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
import {
  EXAMPLE_CODE_BLOCK_WITH_HEADING_EVENTS,
  EXAMPLE_CODE_BLOCK_WITHOUT_HEADING_EVENTS,
  sendUserAnalyticsEvent,
} from '../../segment-events';
import MiyazakiCard from './exampleComponents/MiyazakiCard';
import HipsterIpsum from './exampleComponents/HipsterIpsum';
import ExamplePropsForm from './exampleComponents/ExamplePropsForm';

const { Collapsible, IconButton, Icon, toast } = ParagonReact;

export type CollapsibleLiveEditorTypes = {
  children: React.ReactNode;
  clickToCopy: (arg: string) => void;
  handleCodeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function CollapsibleLiveEditor({ children, clickToCopy, handleCodeChange }: CollapsibleLiveEditorTypes) {
  const [collapseIsOpen, setCollapseIsOpen] = useState(false);

  const getCodeBlockHeading = (element: HTMLElement): HTMLHeadElement | null => {
    const codeBlockWrapper = element.closest<HTMLDivElement>('.pgn-doc__code-block');

    if (!codeBlockWrapper) {
      return null;
    }

    let node = codeBlockWrapper!.parentNode!.previousSibling as HTMLElement;

    while (node.className !== 'pgn-doc__heading') {
      node = node.previousSibling as HTMLElement;

      if (!node) {
        return null;
      }
    }

    return node;
  };

  const submitSegmentEvent = (e: React.MouseEvent & { target: HTMLElement }) => {
    const componentNameAndCategory = window.location.pathname.replace(/\//g, '.')
      .replace(/.components./gi, '');
    const headingElement = getCodeBlockHeading(e.target);

    if (!headingElement) {
      const event = collapseIsOpen
        ? EXAMPLE_CODE_BLOCK_WITHOUT_HEADING_EVENTS.CLOSED
        : EXAMPLE_CODE_BLOCK_WITHOUT_HEADING_EVENTS.OPENED;

      sendUserAnalyticsEvent(event, { value: `${componentNameAndCategory}id-not-generated` });
      return;
    }

    const event = collapseIsOpen
      ? EXAMPLE_CODE_BLOCK_WITH_HEADING_EVENTS.CLOSED
      : EXAMPLE_CODE_BLOCK_WITH_HEADING_EVENTS.OPENED;

    sendUserAnalyticsEvent(event, { value: `${componentNameAndCategory}${headingElement.id}` });
  };

  return (
    <div className="pgn-doc__collapsible-live-editor">
      <Collapsible
        unmountOnExit={false}
        styling="card-lg"
        open={collapseIsOpen}
        onToggle={(isOpen: boolean) => setCollapseIsOpen(isOpen)}
        onChange={handleCodeChange}
        onClick={submitSegmentEvent}
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
  const [codeExample, setCodeExample] = useState(children);

  const handleCodeChange = (e) => setCodeExample(e.target.value);

  const handleCopyCodeExample = () => {
    navigator.clipboard.writeText(codeExample);
    toast({message: 'Code example copied to clipboard!', duration: 2000 });
  };

  if (live) {
    return (
      <div className="pgn-doc__code-block">
        <LiveProvider
          code={codeExample}
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
            axios,
            GatsbyLink: Link,
            classNames,
            uuidv4,
          }}
          theme={theme}
        >
          <LivePreview className="pgn-doc__code-block-preview" />
          <CollapsibleLiveEditor handleCodeChange={handleCodeChange} clickToCopy={handleCopyCodeExample}>
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
