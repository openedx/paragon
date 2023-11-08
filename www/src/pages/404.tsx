import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/PageLayout';
import SEO from '../components/SEO';

function NotFoundPage({ pageContext }) {
  return (
    <Layout githubEditPath={pageContext.githubEditPath}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}

NotFoundPage.propTypes = {
  pageContext: PropTypes.shape({
    githubEditPath: PropTypes.string,
  }).isRequired,
};

export default NotFoundPage;

export function Head() {
  return <SEO title="404: Not Found" />;
}
