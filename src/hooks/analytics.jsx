import { useContext, useMemo } from 'react';

import { ParagonContext } from '../ParagonProvider';

export const useAnalytics = () => {
  const { analytics } = useContext(ParagonContext) || {};
  return analytics;
};

export const useHandleLogClick = ({
  event, onClick, ref,
}) => {
  const analytics = useAnalytics();

  const trackedRef = useMemo(() => ref?.current, [ref?.current]);
  const { name, properties, dispatchers } = event || {};

  const sendEventToDispatchers = () => {
    if (!dispatchers) {
      return;
    }
    dispatchers.filter(dispatcher => typeof dispatcher === 'function').forEach((dispatch) => {
      dispatch(name, properties);
    });
  };

  const handleLogClick = (e) => {
    if (event) {
      // handle clicked anchor links that open in same tab by adding a slight delay
      // to the page redirect to allow enough time for an analytics event to
      // be dispatched.
      if (trackedRef?.href && trackedRef?.target !== '_blank') {
        e.preventDefault();

        analytics.sendTrackEvent(name, properties);
        sendEventToDispatchers(dispatchers);

        setTimeout(() => {
          global.location.href = trackedRef.href;
        }, [300]);

        return;
      }

      // if ``trackedRef`` is not an anchor link (e.g., a button), dispatch the
      // analytic event immediately.
      analytics.sendTrackEvent(name, properties);
      sendEventToDispatchers(dispatchers);
    }

    if (onClick) {
      onClick(e);
    }
  };

  return handleLogClick;
};
