import { renderHook } from '@testing-library/react';
import { useSelectionActions, useDataTableSelections } from '../hooks';

const mockToggleAllRowsSelected = jest.fn();
const mockInstanceDispatcher = jest.fn();

const controlledTableSelectionsGenerator = (selectedRows = [], isEntireTableSelected = false) => ([
  { selectedRows, isEntireTableSelected },
  mockInstanceDispatcher,
]);

describe('hooks', () => {
  describe('useSelectionActions', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('calls toggleAllRowsSelected when controlled selection is empty', () => {
      const { clearSelection } = useSelectionActions(
        { toggleAllRowsSelected: mockToggleAllRowsSelected },
        controlledTableSelectionsGenerator([], false),
      );
      clearSelection();
      expect(mockToggleAllRowsSelected.mock.calls.length).toBe(1);
      expect(mockInstanceDispatcher.mock.calls.length).toBe(0);
    });
    it('calls dispatcher when all rows selected flagged', () => {
      const { clearSelection } = useSelectionActions(
        { toggleAllRowsSelected: mockToggleAllRowsSelected },
        controlledTableSelectionsGenerator([], true),
      );
      clearSelection();
      expect(mockToggleAllRowsSelected.mock.calls.length).toBe(0);
      expect(mockInstanceDispatcher.mock.calls.length).toBe(1);
    });
    it('calls dispatcher when some row is selected', () => {
      const { clearSelection } = useSelectionActions(
        { toggleAllRowsSelected: mockToggleAllRowsSelected },
        controlledTableSelectionsGenerator(['row'], true),
      );
      clearSelection();
      expect(mockToggleAllRowsSelected.mock.calls.length).toBe(0);
      expect(mockInstanceDispatcher.mock.calls.length).toBe(1);
    });
  });

  describe('useDataTableSelections', () => {
    let selectionsDispatch;
    beforeEach(() => {
      selectionsDispatch = jest.fn();
    });

    it('should dispatch toggleIsEntireTableSelected when isSelectAllEnabled is true and isEntireTableSelected is false (line 75)', () => {
      const selections = { isSelectAllEnabled: true, isEntireTableSelected: false };
      renderHook(() => useDataTableSelections({
        selections,
        selectionsDispatch,
        itemCount: 10,
        selectedRows: [],
        page: [],
        isAllPageRowsSelected: false,
      }));
      expect(selectionsDispatch).toHaveBeenCalledTimes(1);
    });

    it('should dispatch toggleIsEntireTableSelected when isSelectAllEnabled is false, isEntireTableSelected is true, and isAllPageRowsSelected is false (line 86, first condition)', () => {
      const selections = { isSelectAllEnabled: false, isEntireTableSelected: true };
      renderHook(() => useDataTableSelections({
        selections,
        selectionsDispatch,
        itemCount: 10,
        selectedRows: [],
        page: [],
        isAllPageRowsSelected: false,
      }));
      expect(selectionsDispatch).toHaveBeenCalledTimes(1);
    });

    it('should dispatch toggleIsEntireTableSelected when isSelectAllEnabled is true, isEntireTableSelected is false, and isAllPageRowsSelected is true (line 86, second condition)', () => {
      const selections = { isSelectAllEnabled: true, isEntireTableSelected: false };
      renderHook(() => useDataTableSelections({
        selections,
        selectionsDispatch,
        itemCount: 10,
        selectedRows: [],
        page: [],
        isAllPageRowsSelected: true,
      }));
      expect(selectionsDispatch).toHaveBeenCalledTimes(2);
    });

    it('should NOT dispatch toggleIsEntireTableSelected if conditions are not met', () => {
      const selections = { isSelectAllEnabled: false, isEntireTableSelected: false };
      renderHook(() => useDataTableSelections({
        selections,
        selectionsDispatch,
        itemCount: 10,
        selectedRows: [],
        page: [],
        isAllPageRowsSelected: false,
      }));
      expect(selectionsDispatch).not.toHaveBeenCalled();
    });
  });
});
