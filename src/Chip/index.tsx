import React, { ForwardedRef, KeyboardEventHandler, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @ts-ignore
import Icon from '../Icon';

const STYLE_VARIANTS = [
  'light',
  'dark',
];

export interface IChip {
  children: React.ReactNode,
  className?: string,
  variant?: string,
  iconBefore?: React.ReactElement | Function,
  iconAfter?: React.ReactElement | Function,
  onIconBeforeClick?: KeyboardEventHandler & MouseEventHandler,
  onIconAfterClick?: KeyboardEventHandler & MouseEventHandler,
  disabled?: boolean,
}

export const CHIP_PGN_CLASS = 'pgn__chip';

const Chip = React.forwardRef(({
  children,
  className,
  variant,
  iconBefore,
  iconAfter,
  onIconBeforeClick,
  onIconAfterClick,
  disabled,
  ...props
}: IChip, ref: ForwardedRef<HTMLDivElement>) => (
  <div
    className={classNames(
      CHIP_PGN_CLASS,
      `pgn__chip-${variant}`,
      className,
      { disabled },
    )}
    ref={ref}
    {...props}
  >
    {iconBefore && (
      <div
        className={classNames('pgn__chip__icon-before')}
      >
        <Icon src={iconBefore} />
      </div>
    )}
    <div
      className={classNames('pgn__chip__label', {
        'p-before': iconBefore,
        'p-after': iconAfter,
      })}
    >
      {children}
    </div>
    {iconAfter && (
      <div
        className={classNames('pgn__chip__icon-after', { active: onIconAfterClick })}
        role="button"
        onClick={onIconAfterClick}
        onKeyPress={onIconAfterClick}
        tabIndex={disabled ? -1 : 0}
        data-testid="icon-after"
      >
        <Icon src={iconAfter} />
      </div>
    )}
  </div>
));

Chip.propTypes = {
  /** Specifies the content of the `Chip`. */
  children: PropTypes.node.isRequired,
  /** Specifies an additional `className` to add to the base element. */
  className: PropTypes.string,
  /** The `Chip` style variant to use. */
  variant: PropTypes.oneOf(STYLE_VARIANTS),
  /** Disables the `Chip`. */
  disabled: PropTypes.bool,
  /**
   * An icon component to render before the content.
   * Example import of a Paragon icon component:
   *
   * `import { Check } from '@openedx/paragon/icons';`
   */
  iconBefore: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** A click handler for the `Chip` icon before. */
  onIconBeforeClick: PropTypes.func,
  /**
   * An icon component to render before after the content.
   * Example import of a Paragon icon component:
   *
   * `import { Check } from '@openedx/paragon/icons';`
   */
  iconAfter: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** A click handler for the `Chip` icon after. */
  onIconAfterClick: PropTypes.func,
};

Chip.defaultProps = {
  className: undefined,
  variant: 'light',
  disabled: false,
  iconBefore: undefined,
  iconAfter: undefined,
  onIconBeforeClick: undefined,
  onIconAfterClick: undefined,
};

export default Chip;
