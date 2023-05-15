import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Stepper from '../Stepper';
import { stepsReducer } from '../StepperContext';

const mockWindowSize = { width: 1000, height: 1000 };

jest.mock('../../hooks/useWindowSize', () => () => mockWindowSize);

function Example({
  // eslint-disable-next-line react/prop-types
  activeKey, hasStepWithError, hasFourthStep, handleStepClick,
}) {
  return (
    <Stepper activeKey={activeKey}>
      <Stepper.Header compactWidth="sm" />

      <Stepper.Step
        eventKey="welcome"
        title="Welcome"
        index={0}
        onClick={handleStepClick ? () => handleStepClick('welcome') : undefined}
      >
        <span id="welcome-content">Welcome content</span>
      </Stepper.Step>
      <Stepper.Step
        eventKey="cats"
        title="Cat"
        hasError={hasStepWithError}
        description={hasStepWithError ? 'Im an error description' : undefined}
        index={1}
        onClick={handleStepClick ? () => handleStepClick('cats') : undefined}
      >
        <span id="cats-content">Cat content</span>
      </Stepper.Step>
      <Stepper.Step eventKey="review" title="Review" index={2}>
        <span id="review-content">Review content</span>
      </Stepper.Step>
      {hasFourthStep && (
        <Stepper.Step eventKey="extra" title="Extra" index={3}>
          <span id="extra-content">Extra content</span>
        </Stepper.Step>
      )}

      <Stepper.ActionRow eventKey="welcome">
        <span id="welcome-actions">Welcome actions content</span>
      </Stepper.ActionRow>
      <Stepper.ActionRow eventKey="cats">
        <span id="cats-actions">Cat actions content</span>
      </Stepper.ActionRow>
      <Stepper.ActionRow eventKey="review">
        <span id="review-actions">Review actions content</span>
      </Stepper.ActionRow>
    </Stepper>
  );
}

