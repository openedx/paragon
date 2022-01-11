import {
  useSortBy, useFilters, useRowSelect, usePagination, useExpanded,
} from 'react-table';

const getTableArgs = ({
  tableOptions, isFilterable, isSortable, isPaginated, isSelectable, isExpandable,
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
  if (isExpandable) {
    tableArgs.push(useExpanded);
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
