import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { Hyperlink } from '~paragon-react'; // eslint-disable-line

export interface IProjectUsageExamples {
  row: {
    original: {
      name: string,
      repositoryUrl?: string,
      usages: {},
    },
  },
}

interface IProjectUsages {
  filePath: string,
  line: number,
}

const ProjectUsageExamples = ({ row }: IProjectUsageExamples) => {
  const { repositoryUrl, usages } = row.original;
  const repositoryUrl = row.original;

  const orderedComponentUsages = Object.keys(usages).sort().reduce(
    (obj, key) => {
      obj[key] = usages[key];
      return obj;
    }, {}
  );

  return (
    <>
      {Object.keys(usages).length === 0 && (
        <p>This project does not import any Paragon components, but may still use its SCSS styles.</p>
      )}
      {Object.entries(usages).map(([componentName, usages]) => (
        <div className="pgn-doc__usages-modal mb-4" key={componentName}>
          <h5 className="font-weight-bold">{componentName}</h5>
          <ul className="list-unstyled">
            {usages.map(({
              filePath,
              line,
            }: IProjectUsages) => (
              <li key={`${filePath}L#${line}`}>
                {repositoryUrl ? (
                  <>
                    <Hyperlink
                      destination={`${repositoryUrl}/${filePath}#L${line}`}
                      target="_blank"
                    >
                      {filePath}
                    </Hyperlink>
                    {' '}(line {line})
                  </>
                ) : (
                  <>{filePath} (line {line})</>
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
