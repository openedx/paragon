import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as popper from '@popperjs/core';

import ProductTour from './index';

const popperMock = jest.spyOn(popper, 'createPopper');

describe('<ProductTour />', () => {
  const targets = (
    <>
      <div id="target-1">...</div>
      <div id="target-2">...</div>
      <div id="target-3">...</div>
    </>
  );
  const handleDismiss = jest.fn();
  const handleEnd = jest.fn();
  const customOnDismiss = jest.fn();

  const disabledTourData = {
    advanceButtonText: 'Next',
    dismissButtonText: 'Dismiss',
    enabled: false,
    endButtonText: 'Okay',
    onDismiss: handleDismiss,
    onEnd: handleEnd,
    tourId: 'disabledTour',
    checkpoints: [
      {
        body: 'Lorem ipsum body',
        target: '#target-1',
        title: 'Disabled tour',
      },
    ],
  };

  const tourData = {
    advanceButtonText: 'Next',
    dismissButtonText: 'Dismiss',
    enabled: true,
    endButtonText: 'Okay',
    onDismiss: handleDismiss,
    onEnd: handleEnd,
    tourId: 'enabledTour',
    checkpoints: [
      {
        body: 'Lorem ipsum body',
        target: '#target-1',
        title: 'Checkpoint 1',
      },
      {
        body: 'Lorem ipsum body',
        target: '#target-2',
        title: 'Checkpoint 2',
      },
      {
        body: 'Lorem ipsum body',
        target: '#target-3',
        title: 'Checkpoint 3',
        onDismiss: customOnDismiss,
        advanceButtonText: 'Override advance',
        dismissButtonText: 'Override dismiss',

      },
      {
        target: '#target-3',
        title: 'Checkpoint 4',
        endButtonText: 'Override end',
      },
    ],
  };

  beforeEach(() => {
    popperMock.mockImplementation(jest.fn());
  });

  afterEach(() => {
    popperMock.mockReset();
  });

  describe('one enabled tour', () => {
    describe('with default settings', () => {
      it('renders checkpoint with correct title, body, and breadcrumbs', () => {
        render(
          <>
            <ProductTour
              tours={[tourData]}
            />
            {targets}
          </>,
        );

        expect(screen.getByRole('dialog', { name: 'Checkpoint 1' })).toBeInTheDocument();
        expect(screen.getByText('Checkpoint 1')).toBeInTheDocument();
        expect(screen.getByTestId('pgn__checkpoint-breadcrumb_active')).toBeInTheDocument();
      });

      it('onClick of advance button advances to next checkpoint', () => {
        render(
          <>
            <ProductTour
              tours={[tourData]}
            />
            {targets}
          </>,
        );

        // Verify the first Checkpoint has rendered
        expect(screen.getByRole('heading', { name: 'Checkpoint 1' })).toBeInTheDocument();

        // Click the advance button
        const advanceButton = screen.getByRole('button', { name: 'Next' });
        fireEvent.click(advanceButton);

        // Verify the second Checkpoint has rendered
        expect(screen.getByRole('heading', { name: 'Checkpoint 2' })).toBeInTheDocument();
      });

      it('onClick of dismiss button disables tour', () => {
        render(
          <>
            <ProductTour
              tours={[tourData]}
            />
            {targets}
          </>,
        );

        // Verify a Checkpoint has rendered
        expect(screen.getByRole('dialog', { name: 'Checkpoint 1' })).toBeInTheDocument();

        // Click the dismiss button
        const dismissButton = screen.getByRole('button', { name: 'Dismiss' });
        expect(dismissButton).toBeInTheDocument();
        fireEvent.click(dismissButton);

        // Verify no Checkpoints have rendered
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });

      it('onClick of end button disables tour', () => {
        render(
          <>
            <ProductTour
              tours={[tourData]}
            />
            {targets}
          </>,
        );

        // Verify a Checkpoint has rendered
        expect(screen.getByRole('dialog', { name: 'Checkpoint 1' })).toBeInTheDocument();

        // Advance the Tour to the last Checkpoint
        const advanceButton1 = screen.getByRole('button', { name: 'Next' });
        fireEvent.click(advanceButton1);
        const advanceButton2 = screen.getByRole('button', { name: 'Next' });
        fireEvent.click(advanceButton2);
        const advanceButton3 = screen.getByRole('button', { name: 'Override advance' });
        fireEvent.click(advanceButton3);

        // Click the end button
        const endButton = screen.getByRole('button', { name: 'Override end' });
        fireEvent.click(endButton);

        // Verify no Checkpoints have rendered
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });

      it('onClick of escape key disables tour', () => {
        render(
          <>
            <ProductTour
              tours={[tourData]}
            />
            {targets}
          </>,
        );

        // Verify a Checkpoint has rendered
        expect(screen.getByRole('dialog', { name: 'Checkpoint 1' })).toBeInTheDocument();

        // Click Escape key
        fireEvent.keyDown(screen.getByRole('dialog'), {
          key: 'Escape',
          code: 'Escape',
          keyCode: 27,
          charCode: 27,
        });

        // Verify no Checkpoints have been rendered
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });

    describe('with Checkpoint override settings', () => {
      const overrideTourData = {
        advanceButtonText: 'Next',
        dismissButtonText: 'Dismiss',
        enabled: true,
        endButtonText: 'Okay',
        onDismiss: handleDismiss,
        onEnd: handleEnd,
        tourId: 'enabledTour',
        startingIndex: 2,
        checkpoints: [
          {
            body: 'Lorem ipsum body',
            target: '#target-1',
            title: 'Checkpoint 1',
          },
          {
            body: 'Lorem ipsum body',
            target: '#target-2',
            title: 'Checkpoint 2',
          },
          {
            body: 'Lorem ipsum body',
            target: '#target-3',
            title: 'Checkpoint 3',
            onDismiss: customOnDismiss,
            advanceButtonText: 'Override advance',
            dismissButtonText: 'Override dismiss',

          },
          {
            target: '#target-3',
            title: 'Checkpoint 4',
            endButtonText: 'Override end',
          },
        ],
      };
      it('renders correct checkpoint on index override', () => {
        render(
          <>
            <ProductTour
              tours={[overrideTourData]}
            />
            {targets}
          </>,
        );
        expect(screen.getByRole('dialog', { name: 'Checkpoint 3' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Checkpoint 3' })).toBeInTheDocument();
      });

      it('applies override for advanceButtonText', () => {
        render(
          <>
            <ProductTour
              tours={[overrideTourData]}
            />
            {targets}
          </>,
        );
        expect(screen.getByRole('button', { name: 'Override advance' })).toBeInTheDocument();
      });

      it('applies override for dismissButtonText', () => {
        render(
          <>
            <ProductTour
              tours={[overrideTourData]}
            />
            {targets}
          </>,
        );
        expect(screen.getByRole('button', { name: 'Override dismiss' })).toBeInTheDocument();
      });

      it('applies override for endButtonText', () => {
        render(
          <>
            <ProductTour
              tours={[overrideTourData]}
            />
            {targets}
          </>,
        );
        const advanceButton = screen.getByRole('button', { name: 'Override advance' });
        fireEvent.click(advanceButton);
        expect(screen.getByRole('button', { name: 'Override end' })).toBeInTheDocument();
      });

      it('calls customHandleDismiss onClick of dismiss button', () => {
        render(
          <>
            <ProductTour
              tours={[overrideTourData]}
            />
            {targets}
          </>,
        );
        const dismissButton = screen.getByRole('button', { name: 'Override dismiss' });
        fireEvent.click(dismissButton);

        expect(customOnDismiss).toHaveBeenCalledTimes(1);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });

    describe('with invalid Checkpoint', () => {
      it('does not render', () => {
        const badTourData = {
          advanceButtonText: 'Next',
          dismissButtonText: 'Dismiss',
          enabled: true,
          endButtonText: 'Okay',
          onDismiss: handleDismiss,
          onEnd: handleEnd,
          tourId: 'badTour',
          checkpoints: [
            {
              body: 'Lorem ipsum body',
              target: 'bad-target-data',
              title: 'Checkpoint 1',
            },
          ],
        };

        render(
          <>
            <ProductTour
              tours={[badTourData]}
            />
            {targets}
          </>,
        );

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });

      it('advances to next valid Checkpoint', () => {
        const badTourData = {
          advanceButtonText: 'Next',
          dismissButtonText: 'Dismiss',
          enabled: true,
          endButtonText: 'Okay',
          onDismiss: handleDismiss,
          onEnd: handleEnd,
          tourId: 'badTour',
          checkpoints: [
            {
              body: 'Lorem ipsum body',
              target: 'bad-target-data',
              title: 'Checkpoint 1',
            },
            {
              body: 'Lorem ipsum body',
              target: '#target-1',
              title: 'Checkpoint 2',
            },
          ],
        };

        render(
          <>
            <ProductTour
              tours={[badTourData]}
            />
            {targets}
          </>,
        );

        expect(screen.queryByRole('dialog', { name: 'Checkpoint 1' })).not.toBeInTheDocument();
        expect(screen.getByRole('dialog', { name: 'Checkpoint 2' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Checkpoint 2' })).toBeInTheDocument();
      });
    });
  });

  describe('multiple enabled tours', () => {
    it('renders first enabled tour', () => {
      const secondEnabledTourData = {
        advanceButtonText: 'Next',
        dismissButtonText: 'Dismiss',
        enabled: true,
        endButtonText: 'Okay',
        onDismiss: handleDismiss,
        onEnd: handleEnd,
        tourId: 'secondEnabledTour',
        checkpoints: [
          {
            body: 'Lorem ipsum body',
            target: '#target-1',
            title: 'Second enabled tour',
          },
        ],
      };

      render(
        <>
          <ProductTour
            tours={[disabledTourData, tourData, secondEnabledTourData]}
          />
          {targets}
        </>,
      );

      expect(screen.getByText('Checkpoint 1')).toBeInTheDocument();
      expect(screen.queryByText('Second enabled tour')).not.toBeInTheDocument();
    });
  });

  describe('disabled tour', () => {
    it('does not render', () => {
      render(
        <>
          <ProductTour
            tours={[disabledTourData]}
          />
          {targets}
        </>,
      );

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
