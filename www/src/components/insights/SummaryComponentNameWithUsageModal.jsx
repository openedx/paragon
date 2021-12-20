import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  StandardModal,
  Hyperlink,
  useToggle,
} from '~paragon-react';

const SummaryComponentNameWithUsageModal = ({ row }) => {
  const [isOpen, open, close] = useToggle(false);
  const componentName = row.original.name;
  const componentUsages = row.original.usages;
  return (
    <>
      <Button
        variant="link"
        className="p-0 text-left"
        onClick={isOpen ? close : open}
      >
        {componentName}
      </Button>
      <StandardModal
        size="xl"
        title={componentName}
        isOpen={isOpen}
        hasCloseButton={false}
        onClose={close}
        footerNode={(
          <Button variant="primary" onClick={close}>OK</Button>
        )}
      >
        {componentUsages.map(({
          name: projectName,
          usages: projectUsages,
          repositoryUrl,
        }) => (
          <div className="pgn-doc__summary-usages__project mb-4" key={projectName}>
            <h4 className="font-weight-bold">{projectName}</h4>
            <ul className="list-unstyled">
              {projectUsages.map(({
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

SummaryComponentNameWithUsageModal.propTypes = {
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

export default SummaryComponentNameWithUsageModal;
