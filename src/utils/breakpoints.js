// NOTE: These are the breakpoints used in Bootstrap v4.0.0 as seen in
// the documentation (https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)

import {
  sm, md, lg, xl, xxl,
} from '../../scss/core/_extend.module.scss';

const breakpoints = {
  extraSmall: {
    maxWidth: sm,
  },
  small: {
    minWidth: sm,
    maxWidth: md,
  },
  medium: {
    minWidth: md,
    maxWidth: lg,
  },
  large: {
    minWidth: lg,
    maxWidth: xl,
  },
  extraLarge: {
    minWidth: xl,
    maxWidth: xxl,
  },
  extraExtraLarge: {
    minWidth: xxl,
  },
};

export default breakpoints;
