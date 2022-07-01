/**
 * Checks whether accept object contains multiple MIME types or
 * file extensions (or their combination).
 * @param {object} accept - An Object with the keys set to the MIME type and the values an Array of file extensions.
 */
const isMultipleTypes = (accept) => {
  if (Object.keys(accept).length > 1) {
    return true;
  }
  if (Object.keys(accept).length === 0) {
    return false;
  }
  return Object.values(accept)[0].length > 1;
};

/**
 * Returns string representation of file extensions from 'accept' object.
 * @param {object} accept - An Object with the keys set to the MIME type and the values an Array of file extensions
 */
const getTypesString = (accept) => Object.entries(accept).reduce((previousValue, currentValue) => {
  const [mimeType, fileExtensions] = currentValue;
  let value;

  if (fileExtensions.length > 0) {
    value = `${fileExtensions.join(', ').replaceAll('.', '').toUpperCase()}, `;
  } else if (mimeType.endsWith('/*')) {
    value = `${mimeType.slice(0, -2)}, `;
  } else {
    value = `${mimeType.split('/').pop().toUpperCase()}, `;
  }

  return previousValue + value;
}, '').slice(0, -2);

/**
 * Returns human-readable form of bytes.
 * @param {Number} bytes - value in bytes.
 */
const formatBytes = (bytes) => {
  if (bytes === 0) {
    return '0 Bytes';
  }

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(2))}${sizes[i]}`;
};

export { getTypesString, isMultipleTypes, formatBytes };
