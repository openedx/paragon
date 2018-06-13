import React from 'react';
import Responsive from 'react-responsive';

// NOTE: These are the breakpoints used in Bootstrap v4.0.0 as seen in
// the documentation (https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)
const breakpoints = {
  extraSmall: {
    maxWidth: 575.98,
  },
  small: {
    minWidth: 576,
    maxWidth: 767.98,
  },
  medium: {
    minWidth: 768,
    maxWidth: 991.98,
  },
  large: {
    minWidth: 992,
    maxWidth: 1199.98,
  },
  extraLarge: {
    minWidth: 1200,
  },
};

// Extra small devices (portrait phones)
const ExtraSmall = props => (
  <Responsive
    {...props}
    maxWidth={breakpoints.extraSmall.maxWidth}
  />
);

// Small devices (landscape phones)
const Small = props => (
  <Responsive
    {...props}
    minWidth={breakpoints.small.minWidth}
    maxWidth={breakpoints.small.maxWidth}
  />
);

// Medium devices (tablets)
const Medium = props => (
  <Responsive
    {...props}
    minWidth={breakpoints.medium.minWidth}
    maxWidth={breakpoints.medium.maxWidth}
  />
);

// Large devices (desktops)
const Large = props => (
  <Responsive
    {...props}
    minWidth={breakpoints.large.minWidth}
    maxWidth={breakpoints.large.maxWidth}
  />
);

// Extra large devices (large desktops)
const ExtraLarge = props => (
  <Responsive
    {...props}
    minWidth={breakpoints.extraLarge.minWidth}
  />
);

const LargerThanExtraSmall = props => (
  <Responsive
    {...props}
    minWidth={breakpoints.small.minWidth}
  />
);

export {
  breakpoints,
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
  LargerThanExtraSmall,
};
