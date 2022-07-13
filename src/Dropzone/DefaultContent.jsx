import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { getTypesString, formatBytes } from './utils';
import messages from './messages';
import Icon from '../Icon';
import { FileUpload } from '../../icons';

const DefaultContent = ({ accept, minSize, maxSize }) => {
  const intl = useIntl();

  const getFileRestrictionMessage = () => {
    let fileTypePart;
    let fileSizePart;

    if (accept) {
      const allTypes = getTypesString(accept);
      const lastTypeSeparatorLocation = allTypes.lastIndexOf(',');
      fileTypePart = intl.formatMessage(messages.fileTypeRestriction, {
        count: lastTypeSeparatorLocation === -1 ? 1 : 2,
        firstPart: lastTypeSeparatorLocation === -1 ? allTypes : allTypes.slice(0, lastTypeSeparatorLocation),
        secondPart: lastTypeSeparatorLocation !== -1 && allTypes.slice(lastTypeSeparatorLocation + 1),
      });
    }

    if (minSize && maxSize && Number.isFinite(maxSize)) {
      fileSizePart = intl.formatMessage(messages.fileSizeBetween, {
        sizeMin: formatBytes(minSize),
        sizeMax: formatBytes(maxSize),
      });
    } else if (maxSize && Number.isFinite(maxSize)) {
      fileSizePart = intl.formatMessage(messages.fileSizeMax, { sizeMax: formatBytes(maxSize) });
    } else if (minSize) {
      fileSizePart = intl.formatMessage(messages.fileSizeMin, { sizeMin: formatBytes(minSize) });
    }

    if (fileTypePart && fileSizePart) {
      return `${fileTypePart} (${fileSizePart})`;
    }
    if (fileTypePart) {
      return fileTypePart;
    }
    return fileSizePart;
  };

  return (
    <>
      <div className="pgn__dropzone__upload-icon-wrapper">
        <Icon src={FileUpload} className="pgn__dropzone__upload-icon" />
      </div>
      <p>
        <FormattedMessage
          id="pgn.Dropzone.DefaultContent.label"
          description="A text that appears as a label for input of Dropzone component."
          defaultMessage="Drag and drop your file here or click to upload."
        />
      </p>
      {[accept, minSize, maxSize].some(value => value) && (
        <p className="x-small text-gray-500">
          {getFileRestrictionMessage()}
        </p>
      )}
    </>
  );
};

DefaultContent.propTypes = {
  accept: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  maxSize: PropTypes.number,
  minSize: PropTypes.number,
};

DefaultContent.defaultProps = {
  accept: undefined,
  maxSize: undefined,
  minSize: undefined,
};

export default DefaultContent;
