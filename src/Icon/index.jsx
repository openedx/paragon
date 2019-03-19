import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Icon.scss';

function Icon({
  className,
  hidden,
  screenReaderText,
  ...other
}) {
  const renderScreenReaderText = () => {
    if (!screenReaderText) return null;
    return <span className={styles['sr-only']}>{screenReaderText}</span>;
  };

  return (
    <React.Fragment>
      <span className={classNames(className)} aria-hidden={hidden} {...other} />
      {renderScreenReaderText()}
    </React.Fragment>
  );
}

Icon.propTypes = {
  className: PropTypes.arrayOf(PropTypes.string).isRequired,
  hidden: PropTypes.bool,
  screenReaderText: PropTypes.string,
};

Icon.defaultProps = {
  hidden: true,
  screenReaderText: undefined,
};

export default Icon;
