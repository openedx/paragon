import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Button from '../Button';
import ProgressBar from '../ProgressBar';
import Spinner from '../Spinner';

function UploadProgress({
  percent, variant, name, onCancel,
}) {
  if (variant === 'spinner') {
    return (
      <Spinner
        animation="border"
        aria-live="polite"
        screenReaderText={`Uploading ${name}, ${percent}% done.`}
      />
    );
  }

  return (
    <div className="w-50">
      <p className="text-muted">
        <FormattedMessage
          id="pgn.Dropzone.UploadProgress.uploadLabel"
          defaultMessage="Uploading {filename}."
          description="A text that is shown near a progress bar during file upload in Dropzone component."
          values={{ filename: name }}
        />
      </p>
      <div className="d-flex justify-content-between align-items-center w-100">
        <ProgressBar
          now={percent}
          label={`${percent}%`}
          variant="success"
          className="flex-grow-1"
        />
        <Button variant="tertiary" className="ml-3" onClick={onCancel}>
          <FormattedMessage
            id="pgn.Dropzone.UploadProgress.cancelLabel"
            defaultMessage="Cancel"
            description="Label of a cancel button that is shown during file upload in Dropzone component."
          />
        </Button>
      </div>
    </div>
  );
}

UploadProgress.propTypes = {
  variant: PropTypes.oneOf(['spinner', 'bar']).isRequired,
  percent: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default UploadProgress;
