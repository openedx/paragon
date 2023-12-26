const { handler: actualHandler } = require('./sendAnalyticsData');

exports.handler = async function eventHandler(event) {
  const body = JSON.parse(event.body);
  event.body = JSON.stringify({
    ...body,
    eventId: COMPONENT_GENERATED_EVENT,
    properties: { componentName: body.componentName },
  });

  return actualHandler(event);
};
