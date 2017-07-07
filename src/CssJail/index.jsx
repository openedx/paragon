import React from 'react';
import PropTypes from 'prop-types';

import styles from './CssJail.scss';

function CssJail({ children }) {
  return (
    <div
      style={{ fontFamily: 'sans-serif' }}
      className={styles['css-jail']}
    >
      {children}
    </div>
  );
}

CssJail.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CssJail;
