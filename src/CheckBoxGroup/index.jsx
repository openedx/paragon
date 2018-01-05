import React from 'react';
import PropTypes from 'prop-types';
import ElementPropTypes from 'react-element-proptypes';

import CheckBox from '../CheckBox';
import styles from './CheckBoxGroup.scss';

function CheckBoxGroup(props) {
  return (
    <div className={styles['form-group']}>
      {props.children}
    </div>
  );
}

CheckBoxGroup.propTypes = {
  children: PropTypes.arrayOf(ElementPropTypes.elementOfType(CheckBox)).isRequired,
};

export default CheckBoxGroup;
