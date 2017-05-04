let lastId = 0;

export const newId = (prefix='id') => {
  lastId++;
  return `${prefix}${lastId}`;
};
