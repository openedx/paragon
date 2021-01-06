import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Button, ButtonGroup, DropdownButton, Dropdown, useWindowSize
} from '..';
import { SMALL_SCREEN_BREAKPOINT } from './constants'

export const DROPDOWN_BUTTON_TEXT = 'More actions';
export const SMALL_SCREEN_DROPDOWN_BUTTON_TEXT = 'Actions';

const BulkActions = ({
  actions, selectedRows, className, ...rest
}) => {
  const { width } = useWindowSize();
  const [visibleActions, dropdownActions] = useMemo(() => {
    const buttonActions = [...actions];
    if (width < SMALL_SCREEN_BREAKPOINT) {
      return [[], buttonActions];
    }
    let firstTwoActions = [];
    let extraActions = [];
    if (buttonActions.length <= 2) {
      firstTwoActions = buttonActions;
    } else {
      firstTwoActions = buttonActions.splice(0, 2);
      extraActions = buttonActions;
    }
    /*  Reversing the array because to the user it makes sense to put the primary button first,
        but we want it on the right */
    return [firstTwoActions.reverse(), extraActions];
  }, [actions, width]);

  return (
    <div className={`pgn__bulk-actions ${className}`} {...rest}>
      <ButtonGroup>
        {dropdownActions.length > 0 && (
        <DropdownButton
          title={width > SMALL_SCREEN_BREAKPOINT ? DROPDOWN_BUTTON_TEXT : SMALL_SCREEN_DROPDOWN_BUTTON_TEXT}
        >
          {dropdownActions.map((action) => (
            <Dropdown.Item
              className={action.className}
              key={action.buttonText}
              onClick={() => action.handleClick(selectedRows)}
              disabled={action.disabled}
            >
              {action.buttonText}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        )}
        {/* Reversing the array because to the user it makes sense to put the primary button first,
        but we want it on the right */}
        {visibleActions.map((action, idx) => {
          let { variant } = action;
          if (!variant) {
            variant = (idx === 1 && visibleActions.length === 2) ? 'brand' : 'outline-primary';
          }

          return (
            <Button
              variant={variant}
              className={`${action.className ? action.className : ''}`}
              onClick={() => action.handleClick(selectedRows)}
              key={action.buttonText}
              disabled={action.disabled}
            >
              {action.buttonText}
            </Button>
          );
        })}
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
    /** optional button variant; only relevant for the first two buttons */
    variant: PropTypes.string,
    /** disables button */
    disabled: PropTypes.disabled,
  })).isRequired,
  /** User selected rows that actions will be performed on */
  selectedRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  /** class names for the div wrapping the button components */
  className: PropTypes.string,
};

export default BulkActions;
