import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

// TODO: Convert to a dropdown if actions list is too long
const BulkActions = ({
  actions, selectedRows, classNames, ...rest
}) => (
  <div classnames={classNames} {...rest}>
    {actions.map(action => (
      <Button classnames={action.classNames} onClick={() => action.handleClick(selectedRows)} key={action.buttonText}>
        {action.buttonText}
      </Button>
    ))}
  </div>
);

BulkActions.defaultProps = {
  classNames: '',
};

BulkActions.propTypes = {
  /** Bulk actions to be performed on the selected rows */
  actions: PropTypes.arrayOf(PropTypes.shape({
    /** Bulk action button text */
    buttonText: PropTypes.string.isRequired,
    /** handleClick will be passed the selected rows */
    handleClick: PropTypes.func.isRequired,
    /** classnames for button class */
    classNames: PropTypes.string,
  })).isRequired,
  /** User selected rows that actions will be performed on */
  selectedRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  /** class names for the div wrapping the button components */
  classNames: PropTypes.string,
};

export default BulkActions;
