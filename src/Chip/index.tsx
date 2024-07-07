import React, { ForwardedRef, KeyboardEventHandler, MouseEventHandler } from 'react';
import PropTypes, { type Requireable } from 'prop-types';
import classNames from 'classnames';
// @ts-ignore
import { requiredWhen } from '../utils/propTypes';
import { STYLE_VARIANTS } from './constants';
import ChipIcon from './ChipIcon';

export const CHIP_PGN_CLASS = 'pgn__chip';

export interface IChip {
  children: React.ReactNode,
  onClick?: KeyboardEventHandler & MouseEventHandler,
  className?: string,
  variant?: typeof STYLE_VARIANTS[keyof typeof STYLE_VARIANTS],
  iconBefore?: React.ComponentType,
  iconBeforeAlt?: string,
  iconAfter?: React.ComponentType,
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
  onClick,
  ...props
}: IChip, ref: ForwardedRef<HTMLDivElement>) => {
  const hasInteractiveIcons = !!(onIconBeforeClick || onIconAfterClick);
  const isChipInteractive = !hasInteractiveIcons && !!onClick;

  const interactionProps = isChipInteractive ? {
    onClick,
    onKeyPress: onClick,
    tabIndex: 0,
    role: 'button',
  } : {};

  return (
    <div
      className={classNames(
        CHIP_PGN_CLASS,
        `pgn__chip-${variant}`,
        className,
        { disabled, selected: isSelected, interactive: isChipInteractive },
      )}
      ref={ref}
      {...interactionProps}
      {...props}
    >
      {iconBefore && (
        <ChipIcon
          className={`${CHIP_PGN_CLASS}__icon-before`}
          src={iconBefore}
          onClick={onIconBeforeClick}
          alt={iconBeforeAlt}
          variant={variant}
          disabled={disabled}
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
          disabled={disabled}
        />
      )}
    </div>
  );
});

Chip.propTypes = {
  /** Specifies the content of the `Chip`. */
  children: PropTypes.node.isRequired,
  /** Specifies an additional `className` to add to the base element. */
  className: PropTypes.string,
  /** The `Chip` style variant to use. */
  variant: PropTypes.oneOf(['light', 'dark']),
  /** Disables the `Chip`. */
  disabled: PropTypes.bool,
  /** Click handler for the whole Chip, has effect only when Chip does not have any interactive icons. */
  onClick: PropTypes.func,
  /**
   * An icon component to render before the content.
   * Example import of a Paragon icon component:
   *
   * `import { Check } from '@openedx/paragon/icons';`
   */
  iconBefore: PropTypes.elementType as Requireable<React.ComponentType>,
  /** Specifies icon alt text. */
  iconBeforeAlt: requiredWhen(PropTypes.string, ['iconBefore', 'onIconBeforeClick']),
  /** A click handler for the `Chip` icon before. */
  onIconBeforeClick: PropTypes.func,
  /**
   * An icon component to render before after the content.
   * Example import of a Paragon icon component:
   *
   * `import { Check } from '@openedx/paragon/icons';`
   */
  iconAfter: PropTypes.elementType as Requireable<React.ComponentType>,
  /** Specifies icon alt text. */
  iconAfterAlt: requiredWhen(PropTypes.string, ['iconAfter', 'onIconAfterClick']),
  /** A click handler for the `Chip` icon after. */
  onIconAfterClick: PropTypes.func,
  /** Indicates if `Chip` has been selected. */
  isSelected: PropTypes.bool,
};

Chip.defaultProps = {
  className: undefined,
  variant: STYLE_VARIANTS.LIGHT,
  disabled: false,
  onClick: undefined,
  iconBefore: undefined,
  iconAfter: undefined,
  onIconBeforeClick: undefined,
  onIconAfterClick: undefined,
  isSelected: false,
  iconAfterAlt: undefined,
  iconBeforeAlt: undefined,
};

export default Chip;
