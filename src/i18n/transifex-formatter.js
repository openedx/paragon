exports.format = (messages) => Object.fromEntries(
  Object.entries(messages).map(([id, { defaultMessage }]) => [id, defaultMessage])
);
