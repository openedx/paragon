import React from 'react';
import PropTypes from 'prop-types';
import { Hyperlink } from '~paragon-react';

type ProjectUsagesTypes = {
  filePath: string,
  line: number,
};

export interface IComponentUsageExamples {
  row: {
    original: {
      name: string,
      repositoryUrl?: string,
      usages: Array<ProjectUsagesTypes>,
    },
  },
}

function ComponentUsageExamples({ row }: IComponentUsageExamples) {
  const { repositoryUrl, usages } = row.original;

  return (
    <div className="pgn-doc__component-usage__project">
      <ul className="list-unstyled">
        {usages.map(usage => (
          <li key={`${usage.filePath}#L${usage.line}`}>
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
  );
}

ComponentUsageExamples.propTypes = {
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
