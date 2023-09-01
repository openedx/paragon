import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';

export default function FrameComponent({ theme, children }) {
  return (
    <IntlProvider locale="en">
      <main style={{ padding: '16px' }}>
        <Helmet>
          <link
            href="/static/openedx-theme.css"
            rel={`stylesheet${theme === 'openedx' ? '' : ' alternate'}`}
            type="text/css"
          />
          <link
            href="/static/edxorg-theme.css"
            rel={`stylesheet${theme === 'edX.org' ? '' : ' alternate'}`}
            type="text/css"
          />
        </Helmet>
        {children}
      </main>
    </IntlProvider>
  );
}

FrameComponent.propTypes = {
  theme: PropTypes.oneOf(['openedx', 'edX.org']).isRequired,
  children: PropTypes.node.isRequired,
};
