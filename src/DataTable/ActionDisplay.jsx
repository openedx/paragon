import React, { useContext } from 'react';
import BulkActions from './BulkActions';
import TableActions from './TableActions';
import DataTableContext from './DataTableContext';

// handles layout for filters, status, and bulk actions
const ActionDisplay = () => {
  const { bulkActions, tableActions, selectedFlatRows } = useContext(DataTableContext);
  const noBulkActions = bulkActions?.length < 1;
  const noTableActions = tableActions?.length < 1;
  const noActionsAvailable = noBulkActions && noTableActions;
  const noRowsSelected = selectedFlatRows?.length < 1;

  // return null if there are no actions or if there are only bulk actions and no selected rows
  if (noActionsAvailable || (noTableActions && noRowsSelected)) {
    return null;
  }
  if (!noRowsSelected) {
    return <BulkActions />;
  }
  return <TableActions />;
};

export default ActionDisplay;
