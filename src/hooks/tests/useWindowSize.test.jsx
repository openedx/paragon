import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { useWindowSize } from '../..';

function FakeComponent() {
  const { width, height } = useWindowSize();

  return <div data-testid="window-size">{height} {width}</div>;
}

describe('useWindowSize hook', () => {
  const { innerHeight, innerWidth } = global;
  afterEach(() => {
    // Reset globals
    global.innerWidth = innerWidth;
    global.innerHeight = innerHeight;
  });

  it('changes the width when window width changes', () => {
    // Change the viewport to 500px.
    global.innerWidth = 500;
    const { getByTestId, rerender } = render(<FakeComponent />);
    expect(getByTestId('window-size')).toHaveTextContent('500');
    global.innerWidth = 850;
    act(() => {
      // Trigger the window resize event.
      global.dispatchEvent(new Event('resize'));
    });
    rerender(<FakeComponent />);
    expect(getByTestId('window-size')).toHaveTextContent('850');
  });

  it('changes height when window width changes', () => {
    // Change the viewport to 600px.
    global.innerHeight = 600;
    const { getByTestId, rerender } = render(<FakeComponent />);
    expect(getByTestId('window-size')).toHaveTextContent('600');
    global.innerHeight = 1050;
    act(() => {
      // Trigger the window resize event.
      global.dispatchEvent(new Event('resize'));
    });
    rerender(<FakeComponent />);
    expect(getByTestId('window-size')).toHaveTextContent('1050');
  });
});
