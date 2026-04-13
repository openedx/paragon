import React, {
  useCallback, useEffect, useReducer, useState,
} from 'react';

export interface Step {
  eventKey: string;
  title: string;
  description?: string;
  hasError?: boolean;
  index?: number;
  onClick?: () => void;
}

export interface StepperContextValue {
  activeKey: string;
  registerStep: (step: Step) => void;
  steps: Step[];
  removeStep: (eventKey: string) => void;
  getIsViewed: (index: number) => boolean;
}

export const StepperContext = React.createContext<StepperContextValue>({
  activeKey: '',
  registerStep: () => {},
  steps: [],
  removeStep: () => {},
  getIsViewed: () => false,
});

type StepsAction =
  | { type: 'register'; step: Step }
  | { type: 'remove'; eventKey: string };

const stepsReducer = (stepsState: Step[], action: StepsAction): Step[] => {
  let newStepsState: Step[] = [];
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
      if (stepsState.some(step => step.index !== undefined)) {
        return newStepsState.sort((a, b) => (
          (a.index || 0) > (b.index || 0) ? 1 : -1
        ));
      }
      return newStepsState;
  }
};

export interface StepperContextProviderProps {
  /** Specifies the content of the `ContextProvider`. */
  children: React.ReactNode;
  /** Specifies the current step of the `Stepper`. */
  activeKey: string;
}

export function StepperContextProvider({ children, activeKey }: StepperContextProviderProps) {
  const [steps, dispatch] = useReducer(stepsReducer, []);
  const [currentBoundary, setCurrentBoundary] = useState(0);
  const registerStep = useCallback((step: Step) => dispatch({ step, type: 'register' }), []);
  const removeStep = useCallback((eventKey: string) => dispatch({ eventKey, type: 'remove' }), []);

  const getIsViewed = (index: number) => index <= currentBoundary;

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

export { stepsReducer };
