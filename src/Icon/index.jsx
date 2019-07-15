import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import newId from '../utils/newId';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';


function Icon(props) {
  return (
    <React.Fragment>
      <span
        id={props.id ? props.id : newId('Icon')}
        className={props.className}
        aria-hidden={props.hidden}
      />
      { props.screenReaderText &&
        <span className={classNames('sr-only')}>
          {props.screenReaderText}
        </span>
      }
    </React.Fragment>
  );
}

Icon.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string.isRequired,
  hidden: PropTypes.bool,
  screenReaderText: PropTypes.string,
};

Icon.defaultProps = {
  id: undefined,
  hidden: true,
  screenReaderText: undefined,
};

export default withDeprecatedProps(Icon, 'Icon', {
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
});
