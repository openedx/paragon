export const getSelectedPageRows = (selectedRowsIds, currentRows) => {
  const selectedPageRows = currentRows.filter(row => selectedRowsIds.includes(row.id));
  return selectedPageRows;
};

export const getUnselectedPageRows = (selectedRowsIds, currentRows) => {
  const unselectedPageRows = currentRows.filter(row => !selectedRowsIds.includes(row.id));
  return unselectedPageRows;
};

export const checkEveryPageRowSelected = (selectedRowsIds, currentRows) => {
  const isEveryPageRowSelected = currentRows.every(row => selectedRowsIds.includes(row.id));
  return isEveryPageRowSelected;
};

export const getRowIds = rows => rows.map(row => row.id);
