import {
  useSortBy, useFilters, useRowSelect, usePagination,
} from 'react-table';

const getTableArgs = ({
  tableOptions, isFilterable, isSortable, isPaginated, isSelectable,
}) => {
  const tableArgs = [
    tableOptions,
  ];
  if (isFilterable) {
    tableArgs.push(useFilters);
  }
  if (isSortable) {
    tableArgs.push(useSortBy);
  }
  if (isPaginated) {
    tableArgs.push(usePagination);
  }
  if (isSelectable) {
    tableArgs.push(useRowSelect);
  }

  return tableArgs;
};

export default getTableArgs;
