import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MoreVert } from '../../icons';
import {
  Button, Dropdown, useWindowSize, Icon, breakpoints,
} from '..';
import DataTableContext from './DataTableContext';

export const DROPDOWN_BUTTON_TEXT = 'More actions';
export const SMALL_SCREEN_DROPDOWN_BUTTON_TEXT = 'Actions';

// eslint-disable-next-line react/prop-types
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    ref={ref}
    variant="tertiary"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </Button>
));

const BulkActions = ({
  className,
}) => {
  const { width } = useWindowSize();
  const { selectedFlatRows, rows, bulkActions } = useContext(DataTableContext);
  const [visibleActions, dropdownActions] = useMemo(() => {
    if (width < breakpoints.small.minWidth) {
      // On a small screen, all actions will be in the overflow menu
      return [[], [...bulkActions]];
    }
    // The first two bulkActions will be displayed as buttons, the rest will go in an overflow menu
    const firstTwoActions = [...bulkActions].splice(0, 2);
    const extraActions = [...bulkActions].slice(2);

    /*  Reversing the array because to the user it makes sense to put the primary button first,
        but we want it on the right */
    return [firstTwoActions.reverse(), extraActions];
  }, [bulkActions, width]);

  const bulkActionRows = selectedFlatRows || rows;
  if (!bulkActionRows) {
    return null;
  }

  return (
    <div className={classNames('pgn__bulk-actions', className)}>
      {dropdownActions.length > 0 && (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <Icon
            src={MoreVert}
            screenReaderText={width > breakpoints.small.minWidth
              ? DROPDOWN_BUTTON_TEXT : SMALL_SCREEN_DROPDOWN_BUTTON_TEXT}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight>
          {dropdownActions.map((action) => (
            <Dropdown.Item
              className={action.className}
              key={action.buttonText}
              onClick={() => action.handleClick(bulkActionRows)}
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
            className={classNames({
              [action.className]: action.className,
              'ml-2': true,
            })}
            onClick={() => action.handleClick(bulkActionRows)}
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

BulkActions.defaultProps = {
  className: null,
};

BulkActions.propTypes = {
  /** class names for the div wrapping the button components */
  className: PropTypes.string,
};

export default BulkActions;
