import React, {
  useCallback, useEffect, useReducer, useState,
} from 'react';
import PropTypes from 'prop-types';

export const StepperContext = React.createContext({
  activeKey: '',
});

const stepsReducer = (stepsState, action) => {
  let newStepsState = [];
  switch (action.type) {
    case 'remove':
      return stepsState.filter(step => step.eventKey !== action.eventKey);
    case 'register':
    default:
      // If it is existing step
      if (stepsState.some(step => step.eventKey === action.step.eventKey)) {
        newStepsState = stepsState.map(step => {
          if (step.eventKey === action.step.eventKey) {
            return action.step;
          }
          return step;
        });
      } else {
        newStepsState = [...stepsState, action.step];
      }

      // If using the index prop
      if (stepsState.some(step => step.index)) {
        return newStepsState.sort((a, b) => (
          a.index > b.index ? 1 : -1
        ));
      }
      return newStepsState;
  }
};

export function StepperContextProvider({ children, activeKey }) {
  const [steps, dispatch] = useReducer(stepsReducer, []);
  const [currentBoundary, setCurrentBoundary] = useState(0);
  const registerStep = useCallback((step) => dispatch({ step, type: 'register' }), []);
  const removeStep = useCallback((eventKey) => dispatch({ eventKey, type: 'remove' }), []);

  const getIsViewed = (index) => index <= currentBoundary;

  useEffect(() => {
    const activeIndex = steps.findIndex(step => step.eventKey === activeKey);
    setCurrentBoundary((prevState) => (activeIndex >= prevState ? activeIndex : prevState));
  }, [activeKey, steps]);

  return (
    <StepperContext.Provider
      value={{
        activeKey,
        registerStep,
        steps,
        removeStep,
        getIsViewed,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
}

StepperContextProvider.propTypes = {
  /** Specifies the content of the `ContextProvider`. */
  children: PropTypes.node.isRequired,
  /** Specifies the current step of the `Stepper`. */
  activeKey: PropTypes.node.isRequired,
};

export { stepsReducer };
