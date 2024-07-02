import React from 'react';
import {
  render, screen, act, waitFor, fireEvent,
} from '@testing-library/react';
import { Image } from '../..';

import useImageLoader from '../useImageLoader';

const MAIN_SRC = 'main-source.jpg';
const FALLBACK_SRC = 'fallback-source.jpg';
const ALT_TEXT = 'test';
const TEST_ID = 'loading-indicator';

function TestComponent({
// eslint-disable-next-line react/prop-types
  mainSrc, fallbackSrc, alt, ...rest
}) {
  const { ref, isSrcLoading } = useImageLoader({ mainSrc, fallbackSrc, ...rest });
  return (
    <>
      {isSrcLoading && <div data-testid={TEST_ID}>Loading...</div>}
      <Image ref={ref} alt={alt} />
    </>
  );
}

describe('useImageLoader', () => {
  describe('should set loading state to false', () => {
    it('when the main source loads successfully and update img src', async () => {
      render(<TestComponent mainSrc={MAIN_SRC} fallbackSrc={FALLBACK_SRC} alt={ALT_TEXT} />);
      const imgElement = screen.getByAltText(ALT_TEXT);

      expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();

      await act(async () => {
        fireEvent.load(imgElement);
      });

      await waitFor(() => expect(screen.queryByTestId(TEST_ID)).not.toBeInTheDocument());

      expect(imgElement.src).toContain(MAIN_SRC);
    });

    it('when the main source fails to load and falls back to the fallback source, and update img src', async () => {
      render(<TestComponent mainSrc={MAIN_SRC} fallbackSrc={FALLBACK_SRC} alt={ALT_TEXT} />);
      const imgElement = screen.getByAltText(ALT_TEXT);

      expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();

      await act(async () => {
        fireEvent.error(imgElement);
      });

      expect(imgElement.src).toContain(FALLBACK_SRC);
    });
  });
});
