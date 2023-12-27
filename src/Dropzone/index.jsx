import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDropzone, ErrorCode } from 'react-dropzone';
import { fromEvent } from 'file-selector';
import { useIntl } from 'react-intl';

import DragError from './DragError';
import GenericError from './GenericError';
import UploadProgress from './UploadProgress';
import DefaultContent from './DefaultContent';
import messages from './messages';
import { getTypesString, isMultipleTypes, formatBytes } from './utils';

function Dropzone({
  className, accept, minSize, maxSize, validator,
  errorMessages, progressVariant, inputComponent,
  onProcessUpload, onUploadProgress, onUploadCancel,
  ...props
}) {
  const [isMultipleDragged, setIsMultipleDragged] = useState(false);
  const [errors, setErrors] = useState([]);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState(undefined);
  const [controller, setController] = useState(undefined);
  const intl = useIntl();

  const {
    uploadError: uploadErrorMsg,
    invalidSizeLess: invalidSizeLessMsg,
    invalidSizeMore: invalidSizeMoreMsg,
    invalidType: invalidTypeMsg,
    multipleDragged: multipleDraggedMsg,
  } = errorMessages;

  const onDragEnter = async (e) => {
    if (errors) {
      setErrors([]);
    }
    const files = await fromEvent(e);
    if (files && files.length > 1) {
      setIsMultipleDragged(true);
    }
  };

  const onDragLeave = () => {
    if (isMultipleDragged) {
      setIsMultipleDragged(false);
    }
  };

  const onDropRejected = (files) => {
    if (!isMultipleDragged) {
      setErrors(files[0].errors.map(error => {
        switch (error.code) {
          case ErrorCode.FileTooLarge:
            return invalidSizeMoreMsg || intl.formatMessage(messages.invalidSizeMore, { size: formatBytes(maxSize) });
          case ErrorCode.FileTooSmall:
            return invalidSizeLessMsg || intl.formatMessage(messages.invalidSizeLess, { size: formatBytes(minSize) });
          case ErrorCode.FileInvalidType:
            return invalidTypeMsg || intl.formatMessage(
              messages.invalidType,
              { count: isMultipleTypes(accept) ? 2 : 1, typeString: getTypesString(accept) },
            );
          default:
            return intl.formatMessage(messages.unexpectedValidationError);
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

  const handleUploadError = (error) => {
    // check if request has been canceled before treating the exception as an upload error
    if (error.code !== 'ERR_CANCELED') {
      setProgress(0);
      setErrors([uploadErrorMsg || intl.formatMessage(messages.uploadError)]);
    }
  };

  const processUpload = (fileData) => {
    const newController = new AbortController();
    setController(newController);

    const requestConfig = {
      onUploadProgress: handleProgressUpload,
      signal: newController.signal,
    };

    onProcessUpload({
      fileData,
      requestConfig,
      handleError: handleUploadError,
    });
  };

  const onDropAccepted = async (files) => {
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

    const formData = new FormData();
    formData.append('file', file);
    setFileName(file.name);

    processUpload(formData);
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
      return <DragError message={multipleDraggedMsg || intl.formatMessage(messages.multipleDragged)} />;
    }

    if (errors.length > 0) {
      return (
        <>
          <GenericError errorMsgs={errors} />
          {inputComponent || <DefaultContent minSize={minSize} maxSize={maxSize} accept={accept} />}
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

    return inputComponent || <DefaultContent minSize={minSize} maxSize={maxSize} accept={accept} />;
  };

  return (
    <div
      data-testid="dropzone-container"
      {...getRootProps({
        className: classNames('pgn__dropzone', className, {
          'pgn__dropzone-validation-error': isMultipleDragged || errors.length > 0 || isDragReject,
          'pgn__dropzone-active': isDragActive && !isDragReject,
        }),
      })}
      {...props}
    >
      <input {...getInputProps()} />
      <div className="d-flex flex-column justify-content-around align-items-center w-100">
        {renderContent()}
      </div>
    </div>
  );
}

Dropzone.defaultProps = {
  className: undefined,
  accept: undefined,
  maxSize: Infinity,
  minSize: 0,
  onUploadProgress: () => {},
  onUploadCancel: () => {},
  errorMessages: {
    invalidType: undefined,
    invalidSizeLess: undefined,
    invalidSizeMore: undefined,
    multipleDragged: undefined,
    uploadError: undefined,
  },
  progressVariant: 'spinner',
  validator: undefined,
  inputComponent: undefined,
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
   * A callback fired each time an upload progress event happens,
   * receives (percentageUploaded, progressEvent) as arguments.
   */
  onUploadProgress: PropTypes.func,
  /** A callback fired upon successful upload, receives Response object as a single argument. */
  onUploadCancel: PropTypes.func,
  /**
   * A function responsible for uploading the file.
   * Receives following object as its only argument
   * {
   *   @param {object} fileData - Metadata about the uploaded file.
   *   @param {object} requestConfig - Config to pass to `axios` call.
   *   @param {function} handleError - Function to communicate to `Dropzone` that file upload resulted in failure,
   *   expects `Error` object to be passed as its only argument.
   * }
   */
  onProcessUpload: PropTypes.func.isRequired,
  /**
   * An object containing error messages, following are supported:
   * 1) invalidType - A message to display when file of invalid type is dropped into `Dropzone`.
   * Defaults to 'The file type must be {filType} file / one of {fileTypes} files.'.
   * 2) invalidSizeLess - A message to display when file of size less than minSize value is dropped into `Dropzone`.
   * Defaults to 'File must be larger than {minSize}.'.
   * 3) invalidSizeMore - A message to display when file of size greater than maxSize value is dropped into `Dropzone`.
   * Defaults to 'File must be less than {maxSize}.'.
   * 4) multipleDragged - A message to display when multiple files are dragged over `Dropzone`.
   * 5) uploadError - A message to display in case upload results in an error
   */
  errorMessages: PropTypes.shape({
    invalidType: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    invalidSizeLess: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    invalidSizeMore: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    multipleDragged: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    uploadError: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
  /** Specifies how the upload progress should be displayed, component shows either spinner or a progress bar. */
  progressVariant: PropTypes.oneOf(['spinner', 'bar']),
  /**
   * Custom validation function, receives `File` object as its only argument.
   * Note that this function will be invoked as a last validation step before beginning an upload process.
   */
  validator: PropTypes.func,
  /** A component to display initial state of the `Dropzone`. */
  inputComponent: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),
};

export default Dropzone;
