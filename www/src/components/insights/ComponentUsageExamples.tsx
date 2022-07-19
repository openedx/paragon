import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { Hyperlink } from '~paragon-react';

export type ComponentUsageExamplesTypes = {
  row: {
    original: {
      name: string,
      repositoryUrl?: string,
      usages: {},
    },
  },
};

const ComponentUsageExamples = ({ row }: ComponentUsageExamplesTypes) => {
  const { repositoryUrl } = row.original;
  const projectUsages: { [key: string]: any } = row.original.usages;

  type ProjectUsagesTypes = {
    filePath: string,
    line: number,
  };

  return (
    <div className="pgn-doc__component-usage__project">
      <ul className="list-unstyled">
        {projectUsages.map(({
          filePath,
          line,
        }: ProjectUsagesTypes) => (
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
