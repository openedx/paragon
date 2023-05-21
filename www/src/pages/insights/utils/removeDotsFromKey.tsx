/**
 * Removes dots in the keys of the passed object.
 * @param {object} object - object with usage insights of Paragon components.
 */
const removeDotsFromKeys = (object) => Object.entries(object).reduce((accumulator, [key, value]) => {
  const newKey = key.replace(/\./g, '');
  return { ...accumulator, [newKey]: value };
}, {});

export default removeDotsFromKeys;
