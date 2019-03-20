import React from 'react';
import PropTypes from 'prop-types';


function CheckBoxGroup(props) {
  return (
    <div className="form-group">
      {props.children}
    </div>
  );
}

CheckBoxGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CheckBoxGroup;
