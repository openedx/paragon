import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { Hyperlink } from '~paragon-react';

export interface IProjectUsages {
  filePath: string,
  line: number,
}

export interface ISummaryUsageExamples {
  row: {
    original: {
      usages: [],
    },
  },
}

export interface IComponentUsages {
  name: string,
  usages: [IProjectUsages],
  repositoryUrl: string,
}

const SummaryUsageExamples = ({ row }: ISummaryUsageExamples) => {
  const componentUsages = row.original.usages;
  return componentUsages.map(({
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
