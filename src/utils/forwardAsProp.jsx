import React from 'react';

// This HOC moves the as prop to the forwardedAs prop for use with styled-components.
// This function could be reworked into some generic redirectProp HOC, but since
// this is the only current use case, we'll leave it specific to as -> forwardedAs
// and save the extra code/processing.
// Others with the issue that this solves:
// - https://github.com/reakit/reakit/issues/226
// - https://github.com/styled-components/styled-components/pull/3006#issuecomment-587415822
// eslint-disable-next-line react/prop-types
const forwardAsProp = Component => ({ as, ...props }) => (
  <Component
    forwardedAs={as}
    {...props}
  />
);

export default forwardAsProp;
