import React from 'react';
import { MediaQueryProps } from 'react-responsive';

// We have to rename the below variables to start with `mock` so
// that `jest.mock` doesn't complain.
const mockWindow = window;
const mockReact = React;
const mockMediaQueryProps = MediaQueryProps;

// Because some Paragon components (e.g., `Pagination`) render a different UI depending on screen
// size using the `Responsive` components, we must mock the window size in our tests. To change
// the window size for a specific test, include `global.innerWidth = <width>`.
jest.mock('react-responsive', () => {
  const MediaQuery = require.requireActual('react-responsive').default;

  const MockMediaQuery = (props = mockMediaQueryProps) => {
    const defaultWidth = mockWindow.innerWidth;
    const defaultHeight = mockWindow.innerHeight;
    const values = { width: defaultWidth, height: defaultHeight, ...props.values };
    const newProps = { ...props, values };

    return mockReact.createElement(MediaQuery, newProps);
  };

  return MockMediaQuery;
});
