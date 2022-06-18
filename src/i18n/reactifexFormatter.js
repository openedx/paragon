/**
 * Returns messages in the following structure:
 *
 * {
 *   id: 'pgn.Alert.closeLabel',
 *   defaultMessage: 'Dismiss',
 *   description: 'Label of a close button on Alert component',
 * }
 *
 */
const format = msgs => (
  Object.keys(msgs).reduce((all, k) => {
    const temp = [...all];
    temp.push({
      id: k,
      defaultMessage: msgs[k].defaultMessage,
      description: msgs[k].description,
    });
    return temp;
  }, [])
);

module.exports = { format };
