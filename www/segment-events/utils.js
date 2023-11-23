function sendUserAnalyticsEvent(eventName, context) {
  if (context) {
    return global.analytics.track(eventName, context);
  }

  return global.analytics.track(eventName);
}

module.exports = { sendUserAnalyticsEvent };
