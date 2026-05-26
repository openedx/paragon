import React from 'react';
import classNames from 'classnames';

import newId from '../utils/newId';

/**
 * An svg with an "img" role must satisfy the following a11y requirements
 * - It needs a text alternative in the form of aria-label, aria-labelledby, or screen-reader only text.
 * - If no label is desired, aria-label will be set to an empty string and aria-hidden to "true".
 * - focusable is set to false on the svg in all cases as a workaround for an ie11 bug
 */

interface SvgAttrs extends React.SVGAttributes<SVGElement> {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-hidden'?: boolean;
}

export interface IconProps extends Omit<React.ComponentPropsWithoutRef<'span'>, 'id' | 'className'> {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src?: React.ComponentType<React.SVGAttributes<SVGElement>>;
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs?: SvgAttrs;
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id?: string | null;
  /** The size of the icon. */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'inline';
  /** A class name that will define what the Icon looks like. */
  className?: string | string[];
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden?: boolean;
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText?: React.ReactNode;
}

function Icon({
  src: Component,
  id,
  className,
  hidden = true,
  screenReaderText,
  svgAttrs = {},
  size,
  ...attrs
}: IconProps) {
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
        className={classNames('pgn__icon', { [`pgn__icon__${size}`]: !!size }, Array.isArray(className) ? className.join(' ') : className)}
        id={id || undefined}
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
        className={Array.isArray(className) ? className.join(' ') : className}
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

export default Icon;
