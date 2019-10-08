import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ModalContext from './ModalContext';

const ModalTitle = ({
  children, tag, className, id, ...props
}) => {
  const { modalLabelId } = useContext(ModalContext);

  return React.createElement(
    tag,
    {
      ...props,
      className: classNames('modal-title', className),
      id: classNames(modalLabelId, id),
    },
    children
  );
}

ModalTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  tag: PropTypes.elementType,
};

ModalTitle.defaultProps = {
  children: undefined,
  className: undefined,
  id: undefined,
  tag: 'h5',
};

export default ModalTitle;
