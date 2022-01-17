import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardSection = React.forwardRef(({
  className,
  children,
  title,
  actions,
  muted,
}, ref) => (
  <div
    className={classNames('pgn__card-section', className, { 'is-muted': muted })}
    ref={ref}
  >
    {title && <div className="pgn__card-section-title">{title}</div>}
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
};

CardSection.defaultProps = {
  className: undefined,
  title: undefined,
  actions: undefined,
  muted: false,
};

export default CardSection;
