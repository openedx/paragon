import React from 'react';
import Menu from '../components/Menu';
import Layout from '../components/PageLayout';
import { Button } from '~paragon-react'; // eslint-disable-line

const HomePage = () => (
  <Layout showMinimizedTitle>
    <div className="bg-dark text-white text-center py-5">
      <p className="x-small text-uppercase text-monospace mb-0">
        Technical Documentation{' '}
      </p>
      <h1 className="display-3 text-white">Paragon Design System</h1>
      <p className="lead mw-xs mx-auto my-3 mb-4">
        An accessible, theme-ready, and open source design system built for
        learning applications.
      </p>
      <div className="mb-5">
        <Button variant="inverse-outline-primary mr-2">
          Design Documentation
        </Button>
        <Button
          variant="inverse-outline-primary"
          as="a"
          href="https://www.figma.com/file/eGmDp94FlqEr4iSqy1Uc1K/Paragon-2021"
        >
          Figma Library
        </Button>
      </div>
    </div>
    <Menu />
  </Layout>
);

export default HomePage;
