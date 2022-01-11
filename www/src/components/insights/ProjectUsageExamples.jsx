import React from 'react';
import PropTypes from 'prop-types';
import { Hyperlink } from '~paragon-react';

const ProjectUsageExamples = ({ row }) => {
  const componentUsages = row.original.usages;
  const repositoryUrl = row.original.repositoryUrl;
  return (
    <>
      {Object.keys(componentUsages).length === 0 && (
        <p>This project does not import any Paragon components, but may still use its SCSS styles.</p>
      )}
      {Object.entries(componentUsages).map(([componentName, componentUsages]) => (
        <div className="pgn-doc__usages-modal mb-4" key={componentName}>
          <h5 className="font-weight-bold">{componentName}</h5>
          <ul className="list-unstyled">
            {componentUsages.map(({
              filePath,
              line,
            }) => (
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
