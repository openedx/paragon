import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDropzone, ErrorCode } from 'react-dropzone';
import { fromEvent } from 'file-selector';

import DragError from './DragError';
import GenericError from './GenericError';
import UploadProgress from './UploadProgress';
import DefaultContent from './DefaultContent';

const Dropzone = ({
  className, accept, minSize, maxSize, validator, progressVariant,
  uploadCallbacks, errorMessages, axiosConfig, inputComponent,
}) => {
  const [isMultipleDragged, setIsMultipleDragged] = useState(false);
  const [errors, setErrors] = useState([]);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState(undefined);
  const [controller, setController] = useState(undefined);

  const {
    onUploadProgress = () => {},
    onUploadSuccess = () => {},
    onUploadCancel = () => {},
    onUploadError = () => {},
  } = uploadCallbacks;
  const {
    uploadError: uploadErrorMsg,
    invalidSize: invalidSizeMsg,
    invalidType: invalidTypeMsg,
    multipleDragged: multipleDraggedMsg,
  } = errorMessages;

  const onDragEnter = useCallback(async (e) => {
    if (errors) {
      setErrors([]);
    }
    const files = await fromEvent(e);
    if (files && files.length > 1) {
      setIsMultipleDragged(true);
    }
  }, [errors]);

  const onDragLeave = useCallback(() => {
    if (isMultipleDragged) {
      setIsMultipleDragged(false);
    }
  }, [isMultipleDragged]);

  const onDropRejected = (files) => {
    if (!isMultipleDragged) {
      setErrors(files[0].errors.map(error => {
        switch (error.code) {
          case ErrorCode.FileTooLarge:
            return invalidSizeMsg || error.message;
          case ErrorCode.FileInvalidType:
            return invalidTypeMsg || error.message;
          default:
            return error.message;
        }
      }));
    } else {
      setIsMultipleDragged(false);
    }
  };

  const handleProgressUpload = (progressEvent) => {
    const percentValue = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    setProgress(percentValue);
    onUploadProgress(percentValue, progressEvent);
  };

  const processUpload = (client, uploadUrl, data) => {
    const newController = new AbortController();
    setController(newController);

    const config = {
      onUploadProgress: handleProgressUpload,
      signal: newController.signal,
    };

    client.post(uploadUrl, data, config)
      .then(response => onUploadSuccess(response))
      .catch(error => {
        // check if request has been canceled before treating the exception as an upload error
        if (error.code !== 'ERR_CANCELED') {
          setErrors([uploadErrorMsg]);
          onUploadError(error);
        }
      });
  };

  const onDropAccepted = async (files) => {
    if (isMultipleDragged) {
      return;
    }

    const file = files[0];
    if (validator) {
      const customValidationError = await validator(file);
      if (customValidationError) {
        setErrors([customValidationError]);
        return;
      }
    }

    if (errors) {
      setErrors([]);
    }

    const { uploadUrl, client } = axiosConfig || {};

    if (!client || !uploadUrl) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    setFileName(file.name);

    processUpload(client, uploadUrl, formData);
  };

  const handleUploadCancel = () => {
    controller.abort();
    setProgress(0);
    onUploadCancel();
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    multiple: false,
    maxFiles: 1,
    maxSize,
    minSize,
    onDragLeave,
    onDragEnter,
    onDropRejected,
    onDropAccepted,
    accept,
    disabled: progress && progress !== 100,
  });

  const renderContent = () => {
    if (isMultipleDragged) {
      return <DragError message={multipleDraggedMsg} />;
    }

    if (errors.length > 0) {
      return (
        <>
          <GenericError errorMsgs={errors} />
          <DefaultContent />
        </>
      );
    }

    if (progress && progress !== 100) {
      return (
        <UploadProgress
          variant={progressVariant}
          percent={progress}
          name={fileName}
          onCancel={handleUploadCancel}
        />
      );
    }

    return inputComponent;
  };

  return (
    <section>
      <div
        data-testid="dropzone-container"
        {...getRootProps({
          className: classNames('pgn__dropzone', {
            className,
            'pgn__dropzone-validation-error': isMultipleDragged || errors.length > 0 || isDragReject,
            'pgn__dropzone-active': isDragActive && !isDragReject,
          }),
        })}
      >
        <input {...getInputProps()} />
        <div className="d-flex flex-column justify-content-around align-items-center w-100">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

Dropzone.defaultProps = {
  className: undefined,
  accept: undefined,
  maxSize: Infinity,
  minSize: 0,
  uploadCallbacks: {
    onUploadProgress: () => {},
    onUploadSuccess: () => {},
    onUploadCancel: () => {},
    onUploadError: () => {},
  },
  errorMessages: {
    invalidType: undefined,
    invalidSize: undefined,
    multipleDragged: 'Only one upload permitted.',
    uploadError: 'A problem occured while uploading your file. Please try again.',
  },
  progressVariant: 'spinner',
  validator: undefined,
  inputComponent: <DefaultContent />,
};

Dropzone.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /**
   * Set accepted file types.
   * This should be an object with the keys set to the
   * [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
   * and the values to an array of file extensions.
   */
  accept: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  /** Maximum file size (in bytes). */
  maxSize: PropTypes.number,
  /** Minimum file size (in bytes). */
  minSize: PropTypes.number,
  /**
   * An object containing callbacks for upload events, currently four events are supported:
   * 1) onUploadProgress - A callback fired each time an upload progress event happens,
   * receives (percentageUploaded, progressEvent) as arguments.
   * 2) onUploadSuccess - A callback fired upon successful upload, receives Response object as a single argument.
   * 3) onUploadCancel - A callback fired upon cancelling an upload, receives no arguments.
   * 4) onUploadError - A callback fired if upload was not successful, receives Error object as a single argument.
   */
  uploadCallbacks: PropTypes.shape({
    onUploadProgress: PropTypes.func,
    onUploadSuccess: PropTypes.func,
    onUploadCancel: PropTypes.func,
    onUploadError: PropTypes.func,
  }),
  /**
   * An object containing error messages, following are supported:
   * 1) invalidType - A message to display when file of invalid type is dragged over `Dropzone`.
   * Defaults to `react-dropzone`'s message.
   * 2) invalidSize - A message to display when file of invalid size is dragged over `Dropzone`.
   * Defaults to `react-dropzone`'s message.
   * 3) multipleDragged - A message to display when multiple files are dragged over `Dropzone`.
   * 4) uploadError - A message to display in case upload results in an error
   */
  errorMessages: PropTypes.shape({
    invalidType: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    invalidSize: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    multipleDragged: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    uploadError: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
  /** Specifies how the upload progress should be displayed, component shows eiter spinner or a progress bar. */
  progressVariant: PropTypes.oneOf(['spinner', 'bar']),
  /**
   * Custom validation function, receives `File` object as its only argument.
   * Note that this function will be invoked as a last validation step before beginning an upload process.
   */
  validator: PropTypes.func,
  /** A component to display initial state of the `Dropzone`. */
  inputComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /**
   * Axios config that consists of two items:
   * 1) uploadUrl - specifies the URL to where the file should be uploaded.
   * 2) client - axios instance that will be used to send POST request to the uploadUrl with file data.
   */
  axiosConfig: PropTypes.shape({
    uploadUrl: PropTypes.string.isRequired,
    client: PropTypes.func.isRequired,
  }).isRequired,
};

export default Dropzone;
