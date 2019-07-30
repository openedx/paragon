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
  // eslint-disable-next-line max-len
  /** represents the CheckBox components defined within the CheckBoxGroup component and is not a specific named prop that needs to be passed in. At least one CheckBox must be defined within the group. Example: `<CheckBoxGroup><CheckBox .../></CheckBoxGroup>`
   */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CheckBoxGroup;
