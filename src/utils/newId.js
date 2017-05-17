let lastId = 0;

const newId = (prefix = 'id') => {
  lastId += 1;
  return `${prefix}${lastId}`;
};

export default newId;