describe('Stepper', () => {
  it('renders the activeKey content', () => {
    const { rerender } = render(
      <Example activeKey="welcome" showError={false} hasFourthStep />,
    );

    expect(screen.getByText('Welcome content')).toBeInTheDocument();
    expect(screen.queryByText('Cat content')).not.toBeInTheDocument();
    expect(screen.queryByText('Review content')).not.toBeInTheDocument();
    expect(screen.getByText('Welcome actions content')).toBeInTheDocument();
    expect(screen.queryByText('Cat actions content')).not.toBeInTheDocument();
    expect(screen.queryByText('Review actions content')).not.toBeInTheDocument();

    rerender(
      <Example activeKey="cats" showError={false} hasFourthStep />,
    );

    expect(screen.getByText('Cat content')).toBeInTheDocument();
    expect(screen.queryByText('Welcome content')).not.toBeInTheDocument();
    expect(screen.queryByText('Review content')).not.toBeInTheDocument();
    expect(screen.queryByText('Welcome actions content')).not.toBeInTheDocument();
    expect(screen.getByText('Cat actions content')).toBeInTheDocument();
    expect(screen.queryByText('Review actions content')).not.toBeInTheDocument();
  });

  describe('clickable variant', () => {
    it('ignores onClick function if Step has not been visited yet', async () => {
      const onStepClick = jest.fn();
      render(
        <Example activeKey="welcome" showError={false} hasFourthStep handleStepClick={onStepClick} />,
      );

      await userEvent.click(screen.getByText('Cat'));
      expect(onStepClick).toHaveBeenCalledTimes(0);
    });

    it('invokes onClick function if Step has been visited', async () => {
      const onStepClick = jest.fn();
      render(
        <Example activeKey="review" showError={false} hasFourthStep handleStepClick={onStepClick} />,
      );

      await userEvent.click(screen.getByText('Welcome'));
      expect(onStepClick).toHaveBeenCalledTimes(1);
    });
  });
  describe('stepper header compact view', () => {
    beforeEach(() => {
      mockWindowSize.width = 200;
    });

    afterEach(() => {
      mockWindowSize.width = 1000;
    });

    const step = '.flex-grow-1';

    it('renders the compact view of stepper header', () => {
      const { container } = render(
        <Example activeKey="cats" />,
      );

      expect(screen.getByText('Cat')).toBeInTheDocument();
      expect(container.querySelector(step)).toBeInTheDocument();
    });

    it('renders the standard view when the window is outside of the max width for compact view', () => {
      mockWindowSize.width = 800;

      const { container } = render(
        <Example activeKey="cats" />,
      );

      expect(container.querySelector(step)).not.toBeInTheDocument();
    });

    it('renders the compact view when the desired max width is medium', () => {
      const { container } = render(
        <Example compactWidth="md" activeKey="cats" />,
      );

      mockWindowSize.width = 768;

      expect(container.querySelector(step)).toBeInTheDocument();
    });
  });

  describe('clickable variant', () => {
    const onStepClick = jest.fn();

    it('ignores onClick function if Step has not been visited yet', () => {
      render(<Example activeKey="welcome" showError={false} hasFourthStep handleStepClick={onStepClick} />);
      const step = screen.getAllByRole('listitem').find(listitem => listitem.textContent.includes('Cat'));
      fireEvent.click(step);
      expect(onStepClick).toHaveBeenCalledTimes(0);
    });

    it('invokes onClick function if Step has been visited', () => {
      render(<Example activeKey="review" showError={false} hasFourthStep handleStepClick={onStepClick} />);
      const step = screen.getAllByRole('button').find(button => button.textContent.includes('Welcome'));
      fireEvent.click(step);
      expect(onStepClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('clickable variant', () => {
    const onStepClick = jest.fn();

    it('ignores onClick function if Step has not been visited yet', () => {
      render(<Example activeKey="welcome" showError={false} hasFourthStep handleStepClick={onStepClick} />);
      const step = screen.getAllByRole('listitem').find(listitem => listitem.textContent.includes('Cat'));
      fireEvent.click(step);
      expect(onStepClick).toHaveBeenCalledTimes(0);
    });

    it('invokes onClick function if Step has been visited', () => {
      render(<Example activeKey="review" showError={false} hasFourthStep handleStepClick={onStepClick} />);
      const step = screen.getAllByRole('button').find(button => button.textContent.includes('Welcome'));
      fireEvent.click(step);
      expect(onStepClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('tab updates', () => {
    it('removes a step if a step child is removed', () => {
      const { rerender, getAllByTestId } = render(
        <Example activeKey="welcome" hasFourthStep />,
      );

      expect(getAllByTestId('step').length).toBe(4);

      rerender(
        <Example activeKey="welcome" hasFourthStep={false} />,
      );

      expect(getAllByTestId('step').length).toBe(3);
    });

    it('updates the step context if the Step component is updated', () => {
      const {
        rerender, getAllByTestId, queryAllByTestId,
      } = render(
        <Example activeKey="welcome" hasStepWithError={false} />,
      );

      expect(queryAllByTestId('step-error')).toHaveLength(0);

      rerender(
        <Example activeKey="welcome" hasStepWithError />,
      );

      const oneStepWithErrors = getAllByTestId('step-error').length;
      expect(oneStepWithErrors).toBe(1);

      // Ensure the step is still in the correct position
      const allSteps = getAllByTestId('step');
      expect(allSteps[1].classList.contains('pgn__stepper-header-step-has-error')).toBeTruthy();
    });
  });

  describe('mobile view', () => {
    beforeEach(() => {
      mockWindowSize.width = 200;
    });

    afterEach(() => {
      mockWindowSize.width = 1000;
    });

    it('renders the activeKey content', () => {
      const { container } = render(
        <Example activeKey="cats" />,
      );

      expect(container.querySelector('#welcome-content')).not.toBeInTheDocument();
      expect(screen.getByText('Cat content')).toBeInTheDocument();
      expect(container.querySelector('#review-content')).not.toBeInTheDocument();
    });

    it('renders one header step', () => {
      const { getAllByTestId } = render(
        <Example activeKey="cats" />,
      );

      expect(getAllByTestId('step').length).toBe(1);
    });
  });
});

describe('stepsReducer', () => {
  const baseStepObject = {
    title: 'A Step',
    eventKey: 'step-1',
    description: '',
    hasError: false,
  };
  const step1 = { ...baseStepObject, eventKey: 'step-1' };
  const step2 = { ...baseStepObject, eventKey: 'step-2' };
  const step3 = { ...baseStepObject, eventKey: 'step-3' };
  const step2WithError = { ...step2, hasError: true };

  it('registers a steps in order', () => {
    const action1 = { type: 'register', step: step1 };
    const stepsState1 = stepsReducer([], action1);
    expect(stepsState1).toEqual([step1]);
    const action2 = { type: 'register', step: step2 };
    const stepsState2 = stepsReducer(stepsState1, action2);
    expect(stepsState2).toEqual([step1, step2]);
  });

  it('removes a step', () => {
    const action = { type: 'remove', eventKey: step2.eventKey };
    const steps = stepsReducer([step1, step2], action);
    expect(steps).toEqual([step1]);
  });

  it('updates a step', () => {
    const action = { type: 'register', step: step2WithError };
    const steps = stepsReducer([step1, step2, step3], action);
    expect(steps).toEqual([step1, step2WithError, step3]);
  });
});
