import React from 'react';
import PropTypes from 'prop-types';
import UsagesList from './UsagesList';

export interface ISummaryUsageExamples {
  row: {
    original: {
      usages: [],
      name: string
    },
  }
}

function SummaryUsageExamples({ row }: ISummaryUsageExamples) {
  interface IComponentUsages {
    folderName: string,
    usages: [],
    repositoryUrl: string,
  }

  const { usages: componentUsages, name: componentName } = row.original;

  const componentUsagesExample = componentUsages.map(({
    folderName: projectName,
    usages: projectUsages,
    repositoryUrl,
  }: IComponentUsages) => (
    <div className="pgn-doc__summary-usages__project mb-4" key={projectName}>
      <h5 className="font-weight-bold">{projectName}</h5>
      <UsagesList
        usages={projectUsages}
        componentName={componentName}
        repositoryUrl={repositoryUrl}
        projectName={projectName}
      />
    </div>
  ));

  return <div>{componentUsagesExample}</div>;
}

SummaryUsageExamples.propTypes = {
  row: PropTypes.shape({
    original: PropTypes.shape({
      name: PropTypes.string.isRequired,
      usages: PropTypes.arrayOf(PropTypes.shape({
        folderName: PropTypes.string.isRequired,
        repositoryUrl: PropTypes.string.isRequired,
        usages: PropTypes.arrayOf(PropTypes.shape({
          filePath: PropTypes.string.isRequired,
          line: PropTypes.number.isRequired,
        })),
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

export default SummaryUsageExamples;
