/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import DataTableContext from './DataTableContext';

export const useRows = () => {
  const {
    getTableProps, prepareRow, page, rows, headerGroups, getTableBodyProps,
  } = useContext(DataTableContext);

  const displayRows = page || rows;

  return {
    getTableProps, prepareRow, displayRows, headerGroups, getTableBodyProps,
  };
};
