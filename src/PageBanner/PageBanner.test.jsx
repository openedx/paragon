import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PageBanner from '.';

describe('<PageBanner />', () => {
  describe('correct rendering', () => {
    it('renders with correct class for default variant (accentA)', () => {
      render(<PageBanner />);
      const pageBanner = screen.getByRole('alert');
      expect(pageBanner).toHaveClass('pgn__pageBanner__accentA');
    });
    it('renders with correct class for default variant (accentB)', () => {
      render(<PageBanner variant="accentB" />);
      const pageBanner = screen.getByRole('alert');
      expect(pageBanner).toHaveClass('pgn__pageBanner__accentB');
    });
    it('renders with correct class for variant warning', () => {
      render(<PageBanner variant="warning" />);
      const pageBanner = screen.getByRole('alert');
      expect(pageBanner).toHaveClass('pgn__pageBanner__warning');
    });
    it('renders with correct class for variant dark', () => {
      render(<PageBanner variant="dark" />);
      const pageBanner = screen.getByRole('alert');
      expect(pageBanner).toHaveClass('pgn__pageBanner__dark');
    });
    it('renders with correct class for variant light', () => {
      render(<PageBanner variant="light" />);
      const pageBanner = screen.getByRole('alert');
      expect(pageBanner).toHaveClass('pgn__pageBanner__light');
    });
    it('does not render page banner when show is false', () => {
      render(<PageBanner show={false} />);
      const pageBanner = screen.queryByRole('alert');
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
      render(<PageBanner dismissible onDismiss={spy} />);
      const dismissButton = screen.getByRole('button');
      await userEvent.click(dismissButton);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
