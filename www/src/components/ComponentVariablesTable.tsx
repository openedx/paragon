import React, { useContext, useEffect, useState } from 'react';
import { DataTable } from '~paragon-react';
import { SettingsContext } from '../context/SettingsContext';

function ComponentVariablesTable({ rawStylesheet }: ComponentVariablesTableProps) {
  const [tableData, setTableData] = useState<Array<TableRowData>>([]);
  const { settings: { theme } } = useContext(SettingsContext);

  useEffect(() => {
    setTimeout(() => {
      const bodyStyles = getComputedStyle(document.body);
      const variablesList = rawStylesheet.filter((row) => row.match(/var\((\w|-|_)*\)/g));

      const tableRows = variablesList.map(variable => {
        const variableName = variable.trim();
        const extractedCSSVariables = variableName.match(/(?<=var?\()(.*)(?=\))/g);

        const computedValue = extractedCSSVariables ? bodyStyles.getPropertyValue(extractedCSSVariables[0]) : '';

        return {
          variableName: <code>{variableName}</code>,
          computedValue: <code>{computedValue}</code>,
        };
      });

      setTableData(tableRows);
    }, 1000);
  }, [rawStylesheet, theme]);

  return (
    <DataTable
      data={tableData}
      itemCount={tableData.length}
      columns={[
        {
          Header: 'CSS Variable',
          accessor: 'variableName',
        },
        {
          Header: 'Computed Value',
          accessor: 'computedValue',
        },
      ]}
    >
      <DataTable.Table />
    </DataTable>
  );
}

interface ComponentVariablesTableProps {
  rawStylesheet: string[],
}

interface TableRowData {
  variableName: JSX.Element,
  computedValue: JSX.Element,
}

export default ComponentVariablesTable;
