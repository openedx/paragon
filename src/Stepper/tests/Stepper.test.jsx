import React from 'react';
import { mount } from 'enzyme';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Stepper from '../Stepper';
import StepperHeaderStep from '../StepperHeaderStep';
import { stepsReducer } from '../StepperContext';

const mockWindowSize = { width: 1000, height: 1000 };

jest.mock('../../hooks/useWindowSize', () => () => mockWindowSize);

function Example({
// eslint-disable-next-line react/prop-types
  activeKey, hasStepWithError, hasFourthStep, handleStepClick,
}) {
  return (
    <Stepper activeKey={activeKey}>
      <Stepper.Header />

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
  const wrapper = mount((
    <Example
      activeKey="welcome"
      showError={false}
      hasFourthStep
    />
  ));

  it('renders the activeKey content', () => {
    wrapper.setProps({ activeKey: 'welcome' });
    wrapper.update();
    expect(wrapper.exists('#welcome-content')).toBe(true);
    expect(wrapper.exists('#cats-content')).toBe(false);
    expect(wrapper.exists('#review-content')).toBe(false);
    expect(wrapper.exists('#welcome-actions')).toBe(true);
    expect(wrapper.exists('#cats-actions')).toBe(false);
    expect(wrapper.exists('#review-actions')).toBe(false);

    wrapper.setProps({ activeKey: 'cats' });
    expect(wrapper.exists('#welcome-content')).toBe(false);
    expect(wrapper.exists('#cats-content')).toBe(true);
    expect(wrapper.exists('#review-content')).toBe(false);
    expect(wrapper.exists('#welcome-actions')).toBe(false);
    expect(wrapper.exists('#cats-actions')).toBe(true);
    expect(wrapper.exists('#review-actions')).toBe(false);
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
      wrapper.setProps({ hasFourthStep: true });
      wrapper.update();
      expect(wrapper.find(StepperHeaderStep).length).toBe(4);
      wrapper.setProps({ hasFourthStep: false });
      wrapper.update();
      expect(wrapper.find(StepperHeaderStep).length).toBe(3);
    });

    it('updates the step context if the Step component is updated', () => {
      wrapper.setProps({ hasStepWithError: false });
      wrapper.update();
      const noStepsWithErrors = wrapper.find(StepperHeaderStep).filterWhere((n) => n.props().hasError);
      expect(noStepsWithErrors.length).toBe(0);
      wrapper.setProps({ hasStepWithError: true });
      wrapper.update();
      const oneStepWithErrors = wrapper.find(StepperHeaderStep).filterWhere((n) => n.props().hasError);
      expect(oneStepWithErrors.length).toBe(1);
      // Ensure the step is still in the correct position
      const allSteps = wrapper.find(StepperHeaderStep).getElements();
      expect(allSteps[1].props.hasError).toBeTruthy();
    });
  });

  describe('mobile view', () => {
    beforeAll(() => {
      mockWindowSize.width = 200;
      wrapper.update();
    });

    afterAll(() => {
      mockWindowSize.width = 1000;
      wrapper.update();
    });

    it('renders the activeKey content', () => {
      wrapper.setProps({ activeKey: 'cats' });
      expect(wrapper.exists('#welcome-content')).toBe(false);
      expect(wrapper.exists('#cats-content')).toBe(true);
      expect(wrapper.exists('#review-content')).toBe(false);
    });

    it('renders one header step', () => {
      expect(wrapper.find(StepperHeaderStep).length).toBe(1);
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
    const action1 = { type: 'register ', step: step1 };
    const stepsState1 = stepsReducer([], action1);
    expect(stepsState1).toEqual([step1]);
    const action2 = { type: 'register ', step: step2 };
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
