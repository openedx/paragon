import React, { useEffect, useRef, useState } from 'react';
import { Hyperlink } from '~paragon-react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import SEO from '../components/SEO';
import { SiteTitle } from '../components/header';

const FEEDBACK_URL = 'https://github.com/openedx/paragon/issues/new?assignees=&labels=playground&template=feedback_template.md&title=[Playground]';

export default function Playground({ location }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [initialSearchParams, setInitialSearchParams] = useState('');
  const searchValue = useRef(location.search || '');

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

  return (
    <div className="d-flex flex-column w-100 vh-100 m-0 p-0">
      <SEO title="Playground" />
      <div className="pgn-doc__header py-3 bg-dark text-white sticky-top">
        <div className="d-flex align-items-center justify-content-center">
          <Hyperlink
            destination={FEEDBACK_URL}
            target="_blank"
            className="text-white position-absolute"
            style={{ left: '16px' }}
          >
            Leave feedback
          </Hyperlink>
          <SiteTitle title="Paragon Design System" isFullVersion />
        </div>
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
  }).isRequired,
};
