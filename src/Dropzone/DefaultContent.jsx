import React from 'react';
import { FormattedMessage } from 'react-intl';
import Icon from '../Icon';
import { FileUpload } from '../../icons';

const DefaultContent = () => (
  <>
    <div className="pgn__dropzone-upload-icon-wrapper">
      <Icon src={FileUpload} className="pgn__dropzone-upload-icon" />
    </div>
    <p>
      <FormattedMessage
        id="pgn.Dropzone.DefaultContent.label"
        description="A text that appears as a label for input of Dropzone component."
        defaultMessage="Drag and drop your file here or click to upload."
      />
    </p>
  </>
);

export default DefaultContent;
