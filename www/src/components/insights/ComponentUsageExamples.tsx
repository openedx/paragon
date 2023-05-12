import React from 'react';
import PropTypes from 'prop-types';
import UsagesList from './UsagesList';

type ProjectUsagesTypes = {
  filePath: string,
  line: number,
};

export interface IComponentUsageExamples {
  row: {
    original: {
      folderName: string,
      repositoryUrl: string,
      usages: Array<ProjectUsagesTypes>,
    },
  },
  componentName: string,
}

function ComponentUsageExamples({ row, componentName }: IComponentUsageExamples) {
  const { repositoryUrl, usages, folderName: projectName } = row.original;

  return (
    <div className="pgn-doc__component-usage__project">
      <UsagesList
        usages={usages}
        componentName={componentName}
        repositoryUrl={repositoryUrl}
        projectName={projectName}
      />
    </div>
  );
}

ComponentUsageExamples.propTypes = {
  row: PropTypes.shape({
    original: PropTypes.shape({
      folderName: PropTypes.string.isRequired,
      repositoryUrl: PropTypes.string,
      usages: PropTypes.arrayOf(PropTypes.shape({
        filePath: PropTypes.string.isRequired,
        line: PropTypes.number.isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ComponentUsageExamples;
