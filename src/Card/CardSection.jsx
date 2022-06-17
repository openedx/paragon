import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LinesEllipsis from 'react-lines-ellipsis';

const TITLE_LINES_COUNT = 1;

const CardSection = React.forwardRef(({
  className,
  children,
  title,
  actions,
  muted,
  maxLineTitle,
}, ref) => (
  <div
    className={classNames('pgn__card-section', className, { 'is-muted': muted })}
    ref={ref}
  >
    {title
    && (
    <LinesEllipsis
      className="pgn__card-section-title"
      text={`${title}`}
      maxLine={maxLineTitle}
    />
    )}
    <LinesEllipsis
      className="pgn__card-section-title"
      text={`${children}`}
      maxLine={maxLineTitle}
    />
    {/* {children} */}
    {actions && (<div className="pgn__card-section-actions">{actions}</div>)}
  </div>
));

CardSection.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies title of the `Section`. */
  title: PropTypes.node,
  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions: PropTypes.node,
  /** Specifies whether to display `Section` with muted styling. */
  muted: PropTypes.bool,
  /** Max count of lines allowed */
  maxLineTitle: PropTypes.string,
};

CardSection.defaultProps = {
  className: undefined,
  title: undefined,
  actions: undefined,
  muted: false,
  maxLineTitle: TITLE_LINES_COUNT,
};

export default CardSection;
