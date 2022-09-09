import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { Hyperlink } from '~paragon-react'; // eslint-disable-line

type IProjectUsages = {
  filePath: string,
  line: number,
};

export interface IProjectUsageExamples {
  row: {
    original: {
      name: string,
      repositoryUrl?: string,
      usages: { [key: string]: Array<IProjectUsages> },
    },
  },
}

const ProjectUsageExamples = ({ row }: IProjectUsageExamples) => {
  const { repositoryUrl, usages } = row.original;

  const orderedComponentUsages: { [key: string]: Array<IProjectUsages> } = Object.keys(usages).sort().reduce(
    (obj: { [index: string]: any }, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[key] = usages[key];
      return obj;
    }, {},
  );

  return (
    <>
      {Object.keys(usages).length === 0 && (
        <p>This project does not import any Paragon components, but may still use its SCSS styles.</p>
      )}
      {Object.entries(orderedComponentUsages).map(([componentName, usagesArray]) => (
        <div className="pgn-doc__usages-modal mb-4" key={componentName}>
          <h5 className="font-weight-bold">{componentName}</h5>
          <ul className="list-unstyled">
            {usagesArray.map((usage) => (
              <li key={`${usage.filePath}L#${usage.line}`}>
                {repositoryUrl ? (
                  <>
                    <Hyperlink
                      destination={`${repositoryUrl}/${usage.filePath}#L${usage.line}`}
                      target="_blank"
                    >
                      {usage.filePath}
                    </Hyperlink>
                    {' '}(line {usage.line})
                  </>
                ) : (
                  <>{usage.filePath} (line {usage.line})</>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

ProjectUsageExamples.propTypes = {
  row: PropTypes.shape({
    original: PropTypes.shape({
      name: PropTypes.string.isRequired,
      repositoryUrl: PropTypes.string,
      usages: PropTypes.arrayOf(PropTypes.shape({
        filePath: PropTypes.string.isRequired,
        line: PropTypes.number.isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProjectUsageExamples;
