import React, { ForwardedRef, KeyboardEventHandler, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @ts-ignore
import Icon from '../Icon';
// @ts-ignore
import IconButton from '../IconButton';

export const ICON_AFTER_ALT_TEXT = 'Chip icon after';
export const ICON_BEFORE_ALT_TEXT = 'Chip icon before';

export const STYLE_VARIANTS = [
  'light',
  'dark',
];

export const CHIP_PGN_CLASS = 'pgn__chip';

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
      <div className={classNames('pgn__chip__icon-before', { active: onIconBeforeClick })}>
        {onIconBeforeClick ? (
          <IconButton
            src={iconBefore}
            onClick={onIconBeforeClick}
            onKeyPress={onIconBeforeClick}
            iconAs={Icon}
            alt={iconBeforeAlt}
            invertColors
            data-testid="icon-before"
          />
        ) : (
          <Icon src={iconBefore} />
        )}
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
      <div className={classNames('pgn__chip__icon-after', { active: onIconAfterClick })}>
        {onIconAfterClick ? (
          <IconButton
            onClick={onIconAfterClick}
            onKeyPress={onIconAfterClick}
            src={iconAfter}
            iconAs={Icon}
            alt={iconAfterAlt}
            invertColors
            data-testid="icon-after"
          />
        ) : (
          <Icon src={iconAfter} />
        )}
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
   * `import { Check } from '@edx/paragon/icons';`
   */
  iconBefore: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** Specifies icon alt text. */
  iconBeforeAlt: PropTypes.string,
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
  iconAfterAlt: PropTypes.string,
  /** A click handler for the `Chip` icon after. */
  onIconAfterClick: PropTypes.func,
  /** Indicates if `Chip` has been selected. */
  isSelected: PropTypes.bool,
};

Chip.defaultProps = {
  className: undefined,
  variant: 'light',
  disabled: false,
  iconBefore: undefined,
  iconAfter: undefined,
  onIconBeforeClick: undefined,
  onIconAfterClick: undefined,
  isSelected: false,
  iconAfterAlt: ICON_AFTER_ALT_TEXT,
  iconBeforeAlt: ICON_BEFORE_ALT_TEXT,
};

export default Chip;
