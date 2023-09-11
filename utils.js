const axios = require('axios');

/**
 * Sends request to the Netlify function to inform about specified event.
 * @param {string} eventName - tracking event name
 */
function sendTrackInfo(eventName, trackFunctionName) {
  const { BASE_URL, TRACK_ANONYMOUS_ANALYTICS } = process.env;
  if (TRACK_ANONYMOUS_ANALYTICS) {
    const url = `${BASE_URL}/.netlify/functions/${trackFunctionName}`;
    axios.post(url, { eventName })
      .then(result => {
        // eslint-disable-next-line no-console
        console.log(`Track info is successfully sent (status ${result.status})`);
      }).catch(error => {
        // eslint-disable-next-line no-console
        console.log(`Track info request failed (${error})`);
      });
  }
}

module.exports = { sendTrackInfo };
