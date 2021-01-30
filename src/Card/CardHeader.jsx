import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from 'react-bootstrap/Card';

const CardHeader = ({
  className,
  children,
  ...attrs
}) => (
  <div
    {...attrs}
    className={classNames('pgn__card-header', className)}
  >
    {children}
  </div>
);

const CardHeaderTitle = ({
  as: Component,
  className,
  children,
  ...attrs
}) => (
  <Card.Title
    {...attrs}
    className={classNames('pgn__card-header-title', className)}
    as={Component}
  >
    {children}
  </Card.Title>
);

CardHeaderTitle.propTypes = {
  as: PropTypes.elementType,
};

CardHeaderTitle.defaultProps = {
  as: 'h3',
};

CardHeader.Title = CardHeaderTitle;

export default CardHeader;
