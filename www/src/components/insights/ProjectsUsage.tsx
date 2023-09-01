import React from 'react';
import { DataTable } from '~paragon-react';
import ProjectUsageExamples, { IProjectUsageExamples } from './ProjectUsageExamples';

import getDependentProjectsUsages from '../../utils/getDependentProjectsUsages';

function ProjectsUsage() {
  const dependentProjects = getDependentProjectsUsages();

  return (
    <div className="pt-5 mb-5">
      <h3 className="mb-4">Projects in Open edX consuming Paragon</h3>
      <DataTable
        isExpandable
        isSortable
        itemCount={dependentProjects.length}
        data={dependentProjects}
        renderRowSubComponent={({ row }: IProjectUsageExamples) => <ProjectUsageExamples row={row} />}
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
          { Header: 'Import Count', accessor: 'count' },
        ]}
      >
        <DataTable.TableControlBar />
        <DataTable.Table />
        <DataTable.EmptyTable content="No projects" />
        <DataTable.TableFooter />
      </DataTable>
    </div>
  );
}

export default ProjectsUsage;
