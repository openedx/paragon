import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PageBanner from './index';

describe('<PageBanner />', () => {
  describe('correct rendering', () => {
    it('renders with correct class for default variant (accentA)', () => {
      const { getByTestId } = render(<PageBanner data-testid="page-banner" />);
      const pageBanner = getByTestId('page-banner');
      expect(pageBanner).toHaveClass('pgn__pageBanner__accentA');
    });
    it('renders with correct class for default variant (accentB)', () => {
      const { getByTestId } = render(<PageBanner variant="accentB" data-testid="page-banner" />);
      const pageBanner = getByTestId('page-banner');
      expect(pageBanner).toHaveClass('pgn__pageBanner__accentB');
    });
    it('renders with correct class for variant warning', () => {
      const { getByTestId } = render(<PageBanner variant="warning" data-testid="page-banner" />);
      const pageBanner = getByTestId('page-banner');
      expect(pageBanner).toHaveClass('pgn__pageBanner__warning');
    });
    it('renders with correct class for variant dark', () => {
      const { getByTestId } = render(<PageBanner variant="dark" data-testid="page-banner" />);
      const pageBanner = getByTestId('page-banner');
      expect(pageBanner).toHaveClass('pgn__pageBanner__dark');
    });
    it('renders with correct class for variant light', () => {
      const { getByTestId } = render(<PageBanner variant="light" data-testid="page-banner" />);
      const pageBanner = getByTestId('page-banner');
      expect(pageBanner).toHaveClass('pgn__pageBanner__light');
    });
    it('does not render page banner when show is false', () => {
      const { queryByTestId } = render(<PageBanner show={false} data-testid="page-banner" />);
      const pageBanner = queryByTestId('page-banner');
      expect(pageBanner).toBeNull();
    });
    it('passes the alt text to the dismiss button aria-label', () => {
      const { getByLabelText } = render(<PageBanner dismissible dismissAltText="Test dismiss alt text" onDismiss={() => {}} />);
      const dismissButton = getByLabelText('Test dismiss alt text');
      expect(dismissButton).toBeInTheDocument();
    });
  });

  describe('onDismiss', () => {
    it('performs the onDismiss action on click', async () => {
      const spy = jest.fn();
      const { getByTestId } = render(<PageBanner dismissible onDismiss={spy} />);
      const dismissButton = getByTestId('dismiss-button');
      await fireEvent.click(dismissButton);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
