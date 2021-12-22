import React, { useContext } from 'react';
import {
  DataTableContext, Icon, IconButtonToggle, IconButtonWithTooltip,
} from '..';
import { GridView, ListView } from '../../icons';

const DataViewToggle = () => {
  const {
    enableDataViewToggle,
    onDataViewToggle,
  } = useContext(DataTableContext);
  if (!enableDataViewToggle) { return null; }
  return (
    <div className="pgn__data-table-dataview-toggle">
      <IconButtonToggle activeValue="card" onChange={value => onDataViewToggle(value)}>
        <IconButtonWithTooltip tooltipContent="Card view" value="card" src={GridView} iconAs={Icon} alt="Card" />
        <IconButtonWithTooltip tooltipContent="List view" value="list" src={ListView} iconAs={Icon} alt="List" />
      </IconButtonToggle>
    </div>
  );
};

export default DataViewToggle;
