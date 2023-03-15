import React, { useEffect, useState } from 'react';
// @ts-ignore
import { DataTable } from '~paragon-react'; // eslint-disable-line

function ComponentVariablesTable({ rawStylesheet }: ComponentVariablesTableProps) {
  const [tableData, setTableData] = useState<Array<TableRowData>>([]);

  useEffect(() => {
    const bodyStyles = getComputedStyle(document.body);
    const variablesList = rawStylesheet.filter((row) => row.trim().match(/var\((\w|-|_)*\)/g));

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
  }, [rawStylesheet]);

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
  rawStylesheet: any,
}

interface TableRowData {
  variableName: JSX.Element,
  computedValue: JSX.Element,
}

export default ComponentVariablesTable;
