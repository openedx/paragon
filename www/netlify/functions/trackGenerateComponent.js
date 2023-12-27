const { v4: uuidv4 } = require('uuid');
const Analytics = require('analytics-node');
const { COMPONENT_GENERATED_EVENT } = require('../../segment-events');

const analytics = new Analytics(process.env.SEGMENT_KEY);

exports.handler = async function eventHandler(event) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const { componentName } = JSON.parse(event.body);
  // dispatch event to Segment
  analytics.track({
    anonymousId: uuidv4(),
    event: COMPONENT_GENERATED_EVENT,
    properties: { componentName },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};
