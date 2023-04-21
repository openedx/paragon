import React from 'react';
import PropTypes from 'prop-types';
import { Hyperlink } from '~paragon-react';

export interface ISummaryUsageExamples {
  row: {
    original: {
      usages: [],
    },
  }
}

function SummaryUsageExamples({ row }: ISummaryUsageExamples) {
  interface IProjectUsages {
    filePath: string,
    line: number,
  }

  interface IComponentUsages {
    name: string,
    usages: [IProjectUsages],
    repositoryUrl: string,
  }
  const componentUsages = row.original.usages;
  const componentUsagesExample = componentUsages.map(({
    name: projectName,
    usages: projectUsages,
    repositoryUrl,
  }: IComponentUsages) => (
    <div className="pgn-doc__summary-usages__project mb-4" key={projectName}>
      <h5 className="font-weight-bold">{projectName}</h5>
      <ul className="list-unstyled">
        {projectUsages.map(({
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
                  {filePath.split('/').slice(-1)}
                </Hyperlink>
                {' '}(line {line})
              </>
            ) : (
              <>{filePath.split('/').slice(-1)} (line {line})</>
            )}
          </li>
        ))}
      </ul>
    </div>
  ));

  return <div>{componentUsagesExample}</div>;
}

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
