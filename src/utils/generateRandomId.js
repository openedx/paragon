const generateRandomId = (idString) => `${idString}-${Math.floor(Math.random() * 100000)}`;

export default generateRandomId;
