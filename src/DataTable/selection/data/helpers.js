export const getUnselectedPageRows = (selectedRowsIds, currentPageRows = []) => {
  const unselectedPageRows = currentPageRows.filter(row => !selectedRowsIds.includes(row.id));
  return unselectedPageRows;
};

export const getRowIds = rows => rows.map(row => row.id);
