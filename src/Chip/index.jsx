import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';

const STYLE_VARIANTS = [
  'light',
  'dark',
];

const Chip = ({
  as,
  children,
  className,
  variant,
  active,
  iconBefore,
  iconAfter,
  ...props
}) => {
  const elementProps = {
    ...props,
    className: classNames(
      'pgn__chip',
      `pgn__chip-${variant}`,
      { active },
      className,
    ),
  };
  const elementContent = (
    <>
      {iconBefore && <Icon className={classNames('chip-icon-before')} src={iconBefore} />}
      {children}
      {iconAfter && <Icon className={classNames('chip-icon-after')} src={iconAfter} />}
    </>
  );
  return React.createElement(props.href ? 'a' : as, elementProps, elementContent);
};

Chip.propTypes = {
  /** Specifies the base HTML element. */
  as: PropTypes.elementType,
  /** Specifies an additional `className` to add to the base element. */
  className: PropTypes.string,
  /** Specifies the content of the `Chip`. */
  children: PropTypes.node,
  /** The `Chip` style variant to use. */
  variant: PropTypes.oneOf(STYLE_VARIANTS),
  /** Adds the `active` class to the `Chip`. */
  active: PropTypes.bool,
  /** Disables the `Chip`. */
  disabled: PropTypes.bool,
  /** Providing a `href` will render an `<a>` element, styled as a button. */
  href: PropTypes.string,
  /**
   * An icon component to render before the content.
   * Example import of a Paragon icon component:
   *
   * `import { Check } from '@edx/paragon/icons';`
   */
  iconBefore: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /**
   * An icon component to render before after the content.
   * Example import of a Paragon icon component:
   *
   * `import { Check } from '@edx/paragon/icons';`
   */
  iconAfter: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** A click handler for the `Chip` */
  onClick: PropTypes.func,
};

Chip.defaultProps = {
  as: 'button',
  className: undefined,
  children: null,
  variant: 'light',
  active: false,
  disabled: false,
  href: undefined,
  iconBefore: undefined,
  iconAfter: undefined,
  onClick: () => {},
};

export default Chip;
