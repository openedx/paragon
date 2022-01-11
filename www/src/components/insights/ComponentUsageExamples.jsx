import React from 'react';
import PropTypes from 'prop-types';
import { Hyperlink } from '~paragon-react';

const ComponentUsageExamples = ({ row }) => {
  const repositoryUrl = row.original.repositoryUrl;
  const projectUsages = row.original.usages;
  return (
  <div className="pgn-doc__component-usage__project">
      <ul className="list-unstyled">
        {projectUsages.map(({
          filePath,
          line,
        }) => (
          <li key={`${filePath}#L${line}`}>
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
  );
};

ComponentUsageExamples.propTypes = {
  componentName: PropTypes.string.isRequired,
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

export default ComponentUsageExamples;
