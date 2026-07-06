import React, { ForwardedRef, KeyboardEventHandler, MouseEventHandler } from 'react';
import classNames from 'classnames';
import ChipIcon from './ChipIcon';
import { STYLE_VARIANTS } from './constants';

export const CHIP_PGN_CLASS = 'pgn__chip';

export interface IChip {
  /** Specifies the content of the `Chip`. */
  children: React.ReactNode,
  /** Click handler for the whole `Chip`, has effect only when Chip does not have any interactive icons. */
  onClick?: KeyboardEventHandler & MouseEventHandler,
  /** Specifies an additional `className` to add to the base element. */
  className?: string,
  /** The `Chip` style [variant](https://github.com/openedx/paragon/blob/release-23.x/src/Chip/constants.ts) to use. */
  variant?: typeof STYLE_VARIANTS[keyof typeof STYLE_VARIANTS],
  /**
   * An icon component to render before the content.
   * Example import of a Paragon icon component:
   *
   * `import { Check } from '@openedx/paragon/icons';`
   */
  iconBefore?: React.ComponentType,
  /** Specifies icon alt text. */
  iconBeforeAlt?: string,
  /**
   * An icon component to render before after the content.
   * Example import of a Paragon icon component:
   *
   * `import { Check } from '@openedx/paragon/icons';`
   */
  iconAfter?: React.ComponentType,
  /** Specifies icon alt text. */
  iconAfterAlt?: string,
  /** A click handler for the `Chip` icon before. */
  onIconBeforeClick?: KeyboardEventHandler & MouseEventHandler,
  /** A click handler for the `Chip` icon after. */
  onIconAfterClick?: KeyboardEventHandler & MouseEventHandler,
  /** Disables the `Chip`. */
  disabled?: boolean,
  /** Indicates if `Chip` has been selected. */
  isSelected?: boolean,
}

const Chip = React.forwardRef(({
  children,
  className,
  variant = 'light',
  iconBefore,
  iconBeforeAlt,
  iconAfter,
  iconAfterAlt,
  onIconBeforeClick,
  onIconAfterClick,
  disabled = false,
  isSelected = false,
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
          /* The following two props should only be passed if _both_ are defined, but we haven't been checking that nor
             enforcing it at runtime, so doing so now would be a breaking change. Hence the `!` */
          onClick={onIconBeforeClick!}
          alt={iconBeforeAlt!}
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
          /* The following two props should only be passed if _both_ are defined, but we haven't been checking that nor
             enforcing it at runtime, so doing so now would be a breaking change. Hence the `!` */
          onClick={onIconAfterClick!}
          alt={iconAfterAlt!}
          variant={variant}
          disabled={disabled}
        />
      )}
    </div>
  );
});

export default Chip;
