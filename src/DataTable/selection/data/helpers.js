export const getUnselectedPageRows = (selectedRowsIds, currentRows) => {
  const unselectedPageRows = currentRows.filter(row => !selectedRowsIds.includes(row.id));
  return unselectedPageRows;
};

export const getRowIds = rows => rows.map(row => row.id);
