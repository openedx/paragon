import React, { useEffect, useState } from 'react';
import { DataTable, Skeleton } from '~paragon-react';
import { useCurrentTheme } from '../hooks';

const initialTableData = Array(5).fill({ variableName: <Skeleton />, computedValue: <Skeleton /> });

function ComponentVariablesTable({ rawStylesheet }: ComponentVariablesTableProps) {
  const [tableData, setTableData] = useState<Array<TableRowData>>(initialTableData);
  const currentTheme = useCurrentTheme();

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
  }, [rawStylesheet, currentTheme.name]);

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
