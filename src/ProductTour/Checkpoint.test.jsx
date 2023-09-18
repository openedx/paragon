import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as popper from '@popperjs/core';

import Checkpoint from './Checkpoint';

const popperMock = jest.spyOn(popper, 'createPopper');

describe('Checkpoint', () => {
  const handleAdvance = jest.fn();
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
        <>
          <div id="target-element">...</div>
          <Checkpoint
            advanceButtonText="Next"
            body="Lorem ipsum checkpoint body"
            dismissButtonText="Dismiss"
            endButtonText="End"
            index={1}
            onAdvance={handleAdvance}
            onDismiss={handleDismiss}
            onEnd={handleEnd}
            target="#target-element"
            title="Checkpoint title"
            totalCheckpoints={5}
          />
        </>,
      );
    });

    it('renders correct active breadcrumb', () => {
      expect(screen.getByText('Checkpoint title')).toBeInTheDocument();
      const breadcrumbs = screen.getAllByTestId('pgn__checkpoint-breadcrumb_', { exact: false });
      expect(breadcrumbs.length).toEqual(5);
      expect(breadcrumbs[0].classList).toContain('pgn__checkpoint-breadcrumb_inactive');
      expect(breadcrumbs[1].classList).toContain('pgn__checkpoint-breadcrumb_active');
      expect(breadcrumbs[2].classList).toContain('pgn__checkpoint-breadcrumb_inactive');
      expect(breadcrumbs[3].classList).toContain('pgn__checkpoint-breadcrumb_inactive');
      expect(breadcrumbs[4].classList).toContain('pgn__checkpoint-breadcrumb_inactive');
    });

    it('only renders advance and dismiss buttons (i.e. does not render end button)', () => {
      expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    });

    it('dismiss button onClick calls handleDismiss', async () => {
      const dismissButton = screen.getByRole('button', { name: 'Dismiss' });
      await userEvent.click(dismissButton);
      expect(handleDismiss).toHaveBeenCalledTimes(1);
    });

    it('advance button onClick calls handleAdvance', async () => {
      const advanceButton = screen.getByRole('button', { name: 'Next' });
      await userEvent.click(advanceButton);
      expect(handleAdvance).toHaveBeenCalledTimes(1);
    });
  });

  describe('last Checkpoint in Tour', () => {
    beforeEach(() => {
      render(
        <>
          <div id="#last-element" />
          <Checkpoint
            advanceButtonText="Next"
            body="Lorem ipsum checkpoint body"
            dismissButtonText="Dismiss"
            endButtonText="End"
            index={4}
            onAdvance={handleAdvance}
            onDismiss={handleDismiss}
            onEnd={handleEnd}
            target="#last-element"
            title="Checkpoint title"
            totalCheckpoints={5}
          />
        </>,
      );
    });

    it('only renders end button (i.e. neither advance nor dismiss buttons)', () => {
      expect(screen.getByText('End', { selector: 'button' })).toBeInTheDocument();
    });

    it('end button onClick calls handleEnd', async () => {
      const endButton = screen.getByText('End', { selector: 'button' });
      await userEvent.click(endButton, undefined, { skipPointerEventsCheck: true });
      expect(handleEnd).toHaveBeenCalledTimes(1);
    });
  });

  describe('only one Checkpoint in Tour', () => {
    beforeEach(() => {
      render(
        <>
          <div id="#target-element" />
          <Checkpoint
            advanceButtonText="Next"
            body="Lorem ipsum checkpoint body"
            dismissButtonText="Dismiss"
            endButtonText="End"
            index={0}
            onAdvance={handleAdvance}
            onDismiss={handleDismiss}
            onEnd={handleEnd}
            target="#target-element"
            title="Checkpoint title"
            totalCheckpoints={1}
          />
        </>,
      );
    });

    it('only renders end button (i.e. neither advance nor dismiss buttons)', () => {
      expect(screen.getByText('End', { selector: 'button' })).toBeInTheDocument();
    });

    it('does not render breadcrumbs', () => {
      const breadcrumbs = screen.queryAllByTestId('pgn__checkpoint-breadcrumb_', { exact: false });
      expect(breadcrumbs.length).toEqual(0);
    });
  });

  describe('only one Checkpoint in Tour and showDismissButton set to true', () => {
    it('it renders dismiss button and end button', () => {
      render(
        <>
          <div id="#target-element" />
          <Checkpoint
            advanceButtonText="Next"
            body="Lorem ipsum checkpoint body"
            dismissButtonText="Dismiss"
            endButtonText="End"
            index={0}
            onAdvance={handleAdvance}
            onDismiss={handleDismiss}
            onEnd={handleEnd}
            target="#target-element"
            title="Checkpoint title"
            totalCheckpoints={1}
            showDismissButton
          />
        </>,
      );
      expect(screen.getByText('Dismiss', { selector: 'button' })).toBeInTheDocument();
      expect(screen.getByText('End', { selector: 'button' })).toBeInTheDocument();
    });
  });
});
