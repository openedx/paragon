// import {
//   useSortBy, useFilters, useRowSelect, usePagination, useExpanded,
// } from 'react-table';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';

const getTableArgs = ({
  tableOptions, isFilterable, isSortable, isPaginated, isSelectable, isExpandable,
}) => {
  const tableArgs = [
    tableOptions,
  ];
  // if (isFilterable) {
  //   tableArgs.push(useFilters);
  // }
  if (isSortable) {
    tableArgs.push(getSortedRowModel);
  }
  // if (isExpandable) {
  //   tableArgs.push(useExpanded);
  // }
  if (isPaginated) {
    tableArgs.push(getPaginationRowModel);
  }
  // if (isSelectable) {
  //   tableArgs.push(useRowSelect);
  // }

  return tableArgs;
};

export default getTableArgs;
