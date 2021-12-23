import React, { useContext, useState } from 'react';
import {
  DataTableContext, Icon, IconButtonToggle, IconButtonWithTooltip,
} from '..';
import { GridView, ListView } from '../../icons';

const DataViewToggle = () => {
  const {
    dataViewToggleOptions: {
      isDataViewToggleEnabled,
      onDataViewToggle,
      defaultActiveStateValue,
    },
  } = useContext(DataTableContext);

  if (!isDataViewToggleEnabled) { return null; }

  const [activeValue, setActiveValue] = useState(defaultActiveStateValue || 'card');
  const handleOnChange = value => {
    setActiveValue(value);
    if (onDataViewToggle) {
      onDataViewToggle(value);
    }
  };
  return (
    <div role="group" className="pgn__data-table-dataview-toggle">
      <IconButtonToggle
        activeValue={activeValue}
        onChange={handleOnChange}
      >
        <IconButtonWithTooltip tooltipContent="Card view" value="card" src={GridView} iconAs={Icon} alt="Card" />
        <IconButtonWithTooltip tooltipContent="List view" value="list" src={ListView} iconAs={Icon} alt="List" />
      </IconButtonToggle>
    </div>
  );
};

export default DataViewToggle;
