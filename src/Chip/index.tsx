import React, { ForwardedRef, KeyboardEventHandler, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @ts-ignore
import { requiredWhen } from '../utils/propTypes';
// @ts-ignore
import { CHIP_PGN_CLASS, STYLE_VARIANTS } from './constants';
// @ts-ignore
import ChipIcon from './ChipIcon';

export interface IChip {
  children: React.ReactNode,
  className?: string,
  variant?: string,
  iconBefore?: React.ReactElement | Function,
  iconBeforeAlt?: string,
  iconAfter?: React.ReactElement | Function,
  iconAfterAlt?: string,
  onIconBeforeClick?: KeyboardEventHandler & MouseEventHandler,
  onIconAfterClick?: KeyboardEventHandler & MouseEventHandler,
  disabled?: boolean,
  isSelected?: boolean,
}

const Chip = React.forwardRef(({
  children,
  className,
  variant,
  iconBefore,
  iconBeforeAlt,
  iconAfter,
  iconAfterAlt,
  onIconBeforeClick,
  onIconAfterClick,
  disabled,
  isSelected,
  ...props
}: IChip, ref: ForwardedRef<HTMLDivElement>) => (
  <div
    tabIndex={0}
    role="button"
    className={classNames(
      CHIP_PGN_CLASS,
      `pgn__chip-${variant}`,
      className,
      { disabled, selected: isSelected },
    )}
    ref={ref}
    {...props}
  >
    {iconBefore && (
      <ChipIcon
        className={`${CHIP_PGN_CLASS}__icon-before`}
        src={iconBefore}
        onClick={onIconBeforeClick}
        alt={iconBeforeAlt}
        variant={variant}
      />
    )}
    <div
      className={classNames(`${CHIP_PGN_CLASS}__label`, {
        'p-before': iconBefore,
        'p-after': iconAfter,
      })}
    >
      {children}
    </div>
    {iconAfter && (
      <ChipIcon
        className={`${CHIP_PGN_CLASS}__icon-after`}
        src={iconAfter}
        onClick={onIconAfterClick}
        alt={iconAfterAlt}
        variant={variant}
      />
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
   * `import { Check } from '@edx/paragon/icons';`
   */
  iconBefore: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** Specifies icon alt text. */
  iconBeforeAlt: requiredWhen(PropTypes.string, 'iconBefore'),
  /** A click handler for the `Chip` icon before. */
  onIconBeforeClick: PropTypes.func,
  /**
   * An icon component to render before after the content.
   * Example import of a Paragon icon component:
   *
   * `import { Check } from '@edx/paragon/icons';`
   */
  iconAfter: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** Specifies icon alt text. */
  iconAfterAlt: requiredWhen(PropTypes.string, 'iconAfter'),
  /** A click handler for the `Chip` icon after. */
  onIconAfterClick: PropTypes.func,
  /** Indicates if `Chip` has been selected. */
  isSelected: PropTypes.bool,
};

Chip.defaultProps = {
  className: undefined,
  variant: STYLE_VARIANTS[0],
  disabled: false,
  iconBefore: undefined,
  iconAfter: undefined,
  onIconBeforeClick: undefined,
  onIconAfterClick: undefined,
  isSelected: false,
  iconAfterAlt: undefined,
  iconBeforeAlt: undefined,
};

export default Chip;
