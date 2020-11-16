import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

// TODO: Convert to a dropdown if actions list is too long
const BulkActions = ({ actions, selectedRows, classNames, ...rest }) => {
  return (
    <div classnames={classNames} {...rest}>
      {actions.map(action => {
        return (
          <Button classnames={action.classNames} onClick={() => action.handleClick(selectedRows)} key={action.buttonText}>
            {action.buttonText}
          </Button>
        );
      })}
    </div>
  );
};

BulkActions.defaultProps = {
  classNames: '',
};

BulkActions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    buttonText: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    classNames: PropTypes.string,
  })).isRequired,
  selectedRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  classNames: PropTypes.string,
};

export default BulkActions;
