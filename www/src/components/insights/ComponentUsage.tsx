import React from 'react';
import PropTypes from 'prop-types';
import { DataTable } from '~paragon-react';
import ComponentUsageExamples, { IComponentUsageExamples } from './ComponentUsageExamples';

import { IComponentUsage } from '../../types/types';

function ComponentUsage({ name, componentUsageInProjects }: IComponentUsage) {
  return (
    <div className="mb-5">
      <h3 className="mb-4">{name}</h3>
      <DataTable
        isExpandable
        isSortable
        itemCount={componentUsageInProjects.length} // eslint-disable-line
        data={componentUsageInProjects}
        renderRowSubComponent={({ row }: IComponentUsageExamples) => (
          <ComponentUsageExamples row={row} componentName={name} />
        )}
        columns={[
          {
            id: 'expander',
            Header: DataTable.ExpandAll,
            Cell: DataTable.ExpandRow,
          },
          {
            Header: 'Project Name',
            accessor: 'folderName',
          },
          { Header: 'Paragon Version', accessor: 'version' },
          { Header: 'Instance Count', accessor: 'componentUsageCount' },
        ]}
      >
        <DataTable.Table />
        <DataTable.EmptyTable content="No usages" />
      </DataTable>
    </div>
  );
}

ComponentUsage.propTypes = {
  name: PropTypes.string.isRequired,
  componentUsageInProjects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    folderName: PropTypes.string,
    version: PropTypes.string,
    repositoryUrl: PropTypes.string,
    componentUsageCount: PropTypes.number,
    usages: PropTypes.arrayOf(PropTypes.shape({
      column: PropTypes.number,
      filePath: PropTypes.string,
      line: PropTypes.number,
      version: PropTypes.string,
    })),
  })).isRequired,
};

export default ComponentUsage;
