import React, { useEffect, useState } from 'react';
// @ts-ignore
import { DataTable } from '~paragon-react'; // eslint-disable-line

function ComponentVariablesTable({ rawStylesheet }: ComponentVariablesTableProps) {
  const [tableData, setTableData] = useState<Array<TableRowData>>([]);

  useEffect(() => {
    const bodyStyles = getComputedStyle(document.body);
    const variablesList = rawStylesheet.trim().split('\n').filter((row) => row.startsWith('$'));

    const tableRows = variablesList.map(row => {
      const [property, value] = row.split(':').map((item) => item.trim());
      const extractedCSSVariables = value.match(/(?<=var?\()(.*)(?=\))/g);
      const computedValue = extractedCSSVariables ? bodyStyles.getPropertyValue(extractedCSSVariables[0]) : '';

      return {
        propertyName: <code>{property}</code>,
        propertyValue: <code>{value}</code>,
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
          Header: 'SCSS Property',
          accessor: 'propertyName',
        },
        {
          Header: 'Value',
          accessor: 'propertyValue',
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
  rawStylesheet: string,
}

interface TableRowData {
  propertyName: JSX.Element,
  propertyValue: JSX.Element,
  computedValue: JSX.Element,
}

export default ComponentVariablesTable;
