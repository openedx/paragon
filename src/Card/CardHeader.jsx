import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextClamp from 'react-string-clamp';

const CardHeader = React.forwardRef(({
  actions,
  className,
  size,
  subtitle,
  title,
  maxLines,
  hasClamp,
}, ref) => {
  const cloneActions = useCallback(
    (Action) => {
      if (React.isValidElement(Action)) {
        const { children } = Action.props;
        const addtlActionProps = {
          size,
          children: Array.isArray(children) ? children.map(cloneActions) : cloneActions(children),
        };
        return React.cloneElement(Action, addtlActionProps);
      }

      return Action;
    },
    [size],
  );

  return (
    <div className={classNames('pgn__card-header', className)} ref={ref}>
      <div className="pgn__card-header-content">
        {title && (
          hasClamp
            ? (
              <TextClamp
                text={title}
                lines={maxLines}
                className={`pgn__card-header-title-${size}`}
              />
            ) : (
              <div className={`pgn__card-header-title-${size}`}>{title}</div>
            ))}
        {subtitle
          && (hasClamp
            ? (
              <TextClamp
                text={subtitle}
                lines={maxLines}
                className={`pgn__card-header-subtitle-${size}`}
              />
            ) : (
              <div className={`pgn__card-header-subtitle-${size}`}>{subtitle}</div>
            ))}
      </div>
      {actions && (
        <div className="pgn__card-header-actions">
          {size !== 'md' ? cloneActions(actions) : actions}
        </div>
      )}
    </div>
  );
});

CardHeader.propTypes = {
  /** Optional node to render on the top right of the card header,
   *  i.e. ActionRow or a DropdownMenu.
   * */
  actions: PropTypes.node,
  /** The class name for the CardHeader component */
  className: PropTypes.string,
  /** The title for the CardHeader component */
  title: PropTypes.node,
  /** The size of the CardHeader component */
  size: PropTypes.oneOf(['sm', 'md']),
  /** The subtitle of the CardHeader component */
  subtitle: PropTypes.node,
  /** The switcher limiting the number of rows  */
  hasClamp: PropTypes.bool,
  /** The maximum number of lines  */
  maxLines: PropTypes.number,
};

CardHeader.defaultProps = {
  actions: null,
  className: null,
  size: 'md',
  title: null,
  subtitle: null,
  hasClamp: false,
  maxLines: null,
};

export default CardHeader;
