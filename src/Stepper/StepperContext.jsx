import React, { useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';

export const StepperContext = React.createContext({
  activeKey: '',
});

const stepsReducer = (stepsState, action) => {
  switch (action.type) {
    case 'remove':
      return stepsState.filter(step => step.eventKey !== action.eventKey);
    case 'register':
    default:
      // If is existing step
      if (stepsState.some(step => step.eventKey === action.step.eventKey)) {
        return stepsState.map(step => {
          if (step.eventKey === action.step.eventKey) {
            return action.step;
          }
          return step;
        });
      }
      return [...stepsState, action.step];
  }
};

export function StepperContextProvider({ children, activeKey }) {
  const [steps, dispatch] = useReducer(stepsReducer, []);
  const registerStep = useCallback((step) => dispatch({ step, type: 'register' }), []);
  const removeStep = useCallback((eventKey) => dispatch({ eventKey, type: 'remove' }), []);
  const getIsComplete = (eventKey) => {
    const activeIndex = steps.findIndex(step => step.eventKey === activeKey);
    const thisIndex = steps.findIndex(step => step.eventKey === eventKey);
    return thisIndex < activeIndex;
  };

  return (
    <StepperContext.Provider
      value={{
        activeKey,
        registerStep,
        steps,
        removeStep,
        getIsComplete,
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
