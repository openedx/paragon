import { useSelectionActions } from '../hooks';

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
});
