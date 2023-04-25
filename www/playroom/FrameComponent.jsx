import React from 'react';
import { Helmet } from 'react-helmet';

export default function FrameComponent({ theme, children }) {
  return (
    <main>
      <Helmet>
        <link
          href="/static/openedx-theme.css"
          rel={`stylesheet${theme === 'openedx' ? '' : ' alternate'}`}
          type="text/css"
        />
        <link
          href="/static/edxorg-theme.css"
          rel={`stylesheet${theme === 'edx.org' ? '' : ' alternate'}`}
          type="text/css"
        />
      </Helmet>
      {children}
    </main>
  );
};
