import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardSectionActions = ({
  className,
  children,
  ...attrs
}) => {
  const orderedChildren = useMemo(
    () => React.Children.toArray(children).reverse(),
    [children],
  );

  return (
    <div
      {...attrs}
      className={classNames('pgn__card-section-actions', className)}
    >
      {orderedChildren}
    </div>
  );
};

CardSectionActions.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardSectionActions.defaultProps = {
  className: undefined,
};

export default CardSectionActions;
