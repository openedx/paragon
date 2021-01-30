import React from 'react';
import classNames from 'classnames';

const CardDivider = ({ className, ...attrs }) => (
  <div
    {...attrs}
    className={classNames('pgn__card-divider', className)}
  />
);

export default CardDivider;
