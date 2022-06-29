import { defineMessages } from 'react-intl';

const messages = defineMessages({
  uploadError: {
    id: 'dropzone.Dropzone.uploadError',
    defaultMessage: 'A problem occured while uploading your file. Please try again.',
    description: 'A message shown in case file upload in Dropzone component results in an error.',
  },
  multipleDragged: {
    id: 'dropzone.Dropzone.multipleDraggedError',
    defaultMessage: 'Only one upload permitted.',
    description: 'A message shown when multiple files are dragged over Dropzone.',
  },
  invalidSizeLess: {
    id: 'dropzone.Dropzone.invalidSizeLessError',
    defaultMessage: 'File must be larger than {size}.',
    description: 'A message shown when a file with less than minimum allowed size is being uploaded in Dropzone.',
  },
  invalidSizeMore: {
    id: 'dropzone.Dropzone.invalidSizeMoreError',
    defaultMessage: 'File must be less than {size}.',
    description: 'A message shown when a file with more than maximum allowed size is being uploaded in Dropzone.',
  },
  invalidType: {
    id: 'dropzone.Dropzone.invalidType',
    defaultMessage: 'The file type must be {count, plural, one {{typeString} file} other {one of {typeString} files}}.',
    description: 'A message shown when a file with wrong MIME type is being uploaded.',
  },
  unexpectedValidationError: {
    id: 'dropzone.Dropzone.unexpectedValidationError',
    defaultMessage: 'An unexpected problem occured during file validation. Please try again.',
    description: 'A message shown in case file validation in Dropzone component for unknown reason.',
  },
});

export default messages;
