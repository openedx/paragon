import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TableContext = createContext({});

export default function TableData({ children }) {
  const [tableInstances, setTableInstances] = useState({});
  const setTableInstance = (tableName, tableInstance) => {
    if (!tableName) {
      throw new Error('No table name provided to setTableInstance');
    }
    setTableInstances({ ...tableInstances, [tableName]: tableInstance });
  };

  const getTableInstance = (tableName) => {
    if (!tableName) {
      throw new Error('No table name provided to getTableInstance');
    }
    return tableInstances[tableName] || {};
  };

  return (
    <TableContext.Provider
      value={{
        getTableInstance, setTableInstance,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

TableData.propTypes = {
  children: PropTypes.node.isRequired,
};
