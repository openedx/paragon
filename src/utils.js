let lastId = 0;

export const newId = (prefix = 'id') => {
  lastId += 1;
  return `${prefix}${lastId}`;
};
