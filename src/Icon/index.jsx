import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import newId from '../utils/newId';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';

function Icon({
  src: Component,
  id,
  className,
  hidden,
  screenReaderText,
  svgAttrs,
  ...attrs
}) {
  if (Component) {
    const mergedSvgProps = { ...svgAttrs, role: 'img' };
    // If no aria label is specified, hide this icon from screenreaders
    if (!svgAttrs['aria-label']) {
      mergedSvgProps['aria-label'] = '';
      mergedSvgProps['aria-hidden'] = true;
      mergedSvgProps.focusable = false;
    }
    return (
      <span
        className={classNames('pgn__icon', className)}
        id={id}
        {...attrs}
      >
        <Component {...mergedSvgProps} />
      </span>
    );
  }

  return (
    <>
      <span
        id={id || newId('Icon')}
        className={className}
        aria-hidden={hidden}
      />
      {screenReaderText && (
        <span className="sr-only">
          {screenReaderText}
        </span>
      )}
    </>
  );
}

Icon.propTypes = {
  // eslint-disable-next-line max-len
  /** An icon component to render. Example import of a Paragon icon component: `import { Check } from '@edx/paragon/dist/icon';` */
  src: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: PropTypes.object, // eslint-disable-line
  // eslint-disable-next-line max-len
  /** the `id` property of the Icon element, by default this value is generated with the `newId` function with the `prefix` of `Icon`. */
  id: PropTypes.string,
  // eslint-disable-next-line max-len
  /** array of class names that will define what the Icon looks like. For example, a list of FontAwesome style names. */
  className: PropTypes.string,
  // eslint-disable-next-line max-len
  /** a boolean that determines the value of `aria-hidden` attribute on the Icon span, this value is `true` by default. */
  hidden: PropTypes.bool,
  // eslint-disable-next-line max-len
  /** a string or an element that will be used on a secondary span leveraging the `sr-only` style for screenreader only text, this value is `undefined` by default. This value is recommended for use unless the Icon is being used in a way that is purely decorative or provides no additional context for screen reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Icon.defaultProps = {
  src: null,
  svgAttrs: {},
  id: undefined,
  hidden: true,
  screenReaderText: undefined,
  className: undefined,
};

export default withDeprecatedProps(Icon, 'Icon', {
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
});
