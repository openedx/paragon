import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  Button, ButtonGroup, DropdownButton, Dropdown,
} from '..';

const BulkActions = ({
  actions, selectedRows, className, ...rest
}) => {
  const [visibleActions, dropdownActions] = useMemo(() => {
    let firstTwoActions = [];
    let extraActions = [];
    if (actions.length <= 2) {
      firstTwoActions = actions;
    } else {
      firstTwoActions = actions.splice(0, 2);
      extraActions = actions;
    }
    /*  Reversing the array because to the user it makes sense to put the primary button first,
        but we want it on the right */
    return [firstTwoActions.reverse(), extraActions];
  }, [actions]);

  return (
    <div className={`pgn__bulk-actions ${className}`} {...rest}>
      <ButtonGroup>
        {dropdownActions.length > 0 && (
        <DropdownButton title="More actions">
          {dropdownActions.map((action) => (
            <Dropdown.Item
              className={action.classNames}
              key={action.buttonText}
              onClick={() => action.handleClick(selectedRows)}
            >
              {action.buttonText}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        )}
        {/* Reversing the array because to the user it makes sense to put the primary button first,
        but we want it on the right */}
        {visibleActions.map((action, idx) => (
          <Button
            variant={idx === 0 || visibleActions.length < 2 ? 'outline-primary' : 'brand'}
            className={`${action.className ? action.className : ''}`}
            onClick={() => action.handleClick(selectedRows)}
            key={action.buttonText}
          >
            {action.buttonText}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

BulkActions.defaultProps = {
  className: '',
};

BulkActions.propTypes = {
  /** Bulk actions to be performed on the selected rows */
  actions: PropTypes.arrayOf(PropTypes.shape({
    /** Bulk action button text */
    buttonText: PropTypes.string.isRequired,
    /** handleClick will be passed the selected rows */
    handleClick: PropTypes.func.isRequired,
    /** classnames for button class */
    className: PropTypes.string,
  })).isRequired,
  /** User selected rows that actions will be performed on */
  selectedRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  /** class names for the div wrapping the button components */
  className: PropTypes.string,
};

export default BulkActions;
