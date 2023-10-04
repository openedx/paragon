import React, { useEffect, useRef, useState } from 'react';
import {
  Hyperlink,
  StatefulButton,
  Button,
  Icon,
  Stack,
} from '~paragon-react';
import { ContentCopy, Check } from '~paragon-icons';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import localforage from 'localforage';

import SEO from '../components/SEO';
import { SiteTitle } from '../components/header';
import { storageKey } from '../../playroom/constants';

const FEEDBACK_URL = 'https://github.com/openedx/paragon/issues/new?assignees=&labels=playground&template=feedback_template.md&title=[Playground]';

const playroomStorage = localforage.createInstance({ name: storageKey });
const EMPTY_PLAYROOM_URL_QUERY = '?code=N4XyA';

export default function Playground({ location, pageContext }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [initialSearchParams, setInitialSearchParams] = useState('');
  const searchValue = useRef(location.search || '');
  const [copyUrlState, setCopyUrlState] = useState('default');

  useEffect(() => {
    setInitialSearchParams(location.search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    /**
     * We want to mirror the iframes url in the parent (aka browser) to support URL sharing.
     * the iframes onload handler isn't invoked when the iframes url changes so we're polling here instead.
     */
    const iframeUrlPoll = setInterval(() => {
      if (
        iframeRef?.current?.contentWindow
        && iframeRef.current.contentWindow.location.search !== searchValue.current
      ) {
        searchValue.current = iframeRef.current.contentWindow.location.search;
        navigate(`/playground${searchValue.current}`, { replace: true });
      }
    }, 200);
    return () => clearInterval(iframeUrlPoll);
  }, []);

  useEffect(() => {
    setCopyUrlState('default');
  }, [location.href]);

  return (
    <div className="d-flex flex-column w-100 vh-100 m-0 p-0">
      <SEO title="Playground" />
      <div className="pgn-doc__header py-3 bg-dark text-white sticky-top">
        <Stack direction="horizontal" className="d-flex align-items-center justify-content-end px-4" gap={4}>
          <Button
            variant="inverse-tertiary"
            onClick={() => {
              playroomStorage.clear().then(() => {
                iframeRef!.current!.contentWindow!.location.search = EMPTY_PLAYROOM_URL_QUERY;
              });
            }}
          >
            Reset
          </Button>
          <StatefulButton
            variant="inverse-tertiary"
            state={copyUrlState}
            onClick={() => {
              setCopyUrlState('copied');
              navigator.clipboard.writeText(location.href);
              global.analytics.track('openedx.paragon.docs.playground.url-copied');
            }}
            labels={{
              default: 'Copy URL',
              copied: 'Copied',
            }}
            icons={{
              default: <Icon src={ContentCopy} />,
              copied: <Icon src={Check} />,
            }}
          />
          <Hyperlink
            destination={pageContext.githubEditPath}
            target="_blank"
            className="text-white"
          >
            Edit this page
          </Hyperlink>
          <Hyperlink
            destination={FEEDBACK_URL}
            target="_blank"
            className="text-white"
          >
            Leave feedback
          </Hyperlink>
          <SiteTitle
            title="Paragon Design System"
            isFullVersion
            className="pgn-doc__playground-title"
          />
        </Stack>
      </div>
      <iframe
        title="Paragon Playground"
        ref={iframeRef}
        id="main"
        style={{
          border: 0,
          padding: 0,
          margin: 0,
        }}
        src={`/playroom${initialSearchParams}`}
        width="100%"
        height="100%"
      />
    </div>
  );
}

Playground.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
  pageContext: PropTypes.shape({
    githubEditPath: PropTypes.string,
  }).isRequired,
};
