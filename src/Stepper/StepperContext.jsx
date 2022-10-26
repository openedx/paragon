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
    case 'checked':
      return;
    case 'register':
    default:
      // If is existing step
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
  const [checked, setChecked] = useState([]);
  const registerStep = useCallback((step) => dispatch({ step, type: 'register' }), []);
  const removeStep = useCallback((eventKey) => dispatch({ eventKey, type: 'remove' }), []);
  const getIsChecked = (index) => checked.includes(index + 1);
  const getIsComplete = (eventKey) => {
    const activeIndex = steps.findIndex(step => step.eventKey === activeKey);
    const thisIndex = steps.findIndex(step => step.eventKey === eventKey);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => setChecked([...checked, activeIndex]), [activeIndex]);

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
        getIsChecked,
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
