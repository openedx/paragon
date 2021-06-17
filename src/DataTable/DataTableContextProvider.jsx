import React, { useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

import DataTableContext from './DataTableContext';
import selectionsReducer, { initialState } from './selection/data/reducer';

const DataTableContextProvider = ({ value, children }) => {
  const [selections, dispatch] = useReducer(selectionsReducer, initialState);

  const contextValue = useMemo(
    () => {
      const newValue = {
        controlledTableSelections: [selections, dispatch],
      };
      if (selections.selectedRows.length > 0) {
        newValue.selectedFlatRows = selections.selectedRows;
      }
      Object.assign(newValue, value);
      return newValue;
    },
    [value, selections, dispatch],
  );

  return (
    <DataTableContext.Provider value={contextValue}>
      {children}
    </DataTableContext.Provider>
  );
};

DataTableContextProvider.propTypes = {
  value: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
};

export default DataTableContextProvider;
