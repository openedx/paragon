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
  // eslint-disable-next-line max-len
  /** the `id` property of the Icon element, by default this value is generated with the `newId` function with the `prefix` of `Icon`. */
  id: PropTypes.string,
  // eslint-disable-next-line max-len
  /** array of class names that will define what the Icon looks like. For example, a list of FontAwesome style names. */
  className: PropTypes.string.isRequired,
  // eslint-disable-next-line max-len
  /** a boolean that determines the value of `aria-hidden` attribute on the Icon span, this value is `true` by default. */
  hidden: PropTypes.bool,
  // eslint-disable-next-line max-len
  /** a string that will be used on a secondary span leveraging the `sr-only` style for screenreader only text, this value is `undefined` by default. This value is recommended for use unless the Icon is being used in a way that is purely decorative or provides no additional context for screen reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
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
