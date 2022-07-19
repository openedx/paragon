import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { Hyperlink } from '~paragon-react';

export type ProjectUsageExamplesTypes = {
  row: {
    original: {
      name: string,
      repositoryUrl?: string,
      usages: {},
    },
  },
};

const ProjectUsageExamples = ({ row }: ProjectUsageExamplesTypes) => {
  const componentUsages: any = row.original.usages;
  const { repositoryUrl } = row.original;

  type ProjectUsagesTypes = {
    filePath: string,
    line: number,
  };

  return (
    <>
      {Object.keys(componentUsages).length === 0 && (
        <p>This project does not import any Paragon components, but may still use its SCSS styles.</p>
      )}
      {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
      {Object.entries(componentUsages).map(([componentName, componentUsages]) => (
        <div className="pgn-doc__usages-modal mb-4" key={componentName}>
          <h5 className="font-weight-bold">{componentName}</h5>
          <ul className="list-unstyled">
            {/* @ts-ignore */}
            {componentUsages.map(({
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
