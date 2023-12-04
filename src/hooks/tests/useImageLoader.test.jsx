import React from 'react';
import {
  render, screen, act, waitFor, fireEvent,
} from '@testing-library/react';

import useImageLoader from '../useImageLoader';

const MAIN_SRC = 'main-source.jpg';
const FALLBACK = 'fallback-source.jpg';
const ALT = 'test';
const TEST_ID = 'loading-indicator';

function TestComponent({
// eslint-disable-next-line react/prop-types
  mainSrc, fallback, alt, ...rest
}) {
  const { ref, isSrcLoading } = useImageLoader({ mainSrc, fallback, ...rest });
  return (
    <>
      {isSrcLoading && <div data-testid={TEST_ID}>Loading...</div>}
      <img ref={ref} alt={alt} />
    </>
  );
}

describe('useImageLoader', () => {
  it('should set loading state to false when the main source loads successfully and update img src', async () => {
    render(<TestComponent mainSrc={MAIN_SRC} fallback={FALLBACK} alt={ALT} />);
    const imgElement = screen.getByAltText(ALT);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();

    await act(async () => {
      fireEvent.load(imgElement);
    });

    await waitFor(() => expect(screen.queryByTestId(TEST_ID)).not.toBeInTheDocument());

    expect(imgElement.src).toContain(MAIN_SRC);
  });

  it('should set loading state to false when the main source fails to load and falls back to the fallback source, and update img src', async () => {
    render(<TestComponent mainSrc={MAIN_SRC} fallback={FALLBACK} alt={ALT} />);
    const imgElement = screen.getByAltText(ALT);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();

    await act(async () => {
      fireEvent.error(imgElement);
    });

    expect(imgElement.src).toContain(FALLBACK);
  });
});
