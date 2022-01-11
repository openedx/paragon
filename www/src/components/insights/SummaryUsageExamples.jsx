import React from 'react';
import PropTypes from 'prop-types';
import { Hyperlink } from '~paragon-react';

const SummaryUsageExamples = ({ row }) => {
  const componentUsages = row.original.usages;
  return componentUsages.map(({
    name: projectName,
    usages: projectUsages,
    repositoryUrl,
  }) => (
    <div className="pgn-doc__summary-usages__project mb-4" key={projectName}>
      <h5 className="font-weight-bold">{projectName}</h5>
      <ul className="list-unstyled">
        {projectUsages.map(({
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
  ));
};

SummaryUsageExamples.propTypes = {
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

export default SummaryUsageExamples;
