import React from 'react';
import { Button } from '~paragon-react';
import Layout from '../components/PageLayout';
import SEO from '../components/SEO';
import ComponentsList from '../components/ComponentsList';

function HomePage() {
  return (
    <Layout showMinimizedTitle hideFooterComponentMenu>
      <div className="bg-dark text-white text-center py-5">
        <p className="x-small text-uppercase text-monospace mb-0">
          Technical Documentation{' '}
        </p>
        <h1 className="display-3 text-white">Paragon Design System</h1>
        <p className="lead mx-auto my-3 mb-4" style={{ maxWidth: '28em' }}>
          An accessible, theme-ready, and open source design system built for
          learning applications.
        </p>
        <div className="mb-5">
          <Button
            variant="inverse-outline-primary"
            className="mr-2"
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://openedx.atlassian.net/wiki/spaces/BPL/overview"
          >
            Design Documentation
          </Button>
          <Button
            variant="inverse-outline-primary"
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.figma.com/file/eGmDp94FlqEr4iSqy1Uc1K/Paragon-2021"
          >
            Figma Library
          </Button>
        </div>
      </div>
      <ComponentsList />
    </Layout>
  );
}

export default HomePage;

export function Head() {
  return <SEO title="Home" />;
}
