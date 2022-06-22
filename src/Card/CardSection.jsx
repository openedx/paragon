import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextClamp from 'react-string-clamp';

const CardSection = React.forwardRef(({
  className,
  children,
  title,
  actions,
  muted,
  hasClamp,
  maxLines,
}, ref) => (
  <div
    className={classNames('pgn__card-section', className, { 'is-muted': muted })}
    ref={ref}
  >
    {title
      && (hasClamp ? (
        <TextClamp
          text={title}
          lines={maxLines}
          className="pgn__card-section-title"
        />
      ) : (
        <div className="pgn__card-section-title">{title}</div>
      ))}
    {children}
    {actions && <div className="pgn__card-section-actions">{actions}</div>}
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
  /** The switcher limiting the number of rows  */
  hasClamp: PropTypes.bool,
  /** The maximum number of lines  */
  maxLines: PropTypes.number,
};

CardSection.defaultProps = {
  className: undefined,
  title: undefined,
  actions: undefined,
  muted: false,
  hasClamp: false,
  maxLines: undefined,
};

export default CardSection;
