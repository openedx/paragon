import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

const COL_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto'];
const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];

const LayoutElement = React.forwardRef((props, ref) => <div ref={ref} {...props} />);

const Layout = React.forwardRef(({ children, ...props }, ref) => {
  const childrenLength = children.length;

  const isValidDimensions = (dataList, validLength) => !dataList || dataList.length === validLength;
  const errors = {};

  const layout = React.Children.map(children, (child, index) => {
    const newProps = { ...child.props };
    SIZES.forEach(size => {
      const spanArray = props[size]?.span;
      const offsetArray = props[size]?.offset;
      if (errors[size] === undefined) {
        errors[size] = false;
        if (!isValidDimensions(spanArray, childrenLength) || !isValidDimensions(offsetArray, childrenLength)) {
          errors[size] = `Length of span and offset arrays for breakpoint ${size} must be equal to the number of children`;
        }
      }
      const sizeValue = (spanArray && spanArray[index]) || 0;
      const offsetValue = (offsetArray && offsetArray[index]) || 0;
      newProps[size] = { span: sizeValue, offset: offsetValue, ref: child.ref };
    });
    return React.createElement(Col, newProps, child.props.children);
  });

  Object.keys(errors).forEach(breakpoint => {
    if (errors[breakpoint]) {
      // eslint-disable-next-line no-console
      console.error(errors[breakpoint]);
    }
  });

  return (
    <Row ref={ref}>
      {layout}
    </Row>
  );
});

Layout.defaultProps = {
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.shape({
    span: PropTypes.arrayOf(PropTypes.oneOf(COL_VALUES)).isRequired,
    offset: PropTypes.arrayOf(PropTypes.oneOf(COL_VALUES)),
  }),
  sm: PropTypes.shape({
    span: PropTypes.arrayOf(PropTypes.oneOf(COL_VALUES)).isRequired,
    offset: PropTypes.arrayOf(PropTypes.oneOf(COL_VALUES)),
  }),
  md: PropTypes.shape({
    span: PropTypes.arrayOf(PropTypes.oneOf(COL_VALUES)).isRequired,
    offset: PropTypes.arrayOf(PropTypes.oneOf(COL_VALUES)),
  }),
  lg: PropTypes.shape({
    span: PropTypes.arrayOf(PropTypes.oneOf(COL_VALUES)).isRequired,
    offset: PropTypes.arrayOf(PropTypes.oneOf(COL_VALUES)).isRequired,
  }),
  xl: PropTypes.shape({
    span: PropTypes.arrayOf(PropTypes.oneOf(COL_VALUES)).isRequired,
    offset: PropTypes.arrayOf(PropTypes.oneOf(COL_VALUES)),
  }),
};

const sizeDefaultProps = { span: [], offset: [] };

SIZES.forEach(size => {
  // eslint-disable-next-line react/default-props-match-prop-types
  Layout.defaultProps[size] = sizeDefaultProps;
});

export {
  Col,
  Row,
};
Layout.Element = LayoutElement;
export default Layout;
