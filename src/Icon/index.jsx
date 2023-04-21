import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import newId from '../utils/newId';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';

/**
 * An svg with an "img" role must satisfy the following a11y requirements
 * - It needs a text alternative in the form of aria-label, aria-labelledby, or screen-reader only text.
 * - If no label is desired, aria-label will be set to an empty string and aria-hidden to "true".
 * - focusable is set to false on the svg in all cases as a workaround for an ie11 bug
 */

function Icon({
  src: Component,
  id,
  className,
  hidden,
  screenReaderText,
  svgAttrs,
  size,
  ...attrs
}) {
  if (Component) {
    // If no aria label is specified, hide this icon from screenreaders
    const hasAriaLabel = svgAttrs['aria-label'] || svgAttrs['aria-labelledby'];

    const mergedSvgProps = { ...svgAttrs };

    if (!hasAriaLabel) {
      mergedSvgProps['aria-label'] = undefined;
      mergedSvgProps['aria-hidden'] = true;
    }

    return (
      <span
        className={classNames('pgn__icon', { [`pgn__icon__${size}`]: !!size }, className)}
        id={id}
        {...attrs}
      >
        <Component
          role="img"
          focusable={false}
          {...mergedSvgProps}
        />
        {screenReaderText && (
          <span className="sr-only">
            {screenReaderText}
          </span>
        )}
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
  svgAttrs: PropTypes.shape({
    'aria-label': PropTypes.string,
    'aria-labelledby': PropTypes.string,
  }),
  // eslint-disable-next-line max-len
  /** the `id` property of the Icon element, by default this value is generated with the `newId` function with the `prefix` of `Icon`. */
  id: PropTypes.string,
  // eslint-disable-next-line max-len
  /** The size of the icon. */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  // eslint-disable-next-line max-len
  /** A class name that will define what the Icon looks like. */
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
  size: undefined,
  className: undefined,
};

export default withDeprecatedProps(Icon, 'Icon', {
  className: {
    deprType: DeprTypes.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
});
