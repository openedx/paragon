import React from 'react';
import PropTypes from 'prop-types';
import UsagesList from './UsagesList';

type IProjectUsages = {
  filePath: string,
  line: number,
};

export interface IProjectUsageExamples {
  row: {
    original: {
      folderName: string,
      repositoryUrl: string,
      usages: { [key: string]: Array<IProjectUsages> },
    },
  },
}

function ProjectUsageExamples({ row }: IProjectUsageExamples) {
  const { repositoryUrl, usages, folderName: projectName } = row.original;

  const orderedComponentUsages: { [key: string]: Array<IProjectUsages> } = Object.keys(usages)
    .sort().reduce((obj: { [index: string]: any }, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[key] = usages[key];
      return obj;
    }, {});

  return (
    <>
      {Object.keys(usages).length === 0 && (
        <p>This project does not import any Paragon components, but may still use its SCSS styles.</p>
      )}
      {Object.entries(orderedComponentUsages).map(([componentName, usagesArray]) => (
        <div className="pgn-doc__usages-modal mb-4" key={componentName}>
          <h5 className="font-weight-bold">{componentName}</h5>
          <UsagesList
            usages={usagesArray}
            componentName={componentName}
            repositoryUrl={repositoryUrl}
            projectName={projectName}
          />
        </div>
      ))}
    </>
  );
}

ProjectUsageExamples.propTypes = {
  row: PropTypes.shape({
    original: PropTypes.shape({
      folderName: PropTypes.string.isRequired,
      repositoryUrl: PropTypes.string,
      usages: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
        filePath: PropTypes.string.isRequired,
        line: PropTypes.number.isRequired,
      }))).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProjectUsageExamples;
