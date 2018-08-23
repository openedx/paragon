import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Icon.scss';
import newId from '../utils/newId';

function Icon(props) {
  return (
    <span>
      <span
        id={props.id ? props.id : newId('Icon')}
        className={classNames(props.className)}
        aria-hidden={props.hidden}
      />
      { props.screenReaderText &&
        <span className={classNames(styles['sr-only'])}>
          {props.screenReaderText}
        </span>
      }
    </span>
  );
}

Icon.propTypes = {
  id: PropTypes.string,
  className: PropTypes.arrayOf(PropTypes.string).isRequired,
  hidden: PropTypes.bool,
  screenReaderText: PropTypes.string,
};

Icon.defaultProps = {
  id: newId('Icon'),
  hidden: true,
  screenReaderText: undefined,
};

export default Icon;
