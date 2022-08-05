import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconButton, Icon } from '..';
import { Close, MoreVert } from '../../icons';

const CardActionIcon = React.forwardRef(
  ({
    className,
    actionIcon,
    onClick,
    isActive,
    variant,
  }, ref) => {
    if (actionIcon === 'overflow') {
      return (
        <div
          className={classNames(
            className,
            'd-flex flex-wrap pgn__card-close-container',
          )}
          ref={ref}
        >
          <IconButton
            src={MoreVert}
            iconAs={Icon}
            alt="See more"
            onClick={onClick}
            variant={variant}
            invertColors={variant === 'dark'}
            isActive={isActive}
            className="mr-2"
          />
        </div>
      );
    }
    return (
      <div
        className={classNames(
          className,
          'd-flex flex-wrap pgn__card-close-container',
        )}
        ref={ref}
      >
        <IconButton
          src={Close}
          iconAs={Icon}
          alt="Close"
          onClick={onClick}
          variant={variant}
          invertColors={variant === 'dark'}
          isActive={isActive}
          className="mr-2"
        />
      </div>
    );
  },
);

CardActionIcon.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Options for which type of actionIcon the Card will use. */
  actionIcon: PropTypes.oneOf(['overflow', 'dismiss']),
  /** Click handler for the button */
  onClick: PropTypes.func,
  /** whether to show the `IconButton` in an active state, whose styling is distinct from default state */
  isActive: PropTypes.bool,
  /** The visual style of the dialog box */
  variant: PropTypes.oneOf(['default', 'warning', 'danger', 'success', 'dark']),
};

CardActionIcon.defaultProps = {
  className: undefined,
  actionIcon: 'dismiss',
  onClick: () => {},
  isActive: false,
  variant: 'dark',
};

export default CardActionIcon;
