import { useReducer } from 'react';

const checkboxValuesReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.value];
    case 'remove':
      return state.filter(value => value !== action.value);
    case 'set':
      return [...action.value];
    case 'clear':
    default:
      return [];
  }
};

const useCheckboxSetValues = (initialState = []) => {
  const [state, dispatch] = useReducer(checkboxValuesReducer, initialState);

  const dispatchers = {
    add: (value) => dispatch({ type: 'add', value }),
    remove: (value) => dispatch({ type: 'remove', value }),
    set: (value) => dispatch({ type: 'set', value }),
    clear: () => dispatch({ type: 'clear' }),
  };
  return [state, dispatchers];
};

export default useCheckboxSetValues;
