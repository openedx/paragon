import React, { useContext } from 'react';
import BulkActions from './BulkActions';
import TableActions from './TableActions';
import DataTableContext from './DataTableContext';

// handles display logic for actions
function ActionDisplay() {
  const { bulkActions, tableActions, selectedFlatRows } = useContext(DataTableContext);
  const noBulkActions = typeof bulkActions !== 'function' && bulkActions?.length < 1;
  const noTableActions = typeof tableActions !== 'function' && tableActions?.length < 1;
  const noActionsAvailable = noBulkActions && noTableActions;
  const hasRowsSelected = selectedFlatRows?.length > 0;

  // return null if there are no actions or if there are only bulk actions and no selected rows
  if (noActionsAvailable || (noTableActions && !hasRowsSelected)) {
    return null;
  }
  if (!noBulkActions && hasRowsSelected) {
    return <BulkActions />;
  }
  return <TableActions />;
}

export default ActionDisplay;
