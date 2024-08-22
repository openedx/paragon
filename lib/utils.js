const axios = require('axios');

/**
 * Sends request to the Netlify function to inform about specified event.
 * @param {string} eventId - tracking event id
 * @param {object} properties - tracking properties
 */
function sendTrackInfo(eventId, properties) {
  const { BASE_URL, TRACK_ANONYMOUS_ANALYTICS } = process.env;
  if (TRACK_ANONYMOUS_ANALYTICS) {
    const url = `${BASE_URL}/.netlify/functions/sendTrackData`;
    axios.post(url, { eventId, properties })
      .then(result => {
        // eslint-disable-next-line no-console
        console.log(`Track info is successfully sent (status ${result.status})`);
      }).catch(error => {
        // eslint-disable-next-line no-console
        console.log(`Track info request failed (${error})`);
      });
  }
}

function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { sendTrackInfo, capitalize };
