import React, {
  ForwardedRef, KeyboardEventHandler, MouseEventHandler, useState,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @ts-ignore
import Icon from '../Icon';
// @ts-ignore
import IconButton from '../IconButton';

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
}: IChip, ref: ForwardedRef<HTMLDivElement>) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onClick={handleClick}
      onKeyPress={handleClick}
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
              alt="Chip icon before"
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
              alt="Chip icon after"
              invertColors
              data-testid="icon-after"
            />
          ) : (
            <Icon src={iconAfter} />
          )}
        </div>
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
  /** A click handler for the `Chip` icon before. */
  onIconBeforeClick: PropTypes.func,
  /**
   * An icon component to render before after the content.
   * Example import of a Paragon icon component:
   *
   * `import { Check } from '@edx/paragon/icons';`
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
