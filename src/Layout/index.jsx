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
      const sizeProps = props[size];
      const { span = 0, offset = 0 } = (sizeProps && sizeProps[index]) || {};
      if (errors[size] === undefined) {
        errors[size] = false;
        if (!isValidDimensions(sizeProps, childrenLength)) {
          errors[size] = `${size} prop accepts array which length must be equal to the number of children.`;
        }
      }
      newProps[size] = { span, offset };
    });
    newProps.ref = child.ref;
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
  xs: PropTypes.arrayOf(PropTypes.shape({
    span: PropTypes.oneOf(COL_VALUES).isRequired,
    offset: PropTypes.oneOf(COL_VALUES),
  })),
  sm: PropTypes.arrayOf(PropTypes.shape({
    span: PropTypes.oneOf(COL_VALUES).isRequired,
    offset: PropTypes.oneOf(COL_VALUES),
  })),
  md: PropTypes.arrayOf(PropTypes.shape({
    span: PropTypes.oneOf(COL_VALUES).isRequired,
    offset: PropTypes.oneOf(COL_VALUES),
  })),
  lg: PropTypes.arrayOf(PropTypes.shape({
    span: PropTypes.oneOf(COL_VALUES).isRequired,
    offset: PropTypes.oneOf(COL_VALUES),
  })),
  xl: PropTypes.arrayOf(PropTypes.shape({
    span: PropTypes.oneOf(COL_VALUES).isRequired,
    offset: PropTypes.oneOf(COL_VALUES),
  })),
};

const sizeDefaultProps = { span: [], offset: [] };

SIZES.forEach(size => {
  // eslint-disable-next-line react/default-props-match-prop-types
  Layout.defaultProps[size] = sizeDefaultProps;
});

export { Col, Row };
Layout.Element = LayoutElement;
export default Layout;
