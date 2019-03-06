/* Generates a new id with the given prefix that is highly unlikely to be duplicated.
*  Random string logic comes from: https://gist.github.com/gordonbrander/2230317
*/
const newId = (prefix = 'id') => {
  const randomString = Math.random().toString(36).substr(2, 9);
  return `${prefix}${randomString}`;
};

export default newId;
