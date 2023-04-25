// import breakpointSizes from '../../scss/core/_exports.module.scss';

const {
  sm, md, lg, xl, xxl,
} = {};

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
    maxWidth: 1399.98,
  },
  extraExtraLarge: {
    minWidth: 1400,
  },
};

export default breakpoints;
