import React from 'react';
import PropTypes from 'prop-types';

const FormControlDecorator = ({ children, location }) => (
  <div className={`pgn__form-control-decorator pgn__form-control-decorator-${location}`}>
    {children}
  </div>
);

FormControlDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.oneOf(['leading', 'trailing']),
};

FormControlDecorator.defaultProps = {
  location: 'leading',
};

export default FormControlDecorator;
