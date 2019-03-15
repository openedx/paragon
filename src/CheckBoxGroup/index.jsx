import React from 'react';
import PropTypes from 'prop-types';

import styles from './CheckBoxGroup.scss';

function CheckBoxGroup(props) {
  return (
    <div className={styles['form-group']}>
      {props.children}
    </div>
  );
}

CheckBoxGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CheckBoxGroup;
