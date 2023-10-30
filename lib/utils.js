// eslint-disable-next-line import/prefer-default-export
function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { capitalize };
