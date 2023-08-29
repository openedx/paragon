import React, { useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { MoreVert } from '../../icons';
import useToggle from '../hooks/useToggle';
import useWindowSize from '../hooks/useWindowSize';
import DataTableContext from './DataTableContext';
import Icon from '../Icon';
import IconButton from '../IconButton';
import breakpoints from '../utils/breakpoints';
import ModalPopup from '../Modal/ModalPopup';
import Stack from '../Stack';
import Button from '../Button';

export const ACTION_OVERFLOW_BUTTON_TEXT = 'More actions';
export const SMALL_SCREEN_ACTION_OVERFLOW_BUTTON_TEXT = 'Actions';

function CollapsibleButtonGroup({
  className,
  actions,
  ...rest
}) {
  const [isOverflowMenuOpen, openOverflowMenu, closeOverflowMenu] = useToggle(false);
  const [overflowMenuTarget, setOverflowMenuTarget] = useState(null);
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

  const cloneAction = (action, index) => React.cloneElement(
    action.component,
    {
      // eslint-disable-next-line react/no-array-index-key
      key: `${action}${index}`,
      as: Button, // for backwards compatibility this is needed
      ...action.args,
    },
  );

  return (
    <div className={className} {...rest}>
      {dropdownActions.length > 0 && (
        <>
          <IconButton
            variant="secondary"
            iconAs={Icon}
            src={MoreVert}
            alt={width > breakpoints.small.minWidth
              ? ACTION_OVERFLOW_BUTTON_TEXT : SMALL_SCREEN_ACTION_OVERFLOW_BUTTON_TEXT}
            id="actions-dropdown"
            ref={setOverflowMenuTarget}
            onClick={openOverflowMenu}
          />
          <ModalPopup
            positionRef={overflowMenuTarget}
            onClose={closeOverflowMenu}
            placement="bottom-end"
            isOpen={isOverflowMenuOpen}
          >
            <div className="pgn__datatable__overflow-actions-menu">
              <Stack gap={2}>
                {dropdownActions.map(cloneAction)}
              </Stack>
            </div>
          </ModalPopup>
        </>
      )}
      <div className="pgn__datatable__visible-actions">
        {visibleActions.map(cloneAction)}
      </div>
    </div>
  );
}

CollapsibleButtonGroup.defaultProps = {
  className: null,
};

CollapsibleButtonGroup.propTypes = {
  /** Class names for the div wrapping the button components */
  className: PropTypes.string,
  /** Array of action objects, containing a component and their callback args */
  actions: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
    args: PropTypes.shape({}),
  })).isRequired,
};

export default CollapsibleButtonGroup;
