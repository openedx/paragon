import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { Hyperlink } from '~paragon-react';

export type ProjectUsagesTypes = {
  filePath: string,
  line: number,
};

export type SummaryUsageExamplesTypes = {
  row: {
    original: {
      usages: {},
    },
  },
};

export type ComponentUsagesTypes = {
  name: string,
  usages: string,
  repositoryUrl: string,
};

const SummaryUsageExamples = ({ row }: SummaryUsageExamplesTypes) => {
  const componentUsages = row.original.usages;
  // @ts-ignore
  return componentUsages.map(({
    name: projectName,
    usages: projectUsages,
    repositoryUrl,
  }: ComponentUsagesTypes) => (
    <div className="pgn-doc__summary-usages__project mb-4" key={projectName}>
      <h5 className="font-weight-bold">{projectName}</h5>
      <ul className="list-unstyled">
        {/* @ts-ignore */}
        {projectUsages.map(({
          filePath,
          line,
        }: ProjectUsagesTypes) => (
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
