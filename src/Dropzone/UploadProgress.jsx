import React from 'react';
import PropTypes from 'prop-types';
import { Button, ProgressBar, Spinner } from '..';

const UploadProgress = ({
  percent, variant, name, onCancel,
}) => {
  if (variant === 'spinner') {
    return <Spinner animation="border" screenReaderText={`Uploading ${name}`} />;
  }

  return (
    <div className="w-50">
      <p className="text-muted">
        {`Uploading ${name}`}
      </p>
      <div className="d-flex justify-content-between align-items-center w-100">
        <ProgressBar now={percent} label={`${percent}%`} variant="success" className="flex-grow-1" />
        <Button variant="tertiary" className="ml-3" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

UploadProgress.propTypes = {
  variant: PropTypes.oneOf(['spinner', 'bar']).isRequired,
  percent: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default UploadProgress;
