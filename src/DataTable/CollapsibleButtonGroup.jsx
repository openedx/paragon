import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import DataTableContext from './DataTableContext';
import { MoreVert } from '../../icons';
import {
  Dropdown, useWindowSize, Icon, IconButton, breakpoints, Button,
} from '..';

export const DROPDOWN_BUTTON_TEXT = 'More actions';
export const SMALL_SCREEN_DROPDOWN_BUTTON_TEXT = 'Actions';

const CollapsibleButtonGroup = ({
  className,
  actions,
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
            {dropdownActions.map((action, index) => React.cloneElement(
              action.component,
              {
                // eslint-disable-next-line react/no-array-index-key
                key: `${action}${index}`,
                as: Dropdown.Item,
                ...action.args,
              },
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
      {visibleActions.map((action, index) => React.cloneElement(
        action.component,
        {
          // eslint-disable-next-line react/no-array-index-key
          key: `${action}${index}`,
          as: action.component.props?.as || Button,
          ...action.args,
        },
      ))}
    </div>
  );
};

CollapsibleButtonGroup.defaultProps = {
  className: null,
};

CollapsibleButtonGroup.propTypes = {
  /** class names for the div wrapping the button components */
  className: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    args: PropTypes.object,
  })).isRequired,
};

export default CollapsibleButtonGroup;
