/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import { TableContext } from './TableContext';

export const useRows = (tableName) => {
  const {
    getTableProps, prepareRow, page, rows, headerGroups, getTableBodyProps,
  } = useContext(TableContext).getTableInstance(tableName);

  const displayRows = page || rows;

  return {
    getTableProps, prepareRow, displayRows, headerGroups, getTableBodyProps,
  };
};
