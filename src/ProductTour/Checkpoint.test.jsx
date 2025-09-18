import { render, screen } from '@testing-library/react';
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';

import * as popper from '@popperjs/core';

import Checkpoint from './Checkpoint';

const popperMock = jest.spyOn(popper, 'createPopper');

describe('Checkpoint', () => {
  const handleAdvance = jest.fn();
  const handleBack = jest.fn();
  const handleDismiss = jest.fn();
  const handleEnd = jest.fn();

  beforeEach(() => {
    popperMock.mockImplementation(jest.fn());
  });

  afterEach(() => {
    popperMock.mockReset();
  });

  describe('second Checkpoint in Tour', () => {
    beforeEach(() => {
      render(
        <IntlProvider locale="en" messages={{}}>
          <div id="target-element">...</div>
          <Checkpoint
            advanceButtonText="Next"
            backButtonText="Back"
            body="Lorem ipsum checkpoint body"
            endButtonText="End"
            index={1}
            onAdvance={handleAdvance}
            onBack={handleBack}
            onDismiss={handleDismiss}
            onEnd={handleEnd}
            target="#target-element"
            title="Checkpoint title"
            totalCheckpoints={5}
          />
        </IntlProvider>,
      );
    });

    it('only renders advance and back buttons (i.e. does not render end button)', () => {
      expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    });

    it('back button onClick calls handleBack', async () => {
      const user = userEvent.setup();
      const backButton = screen.getByRole('button', { name: 'Back' });
      await user.click(backButton);
      expect(handleBack).toHaveBeenCalledTimes(1);
    });

    it('advance button onClick calls handleAdvance', async () => {
      const user = userEvent.setup();
      const advanceButton = screen.getByRole('button', { name: 'Next' });
      await user.click(advanceButton);
      expect(handleAdvance).toHaveBeenCalledTimes(1);
    });
  });

  describe('last Checkpoint in Tour', () => {
    beforeEach(() => {
      render(
        <IntlProvider locale="en" messages={{}}>
          <div id="#last-element" />
          <Checkpoint
            advanceButtonText="Next"
            backButtonText="Back"
            body="Lorem ipsum checkpoint body"
            dismissAltText="Escape"
            endButtonText="End"
            index={4}
            onAdvance={handleAdvance}
            onDismiss={handleDismiss}
            onEnd={handleEnd}
            target="#last-element"
            title="Checkpoint title"
            totalCheckpoints={5}
          />
        </IntlProvider>,
      );
    });

    it('only renders end button (i.e. neither advance nor back buttons)', () => {
      expect(screen.getByText('End', { selector: 'button' })).toBeInTheDocument();
    });

    it('uses customized alt text on the close icon', () => {
      const closeButton = screen.getByTestId('dismiss-tour');
      expect(closeButton).toHaveAttribute('aria-label', 'Escape');
    });

    it('end button onClick calls handleEnd', async () => {
      const user = userEvent.setup({ pointerEventsCheck: PointerEventsCheckLevel.Never });
      const endButton = screen.getByText('End', { selector: 'button' });
      await user.click(endButton);
      expect(handleEnd).toHaveBeenCalledTimes(1);
    });
  });

  describe('only one Checkpoint in Tour', () => {
    beforeEach(() => {
      render(
        <IntlProvider locale="en" messages={{}}>
          <div id="#target-element" />
          <Checkpoint
            advanceButtonText="Next"
            body="Lorem ipsum checkpoint body"
            endButtonText="End"
            index={0}
            onAdvance={handleAdvance}
            onDismiss={handleDismiss}
            onEnd={handleEnd}
            target="#target-element"
            title="Checkpoint title"
            totalCheckpoints={1}
          />
        </IntlProvider>,
      );
    });

    it('only renders end button (i.e. neither advance nor dismiss buttons)', () => {
      expect(screen.getByText('End', { selector: 'button' })).toBeInTheDocument();
    });
  });
});
