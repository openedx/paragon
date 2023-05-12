import React from 'react';
import PropTypes from 'prop-types';
import { Hyperlink } from '~paragon-react';

type UsagesType = {
  filePath: string,
  line: number,
};

interface UsagesListPropTypes {
  repositoryUrl: string,
  componentName: string,
  projectName: string,
  usages: Array<UsagesType>,
}

export default function UsagesList({
  usages,
  repositoryUrl,
  componentName,
  projectName,
} : UsagesListPropTypes) {
  const handleUsageLinkClick = (linkToUsage) => {
    global.analytics.track(
      'openedx.paragon.docs.usage-insights.component-usage-link.clicked',
      { project: projectName, component: componentName, linkToUsage },
    );
  };

  return (
    <ul className="list-unstyled">
      {usages.map((usage) => {
        const PATH_TO_USAGE = `${repositoryUrl}/${usage.filePath}#L${usage.line}`;
        return (
          <li key={`${usage.filePath}L#${usage.line}`}>
            {repositoryUrl ? (
              <>
                <Hyperlink
                  destination={PATH_TO_USAGE}
                  target="_blank"
                  onClick={() => handleUsageLinkClick(PATH_TO_USAGE)}
                >
                  {usage.filePath}
                </Hyperlink>
                {' '}(line {usage.line})
              </>
            ) : (
              <>{usage.filePath} (line {usage.line})</>
            )}
          </li>
        );
      })}
    </ul>
  );
}

UsagesList.propTypes = {
  projectName: PropTypes.string.isRequired,
  componentName: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string.isRequired,
  usages: PropTypes.arrayOf(PropTypes.shape({
    filePath: PropTypes.string.isRequired,
    line: PropTypes.number.isRequired,
  })).isRequired,
};
