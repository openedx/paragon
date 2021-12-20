import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  StandardModal,
  Hyperlink,
  useToggle,
} from '~paragon-react';

const ProjectNameWithUsageModal = ({ row }) => {
  const [isOpen, open, close] = useToggle(false);
  const projectName = row.original.folderName;
  const componentUsages = row.original.usages;
  const repositoryUrl = row.original.repositoryUrl;
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
        title={projectName}
        isOpen={isOpen}
        hasCloseButton={false}
        onClose={close}
        footerNode={(
          <Button variant="primary" onClick={close}>OK</Button>
        )}
      >
        {Object.keys(componentUsages).length === 0 && (
          <p>This project does not import any Paragon components, but may still use its SCSS styles.</p>
        )}
        {Object.entries(componentUsages).map(([componentName, componentUsages]) => (
          <div className="pgn-doc__usages-modal mb-4" key={componentName}>
            <h4 className="font-weight-bold">{componentName}</h4>
            <ul className="list-unstyled">
              {componentUsages.map(({
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
        ))}
      </StandardModal>
    </>
  );
};

ProjectNameWithUsageModal.propTypes = {
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

export default ProjectNameWithUsageModal;
