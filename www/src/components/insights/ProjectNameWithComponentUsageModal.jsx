import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  StandardModal,
  Hyperlink,
  useToggle,
} from '~paragon-react';

const ProjectNameWithComponentUsageModal = ({ componentName, row }) => {
  const [isOpen, open, close] = useToggle(false);
  const projectName = row.original.folderName;
  const repositoryUrl = row.original.repositoryUrl;
  const projectUsages = row.original.usages;
  return (
    <>
      <Button
        variant="link"
        className="p-0 text-left"
        onClick={isOpen ? close : open}
      >
        {projectName}
      </Button>
      <StandardModal
        size="xl"
        title={`${componentName} in ${projectName}`}
        isOpen={isOpen}
        hasCloseButton={false}
        onClose={close}
        footerNode={(
          <Button variant="primary" onClick={close}>OK</Button>
        )}
      >
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
      </StandardModal>
    </>
  );
};

ProjectNameWithComponentUsageModal.propTypes = {
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

export default ProjectNameWithComponentUsageModal;
