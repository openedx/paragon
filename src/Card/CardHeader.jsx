import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LinesEllipsis from 'react-lines-ellipsis';
// import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

// const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const TITLE_LINES_COUNT = 2;
const SUBTITLE_LINES_COUNT = TITLE_LINES_COUNT;

const CardHeader = React.forwardRef(({
  actions,
  className,
  size,
  subtitle,
  title,
  maxLineTitle,
  maxLineSubTitle,
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
        {title
        && (
        <LinesEllipsis
          basedOn="letters"
          className={`pgn__card-header-title-${size}`}
          text={`${title}`}
          maxLine={maxLineTitle}
        />
        )}
        {subtitle
        && (
        <LinesEllipsis
          basedOn="letters"
          className={`pgn__card-header-subtitle-${size}`}
          text={`${subtitle}`}
          maxLine={maxLineSubTitle}
        />
        )}
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
  /** Max count of lines allowed for Title */
  maxLineTitle: PropTypes.string,
  /** Max count of lines allowed for SubTitle */
  maxLineSubTitle: PropTypes.string,
};

CardHeader.defaultProps = {
  actions: null,
  className: null,
  size: 'md',
  title: null,
  subtitle: null,
  maxLineTitle: TITLE_LINES_COUNT,
  maxLineSubTitle: SUBTITLE_LINES_COUNT,
};

export default CardHeader;
