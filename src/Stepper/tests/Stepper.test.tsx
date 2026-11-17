import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Stepper from '../Stepper';
import StepperHeader, { PageCountProps } from '../StepperHeader';
import StepperHeaderStep from '../StepperHeaderStep';
import StepperStep from '../StepperStep';
import { StepperContext, StepperContextValue, stepsReducer } from '../StepperContext';

interface MockWindowSize {
  width: number | undefined;
  height: number;
}

const mockWindowSize: MockWindowSize = { width: 1000, height: 1000 };

jest.mock('../../hooks/useWindowSizeHook', () => () => mockWindowSize);

function CustomPageCount({ activeStepIndex, totalSteps }: PageCountProps) {
  return <span>{`Custom ${activeStepIndex + 1}/${totalSteps}`}</span>;
}

interface ExampleProps {
  activeKey: string;
  hasStepWithError?: boolean;
  hasFourthStep?: boolean;
  handleStepClick?: (key: string) => void;
  compactWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

function Example({
  activeKey,
  hasStepWithError,
  hasFourthStep,
  handleStepClick,
  compactWidth = 'sm',
}: ExampleProps) {
  return (
    <Stepper activeKey={activeKey}>
      <Stepper.Header compactWidth={compactWidth} />

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
      <Example activeKey="welcome" hasFourthStep />,
    );

    expect(screen.getByText('Welcome content')).toBeInTheDocument();
    expect(screen.queryByText('Cat content')).not.toBeInTheDocument();
    expect(screen.queryByText('Review content')).not.toBeInTheDocument();
    expect(screen.getByText('Welcome actions content')).toBeInTheDocument();
    expect(screen.queryByText('Cat actions content')).not.toBeInTheDocument();
    expect(screen.queryByText('Review actions content')).not.toBeInTheDocument();

    rerender(
      <Example activeKey="cats" hasFourthStep />,
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
        <Example activeKey="welcome" hasFourthStep handleStepClick={onStepClick} />,
      );

      await userEvent.click(screen.getByText('Cat'));
      expect(onStepClick).toHaveBeenCalledTimes(0);
    });

    it('invokes onClick function if Step has been visited', async () => {
      const onStepClick = jest.fn();
      render(
        <Example activeKey="review" hasFourthStep handleStepClick={onStepClick} />,
      );

      await userEvent.click(screen.getByText('Welcome'));
      expect(onStepClick).toHaveBeenCalledTimes(1);
    });

    it('renders an error icon in a clickable Step with errors', async () => {
      const onStepClick = jest.fn();
      render(
        <Example activeKey="review" hasStepWithError handleStepClick={onStepClick} />,
      );

      const catStepButton = screen.getByRole('button', { name: 'Cat step' });
      expect(catStepButton).toHaveClass('pgn__stepper-header-step-has-error');
      expect(screen.getByTestId('step-error')).toBeInTheDocument();

      await userEvent.click(catStepButton);
      expect(onStepClick).toHaveBeenCalledWith('cats');
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

    it('renders nothing when the activeKey does not match any step', () => {
      const { container } = render(
        <Example activeKey="non-existent" />,
      );

      expect(container.querySelector('.pgn__stepper-header')).not.toBeInTheDocument();
    });

    it('renders a custom PageCountComponent', () => {
      render(
        <Stepper activeKey="b">
          <Stepper.Header PageCountComponent={CustomPageCount} className="custom-header" />
          <Stepper.Step eventKey="a" title="A">A content</Stepper.Step>
          <Stepper.Step eventKey="b" title="B">B content</Stepper.Step>
        </Stepper>,
      );

      expect(screen.getByText('Custom 2/2')).toBeInTheDocument();
    });

    it('renders the standard view when the window width is undefined', () => {
      mockWindowSize.width = undefined;

      const { container } = render(
        <Example activeKey="cats" />,
      );

      expect(container.querySelector(step)).not.toBeInTheDocument();
      expect(screen.getAllByTestId('step')).toHaveLength(3);
    });

    it('always renders the compact view when compactWidth has no max width', () => {
      mockWindowSize.width = 5000;

      const { container } = render(
        <Example compactWidth="xxl" activeKey="cats" />,
      );

      expect(container.querySelector(step)).toBeInTheDocument();
    });

    it('falls back to the small breakpoint for an unknown compactWidth', () => {
      mockWindowSize.width = 700;

      const { container } = render(
        // @ts-expect-error testing an invalid compactWidth value
        <Example compactWidth="unknown" activeKey="cats" />,
      );

      expect(container.querySelector(step)).toBeInTheDocument();
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
    const action1 = { type: 'register' as const, step: step1 };
    const stepsState1 = stepsReducer([], action1);
    expect(stepsState1).toEqual([step1]);
    const action2 = { type: 'register' as const, step: step2 };
    const stepsState2 = stepsReducer(stepsState1, action2);
    expect(stepsState2).toEqual([step1, step2]);
  });

  it('removes a step', () => {
    const action = { type: 'remove' as const, eventKey: step2.eventKey };
    const steps = stepsReducer([step1, step2], action);
    expect(steps).toEqual([step1]);
  });

  it('updates a step', () => {
    const action = { type: 'register' as const, step: step2WithError };
    const steps = stepsReducer([step1, step2, step3], action);
    expect(steps).toEqual([step1, step2WithError, step3]);
  });

  it('sorts steps by index when steps use the index prop', () => {
    const indexedStep1 = { ...step1, index: 1 };
    const indexedStep2 = { ...step2, index: 2 };
    const stepWithoutIndex = { ...step3 };
    const action = { type: 'register' as const, step: stepWithoutIndex };
    const steps = stepsReducer([indexedStep2, indexedStep1], action);
    expect(steps).toEqual([stepWithoutIndex, indexedStep1, indexedStep2]);
  });
});

describe('StepperContext default value', () => {
  it('provides no-op defaults when used outside of a Stepper', () => {
    let contextValue: StepperContextValue | undefined;
    function Consumer() {
      contextValue = React.useContext(StepperContext);
      return null;
    }
    render(<Consumer />);

    expect(contextValue!.activeKey).toBe('');
    expect(contextValue!.steps).toEqual([]);
    expect(contextValue!.getIsViewed(0)).toBe(false);
    expect(() => contextValue!.registerStep({ eventKey: 'a', title: 'A' })).not.toThrow();
    expect(() => contextValue!.removeStep('a')).not.toThrow();
  });

  it('renders Stepper subcomponents without a provider', () => {
    const { unmount } = render(
      <>
        <StepperHeader />
        <StepperStep eventKey="a" title="A">A content</StepperStep>
      </>,
    );

    expect(screen.queryByText('A content')).not.toBeInTheDocument();
    expect(screen.queryAllByTestId('step')).toHaveLength(0);
    expect(() => unmount()).not.toThrow();
  });
});

describe('StepperHeaderStep', () => {
  it('renders a non-active, non-error step by default', () => {
    const onClick = jest.fn();
    render(<StepperHeaderStep index={0} title="Default step" onClick={onClick} />);

    const step = screen.getByTestId('step');
    expect(step).not.toHaveClass('pgn__stepper-header-step-active');
    expect(step).not.toHaveClass('pgn__stepper-header-step-has-error');
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
