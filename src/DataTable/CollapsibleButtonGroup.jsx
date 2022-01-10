import React, { useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DataTableContext from './DataTableContext';
import { MoreVert } from '../../icons';
import {
  Button, Dropdown, useWindowSize, Icon, IconButton, breakpoints,
} from '..';

export const DROPDOWN_BUTTON_TEXT = 'More actions';
export const SMALL_SCREEN_DROPDOWN_BUTTON_TEXT = 'Actions';

const CollapsibleButtonGroup = ({
  className,
  actions,
  tableInstance,
}) => {
  const {
    controlledTableSelections: [{ isEntireTableSelected }],
    selectedFlatRows,
    rows,
  } = useContext(DataTableContext);
  const { width } = useWindowSize();
  const selectedRows = selectedFlatRows || rows;

  const [visibleActions, dropdownActions] = useMemo(() => {
    if (width < breakpoints.small.minWidth) {
      // On a small screen, all actions will be in the overflow menu
      return [[], [...actions]];
    }
    // The first two actions will be displayed as buttons, the rest will go in an overflow menu
    const firstTwoActions = [...actions].splice(0, 2);
    const extraActions = [...actions].slice(2);

    /*  Reversing the array because to the user it makes sense to put the primary button first,
        but we want it on the right */
    return [firstTwoActions.reverse(), extraActions];
  }, [actions, width]);

  const handleClick = useCallback(
    (action) => {
      const args = { selectedRows };
      if (isEntireTableSelected) {
        args.isEntireTableSelected = isEntireTableSelected;
      }
      if (tableInstance) {
        args.tableInstance = tableInstance;
      }
      action.handleClick(args);
    },
    [isEntireTableSelected, selectedRows, tableInstance],
  );

  if (!isEntireTableSelected && !selectedRows) {
    return null;
  }

  return (
    <div className={className}>
      {dropdownActions.length > 0 && (
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary"
            iconAs={Icon}
            as={IconButton}
            src={MoreVert}
            alt={width > breakpoints.small.minWidth
              ? DROPDOWN_BUTTON_TEXT : SMALL_SCREEN_DROPDOWN_BUTTON_TEXT}
            id="actions-dropdown"
          />
          <Dropdown.Menu alignRight>
            {dropdownActions.map((action) => (
              <Dropdown.Item
                className={action.className}
                key={action.buttonText}
                onClick={() => handleClick(action)}
                disabled={action.disabled}
              >
                {action.buttonText}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
      {visibleActions.map((action, idx) => {
        let { variant } = action;
        if (!variant) {
          // use the variant defined on the button if it exists, if not, use these styles.
          variant = (idx === 1 && visibleActions.length === 2) ? 'brand' : 'outline-primary';
        }
        return (
          <Button
            variant={variant}
            className={classNames('ml-2', action.className)}
            onClick={() => handleClick(action)}
            key={action.buttonText}
            disabled={action.disabled}
          >
            {action.buttonText}
          </Button>
        );
      })}
    </div>
  );
};

CollapsibleButtonGroup.defaultProps = {
  className: null,
  tableInstance: null,
};

CollapsibleButtonGroup.propTypes = {
  /** class names for the div wrapping the button components */
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  actions: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    buttonText: PropTypes.string.isRequired,
  })).isRequired,
  /** useTable instance */
  tableInstance: PropTypes.shape(),
};

export default CollapsibleButtonGroup;
