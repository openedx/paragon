import breakpointSizes from '../../styles/scss/core/_exports.module.scss';

const {
  sm, md, lg, xl, xxl,
} = breakpointSizes;

const breakpoints = {
  extraSmall: {
    maxWidth: parseFloat(sm) || 575.98,
  },
  small: {
    minWidth: parseFloat(sm) || 576,
    maxWidth: parseFloat(md) || 767.98,
  },
  medium: {
    minWidth: parseFloat(md) || 768,
    maxWidth: parseFloat(lg) || 991.98,
  },
  large: {
    minWidth: parseFloat(lg) || 992,
    maxWidth: parseFloat(xl) || 1199.98,
  },
  extraLarge: {
    minWidth: parseFloat(xl) || 1200,
    maxWidth: parseFloat(xxl) || 1399.98,
  },
  extraExtraLarge: {
    minWidth: parseFloat(xxl) || 1400,
  },
};

export default breakpoints;
