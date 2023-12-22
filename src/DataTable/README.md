---
title: 'DataTable'
type: 'component'
components:
- DataTable
- DataViewToggle
- BulkActions
- TableActions
- DataTableTable
- DataTableTableControlBar
- DataTableTableFooter
- CardView
- TableCell
- TableHeaderCell
- TableHeaderRow
- TableRow
- FilterStatus
- SelectionStatus
- DataTableRowStatus
- SmartStatus
- TablePagination
- TextFilter
- DataTableEmptyTable
categories:
- Table
tabName: 'implementation'
status: 'New'
designStatus: 'Done'
devStatus: 'In progress'
---

The DataTable component is a wrapper that uses the <a href="https://github.com/TanStack/table/tree/v7/docs/src/pages/docs" target="_blank" rel="noopener noreferrer">react-table</a> library to
create tables. It can be used as is, or its subcomponents can be used on their own, allowing the developer full control.

Paragon also exports all React hooks from ``react-table`` allowing the developers to use them and make customizations more freely without adding ``react-table`` as a separate dependency to their project.
For full list of available hooks view <a href="https://github.com/TanStack/table/tree/v7/docs/src/pages/docs/api" target="_blank" rel="noopener noreferrer">react-table API reference</a>.

## How children get information

The table context gets the current ``react-table`` instance of the table from the ``DataTable`` component and makes it available to any child component within the ``DataTable`` provider.
In addition to the ``react-table`` instance, ``itemCount``, ``numBreakoutFilters``, and ``bulkActions``, and any props that are not listed in the
props table below are available to child components through the ``DataTableContext``.

How to use context in a custom component:
```jsx
const instance = useContext(DataTableContext)
```

## Frontend filtering and sorting
For small tables (less than ~10,000 rows), filtering, sorting and pagination can be done quickly and easily on the frontend.

In this example, a default TextFilter component is used for all columns. A default filter can be passed in,
or a filter component can be defined on the column. See <a href="https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/useFilters.md" target="_blank" rel="noopener noreferrer">react-table filters documentation</a>
for more information.

```jsx live
() => {
  const data = useMemo(() => [
    {
      name: 'Lil Bub',
      color: 'brown tabby',
      famous_for: 'weird tongue',
    },
    {
      name: 'Grumpy Cat',
      color: 'siamese',
      famous_for: 'serving moods',
    },
    {
      name: 'Smoothie',
      color: 'orange tabby',
      famous_for: 'modeling',
    },
    {
      name: 'Maru',
      color: 'brown tabby',
      famous_for: 'being a lovable oaf',
    },
    {
      name: 'Keyboard Cat',
      color: 'orange tabby',
      famous_for: 'piano virtuoso',
    },
    {
      name: 'Long Cat',
      color: 'russian white',
      famous_for:
        'being loooooooooooooooooooooooooooooooooooooooooooooooooooooong',
    },
    {
      name: 'Zeno',
      color: 'brown tabby',
      famous_for: 'getting halfway there'
    },
  ], [])

  const reducedChoices = data.reduce((acc, currentObject) => {
    const { color } = currentObject;
    if (color in acc) {
      acc[color].number += 1;
    } else {
      acc[color] = {
        name: color,
        number: 1,
        value: color,
      };
    }
    return acc;
  }, {});

   return (
    <DataTable
      isPaginated
      isSelectable
      initialState={{
        pageSize: 2,
      }}
      isFilterable
      isSortable
      defaultColumnValues={{ Filter: TextFilter }}
      itemCount={data.length}
      data={data}
      columns={[
        {
          Header: 'Name',
          accessor: 'name',

        },
        {
          Header: 'Famous For',
          accessor: 'famous_for',
        },
        {
          Header: 'Coat Color',
          accessor: 'color',
          Filter: CheckboxFilter,
          filter: 'includesValue',
          filterChoices: Object.values(reducedChoices),
        },
      ]}
    >
      <DataTable.TableControlBar />
      <DataTable.Table />
      <DataTable.EmptyTable content="No results found" />
      <DataTable.TableFooter />
    </DataTable>
   );
}
```

## Backend filtering and sorting

For larger tables, it may make sense to do filtering, pagination and sorting on the backend.
The user must pass a ``fetchData`` function, which will be called when the filtering, sorting, or pagination
data changes. The ``manualFilters``, ``manualPagination``, and ``manualSortBy`` props may also be needed.

When ``fetchData`` is called, it is given the necessary data to send a backend API request using the appropriate filters, page number, and/or ordering parameter. Once the request resolves, be sure to update the ``data`` prop to reflect the updated data.

### Paginated selection

To enable proper selection behavior with backend pagination (i.e., when ``isSelectable`` is provided), for both individual rows and bulk actions, the controlled selection status and controlled select components must be used. When used, these components keep track of a user's row selections in a React context provider such that they persist during pagination, even when only 1 page of data is known at any given time. The following components must be used, as shown in the below example:

* ``DataTable.ControlledSelectionStatus``
* ``DataTable.ControlledSelectHeader``
* ``DataTable.ControlledSelect``

<strong>NOTE:</strong> While the below example doesn't demonstrate using true backend filtering, pagination, and sorting, it does mock the behavior of making an asynchronous API request and updating the table data.

```jsx live
() => {
  const PAGINATED_DATA = [
    [
      {
        id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        title: 'Castle in the Sky',
        director: 'Hayao Miyazaki',
        producer: 'Isao Takahata',
        release_date: 1986,
        rt_score: 95,
      }, {
        id: '12cfb892-aac0-4c5b-94af-521852e46d6a',
        title: 'Grave of the Fireflies',
        director: 'Isao Takahata',
        producer: 'Toru Hara',
        release_date: 1988,
        rt_score: 97,
      },
      {
        id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
        title: 'My Neighbor Totoro',
        director: 'Hayao Miyazaki',
        producer: 'Hayao Miyazaki',
        release_date: 1988,
        rt_score: 93,
      },
    ],
    [
      {
        id: 'ea660b10-85c4-4ae3-8a5f-41cea3648e3e',
        title: 'Kiki\'s Delivery Service',
        director: 'Hayao Miyazaki',
        producer: 'Hayao Miyazaki',
        release_date: 1989,
        rt_score: 96,
      },
      {
        id: '4e236f34-b981-41c3-8c65-f8c9000b94e7',
        title: 'Only Yesterday',
        director: 'Isao Takahata',
        producer: 'Toshio Suzuki',
        release_date: 1991,
        rt_score: 100,
      },
      {
        id: 'ebbb6b7c-945c-41ee-a792-de0e43191bd8',
        title: 'Porco Rosso',
        director: 'Hayao Miyazaki',
        producer: 'Toshio Suzuki',
        release_date: 1992,
        rt_score: 94,
      },
    ],
    [
      {
        id: '1b67aa9a-2e4a-45af-ac98-64d6ad15b16c',
        title: 'Pom Poko',
        director: 'Isao Takahata',
        producer: 'Toshio Suzuki',
        release_date: 1994,
        rt_score: 78,
      },
    ],
  ];
  const [data, setData] = useState(PAGINATED_DATA[0]);
  const fetchData = useCallback(
    (args) => {
      setTimeout(() => {
        setData(PAGINATED_DATA[args.pageIndex]);
      }, 1000);
    },
    [],
  );

  const selectColumn = {
    id: 'selection',
    Header: DataTable.ControlledSelectHeader,
    Cell: DataTable.ControlledSelect,
    disableSortBy: true,
  };

  const DownloadCSVAction = ({ as: Component, selectedFlatRows, ...rest }) => (
    <Component onClick={() => console.log('Download CSV', selectedFlatRows, rest)}>
      Download CSV
    </Component>
  );

  const ClearAction = ({ as: Component, tableInstance, ...rest }) => (
    <Component
      variant="danger"
      onClick={() => {
        console.log('Clear Selection');
        tableInstance.clearSelection();
      }}
    >
      Clear Selection
    </Component>
  );
  
  return (
    <DataTable
      isSelectable
      manualSelectColumn={selectColumn}
      SelectionStatusComponent={DataTable.ControlledSelectionStatus}
      isFilterable
      manualFilters
      defaultColumnValues={{ Filter: TextFilter }}
      isPaginated
      manualPagination
      isSortable
      manualSortBy
      initialState={{
        pageSize: 3,
        pageIndex: 0
      }}
      initialTableOptions={{
        getRowId: row => row.id,
      }}
      itemCount={7}
      pageCount={3}
      fetchData={fetchData}
      data={data}
      columns={[
        {
          Header: 'Title',
          accessor: 'title',
        },
        {
          Header: 'Director',
          accessor: 'director',
        },
        {
          Header: 'Release date',
          accessor: 'release_date',
        },
      ]}
      bulkActions={[
        <DownloadCSVAction />,
        <ClearAction />,
      ]}
    />
  );
}
```

## View Switching

Card view is default when ``isDataViewToggleEnabled`` is true.

See ``dataViewToggleOptions`` props documentation for all supported props.

**NOTE**: you have to memoize ``data`` to persist filters choices during view switch, see code example below.

```jsx live
() => {
  const [currentView, setCurrentView] = useState('card');
  const togglePlacement = 'left'; // 'bottom' is the only other supported value

  const ExampleCard = ({ className, original }) => {
    const { name, color, famous_for: famousFor } = original;

    return (
      <Card className={className}>
        <Card.ImageCap src="https://picsum.photos/360/200/" srcAlt="Card image" />
        <Card.Header title={name} />
        <Card.Section>
          <dl>
            <dt>Color</dt>
            <dd>{color}</dd>
            <dt>Famous For</dt>
            <dd>{famousFor}</dd>
          </dl>
        </Card.Section>
      </Card>
    );
  };

  // memoize data, otherwise the filters will get reset after switching view
  const data = useMemo(() => [
    {
      name: 'Lil Bub',
      color: 'brown tabby',
      famous_for: 'weird tongue',
    },
    {
      name: 'Grumpy Cat',
      color: 'siamese',
      famous_for: 'serving moods',
    },
    {
      name: 'Smoothie',
      color: 'orange tabby',
      famous_for: 'modeling',
    },
  ], [])

  return (
    <DataTable
      isFilterable
      isSelectable
      dataViewToggleOptions={{
        isDataViewToggleEnabled: true,
        onDataViewToggle: val => setCurrentView(val),
        togglePlacement,
      }}
      isSortable
      defaultColumnValues={{ Filter: TextFilter }}
      itemCount={data.length}
      data={data}
      columns={[
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Famous For',
          accessor: 'famous_for',
        },
        {
          Header: 'Coat Color',
          accessor: 'color',
          Filter: CheckboxFilter,
          filter: 'includesValue',
          filterChoices: [{
            name: 'orange tabby',
            number: 1,
            value: 'orange tabby',
          },
          {
            name: 'brown tabby',
            number: 1,
            value: 'brown tabby',
          },
          {
            name: 'siamese',
            number: 1,
            value: 'siamese',
          }],
        },
      ]}
    >
      <DataTable.TableControlBar />

      {/* which kind of body content to show */}
      { currentView === "card" && <CardView CardComponent={ExampleCard} /> }
      { currentView === "list" && <DataTable.Table /> }

      <DataTable.EmptyTable content="No results found" />
      <DataTable.TableFooter />
    </DataTable>
  )
}
```

### With a default active state specified

```jsx live
() => {
  const defaultVal = "list";
  const [currentView, setCurrentView] = useState(defaultVal);
  return (
    <DataTable
      isFilterable
      dataViewToggleOptions={{
        isDataViewToggleEnabled: true,
        onDataViewToggle: val => setCurrentView(val),
        defaultActiveStateValue: defaultVal,
      }}
      isSortable
      defaultColumnValues={{ Filter: TextFilter }}
      itemCount={3}
      data={[
        {
          name: 'Lil Bub',
          color: 'brown tabby',
          famous_for: 'weird tongue',
        },
        {
          name: 'Grumpy Cat',
          color: 'siamese',
          famous_for: 'serving moods',
        },
        {
          name: 'Smoothie',
          color: 'orange tabby',
          famous_for: 'modeling',
        },
      ]}
      columns={[
        {
          Header: 'Name',
          accessor: 'name',

        },
        {
          Header: 'Famous For',
          accessor: 'famous_for',
        },
        {
          Header: 'Coat Color',
          accessor: 'color',
          Filter: CheckboxFilter,
          filter: 'includesValue',
          filterChoices: [{
            name: 'orange tabby',
            number: 1,
            value: 'orange tabby',
          },
          {
            name: 'brown tabby',
            number: 1,
            value: 'brown tabby',
          },
          {
            name: 'siamese',
            number: 1,
            value: 'siamese',
          }]
        },
      ]}
    >
      <DataTable.TableControlBar />

      {/* which kind of body content to show */}
      { currentView === "card" && <CardView CardComponent={MiyazakiCard} /> }
      { currentView === "list" && <DataTable.Table /> }

      <DataTable.EmptyTable content="No results found" />
      <DataTable.TableFooter />
    </DataTable>
  )
}
```

## Loading state

Can be used to show the loading state when ``DataTable`` is asynchronously fetching new data.

```jsx live
() => {
  {/* start example state */}
  const [hasData, setHasData] = useState(false)
  const data = [
    {
      id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
      title: 'Castle in the Sky',
      director: 'Hayao Miyazaki',
      producer: 'Isao Takahata',
      release_date: 1986,
      rt_score: 95,
    }, {
      id: '12cfb892-aac0-4c5b-94af-521852e46d6a',
      title: 'Grave of the Fireflies',
      director: 'Isao Takahata',
      producer: 'Toru Hara',
      release_date: 1988,
      rt_score: 97,
    },
    {
      id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
      title: 'My Neighbor Totoro',
      director: 'Hayao Miyazaki',
      producer: 'Hayao Miyazaki',
      release_date: 1988,
      rt_score: 93,
    },
  ];
  {/* end example state */}
  
  return (
    <>
      {/* start example form block */}
      <ExamplePropsForm
        inputs={[
          { value: hasData, setValue: () => setHasData(!hasData), name: 'data' },
        ]}
      />
      {/* end example form block */}

      <DataTable
        isLoading
        itemCount={data.length}
        data={hasData ? data : []}
        columns={[
          {
            Header: 'Title',
            accessor: 'title',
          },
          {
            Header: 'Director',
            accessor: 'director',
          },
          {
            Header: 'Release date',
            accessor: 'release_date',
          },
        ]}
      />
    </>
  );
}
```

## Actions, Table actions and Bulk actions

Actions and bulk actions are actions that are performed on table rows, though bulk actions can be used for
actions that apply to the whole table. It is up to the user to determine what the action does.

### Table Actions
Table actions are actions that are enacted on the entire table. Their click handler is called with the react-table
instance.
The first two table actions will be displayed as buttons, while the remaining actions will be displayed in an overflow
dropdown menu.
Table actions are not visible if bulk actions are available and there  are selected rows.

### Bulk Actions
Bulk actions are action that are enacted on specific table rows. The bulk action click handler is called with the selected rows.
The first two bulk actions will be displayed as buttons, while the remaining bulk actions will be displayed in a
overflow dropdown menu.
Bulk actions are not visible unless rows have been selected.

### Actions
An action can also be defined as an additional column on the table. The Cell property can be defined to display
any component that a user requires. It will receive the row as props.
You can pass a function to render custom components for bulk actions and table actions.


```jsx live
() => {
  const TableAction = ({ tableInstance }) => (
    // Here is access to the tableInstance
    <Button onClick={() => console.log('TableAction', tableInstance)}>
      Enroll
    </Button>
  );
  
  const EnrollAction = ({ selectedFlatRows, ...rest }) => (
    // Here is access to the selectedFlatRows, isEntireTableSelected, tableInstance
    <Button variant="danger" onClick={() => console.log('Enroll', selectedFlatRows, rest)}>
      Enroll
    </Button>
  );

  const AssignAction = (props) => (
    <Button onClick={() => console.log('Assign', props)}>
      Assign
    </Button>
  );
  
  const ExtraAction = ({ text, selectedFlatRows, ...rest }) => (
    <Button onClick={() => console.log(`Extra Action ${text}`, selectedFlatRows, rest)}>
      {`Extra Action ${text}`}
    </Button>
  );
  
  return (
    <DataTable
      isSelectable
      itemCount={7}
      tableActions={[
        <TableAction />,
      ]}
      bulkActions={[
        <EnrollAction />,
        <AssignAction />,
        <ExtraAction text="1" />,
        <ExtraAction text="2" />,
      ]}
      additionalColumns={[
        {
          id: 'action',
          Header: 'Action',
          Cell: ({ row }) => <Button variant="link" size="sm" onClick={() => console.log(`Assigning ${row.values.name}`)}>Assign</Button>,
        }
      ]}
      data={[
        {
          name: 'Lil Bub',
          color: 'brown tabby',
          famous_for: 'weird tongue',
        },
        {
          name: 'Grumpy Cat',
          color: 'siamese',
          famous_for: 'serving moods',
        },
        {
          name: 'Smoothie',
          color: 'orange tabby',
          famous_for: 'modeling',
        },
        {
          name: 'Maru',
          color: 'brown tabby',
          famous_for: 'being a lovable oaf',
        },
        {
          name: 'Keyboard Cat',
          color: 'orange tabby',
          famous_for: 'piano virtuoso',
        },
        {
          name: 'Long Cat',
          color: 'russian white',
          famous_for:
            'being loooooooooooooooooooooooooooooooooooooooooooooooooooooong',
        },
        {
          name: 'Zeno',
          color: 'brown tabby',
          famous_for: 'getting halfway there'
        },
      ]}
      columns={[
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Famous For',
          accessor: 'famous_for',
        },
        {
          Header: 'Coat Color',
          accessor: 'color',
        },
      ]}
    >
      <DataTable.TableControlBar />
      <DataTable.Table />
      <DataTable.EmptyTable content="No results found" />
      <DataTable.TableFooter />
    </DataTable>
  )
}
  
```

#### Actions with Data view toggle enabled


```jsx live
() => {
  const [currentView, setCurrentView] = useState('card');

  const TableAction = (props) => (
    // Here is access to the tableInstance
    <Button onClick={() => console.log('TableAction', props)}>
      Enroll
    </Button>
  );

  const EnrollAction = ({ selectedFlatRows, ...rest }) => (
    // Here is access to the selectedFlatRows, isEntireTableSelected, tableInstance
    <Button variant="danger" onClick={() => console.log('Enroll', selectedFlatRows, rest)}>
      Enroll ({selectedFlatRows.length})
    </Button>
  );

  const AssignAction = ({ selectedFlatRows, ...rest }) => (
    <Button onClick={() => console.log('Assign', selectedFlatRows, rest)}>
      Assign ({selectedFlatRows.length})
    </Button>
  );

  const ExtraAction = ({ text, selectedFlatRows, ...rest }) => (
    <Button onClick={() => console.log(`Extra Action ${text}`, selectedFlatRows, rest)}>
      {`Extra Action ${text}`}
    </Button>
  );

  return (
    <DataTable
    dataViewToggleOptions={{
      isDataViewToggleEnabled: true,
      onDataViewToggle: val => setCurrentView(val),
      defaultActiveStateValue: "card",
    }}
    isSelectable
    itemCount={7}
    tableActions={[
      <TableAction />,
    ]}
    bulkActions={[
      <EnrollAction />,
      // Default value for `as` property is `Button`
      <AssignAction as={Button} />,
      <ExtraAction text="1" />,
      <ExtraAction text="2" />,
    ]}
    additionalColumns={[
      {
        id: 'action',
        Header: 'Action',
        Cell: ({ row }) => <Button variant="link" size="sm" onClick={() => console.log(`Assigning ${row.values.name}`)}>Assign</Button>,
      }
    ]}
    data={[
      {
        name: 'Lil Bub',
        color: 'brown tabby',
        famous_for: 'weird tongue',
      },
      {
        name: 'Grumpy Cat',
        color: 'siamese',
        famous_for: 'serving moods',
      },
      {
        name: 'Smoothie',
        color: 'orange tabby',
        famous_for: 'modeling',
      },
      {
        name: 'Maru',
        color: 'brown tabby',
        famous_for: 'being a lovable oaf',
      },
      {
        name: 'Keyboard Cat',
        color: 'orange tabby',
        famous_for: 'piano virtuoso',
      },
      {
        name: 'Long Cat',
        color: 'russian white',
        famous_for:
          'being loooooooooooooooooooooooooooooooooooooooooooooooooooooong',
      },
      {
        name: 'Zeno',
        color: 'brown tabby',
        famous_for: 'getting halfway there'
      },
    ]}
    columns={[
      {
        Header: 'Name',
        accessor: 'name',

      },
      {
        Header: 'Famous For',
        accessor: 'famous_for',
      },
      {
        Header: 'Coat Color',
        accessor: 'color',
      },
    ]}
  >
    <DataTable.TableControlBar />
    {/* which kind of body content to show */}
    { currentView === "card" && <CardView CardComponent={MiyazakiCard} /> }
    { currentView === "list" && <DataTable.Table /> }
    <DataTable.EmptyTable content="No results found" />
    <DataTable.TableFooter />
  </DataTable>
  );
}
```

## CardView and alternate table components

You may choose to use any table component by using the following code in your display component:
```jsx
const instance = useContext(DataTableContext)
```
The CardView takes a ``CardComponent`` that is personalized to the table in question and displays
a responsive grid of cards.

```jsx live
() => {
  const DownloadCSVAction = ({ as: Component, selectedFlatRows, ...rest }) => (
    <Component onClick={() => console.log('Download CSV', selectedFlatRows, rest)}>
      Download CSV
    </Component>
  );

  const ClearAction = ({ as: Component, tableInstance, ...rest }) => (
    <Component
      variant="danger"
      onClick={() => {
        console.log('Clear Selection');
        tableInstance.clearSelection();
      }}
    >
      Clear Selection
    </Component>
  );
  
  return (
    <DataTable
      isFilterable
      defaultColumnValues={{ Filter: TextFilter }}
      isPaginated
      isSortable
      initialState={{
        pageSize: 3,
        pageIndex: 0
      }}
      itemCount={20}
      fetchData={(data) => console.log(`This function will be called with the value: ${JSON.stringify(data)}}`)}
      data={[
        {
          'id': '2baf70d1-42bb-4437-b551-e5fed5a87abe',
          'title': 'Castle in the Sky',
          'director': 'Hayao Miyazaki',
          'producer': 'Isao Takahata',
          'release_date': '1986',
          'rt_score': '95',
        },
        {
          'id': '12cfb892-aac0-4c5b-94af-521852e46d6a',
          'title': 'Grave of the Fireflies',
          'director': 'Isao Takahata',
          'producer': 'Toru Hara',
          'release_date': '1988',
          'rt_score': '97',
        },
        {
          'id': '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
          'title': 'My Neighbor Totoro',
          'director': 'Hayao Miyazaki',
          'producer': 'Hayao Miyazaki',
          'release_date': '1988',
          'rt_score': '93',
        },
        {
          'id': 'ea660b10-85c4-4ae3-8a5f-41cea3648e3e',
          'title': 'Kiki\'s Delivery Service',
          'director': 'Hayao Miyazaki',
          'producer': 'Hayao Miyazaki',
          'release_date': '1989',
          'rt_score': '96',
        },
        {
          'id': '4e236f34-b981-41c3-8c65-f8c9000b94e7',
          'title': 'Only Yesterday',
          'director': 'Isao Takahata',
          'producer': 'Toshio Suzuki',
          'release_date': '1991',
          'rt_score': '100',
        },
        {
          'id': 'ebbb6b7c-945c-41ee-a792-de0e43191bd8',
          'title': 'Porco Rosso',
          'director': 'Hayao Miyazaki',
          'producer': 'Toshio Suzuki',
          'release_date': '1992',
          'rt_score': '94',
        },
        {
          'id': '1b67aa9a-2e4a-45af-ac98-64d6ad15b16c',
          'title': 'Pom Poko',
          'director': 'Isao Takahata',
          'producer': 'Toshio Suzuki',
          'release_date': '1994',
          'rt_score': '78',
        },
        {
          'id': 'ff24da26-a969-4f0e-ba1e-a122ead6c6e3',
          'title': 'Whisper of the Heart',
          'director': 'Yoshifumi Kondō',
          'producer': 'Toshio Suzuki',
          'release_date': '1995',
          'rt_score': '91',
        },
        {
          'id': '0440483e-ca0e-4120-8c50-4c8cd9b965d6',
          'title': 'Princess Mononoke',
          'director': 'Hayao Miyazaki',
          'producer': 'Toshio Suzuki',
          'release_date': '1997',
          'rt_score': '92',
        },
        {
          'id': '45204234-adfd-45cb-a505-a8e7a676b114',
          'title': 'My Neighbors the Yamadas',
          'director': 'Isao Takahata',
          'producer': 'Toshio Suzuki',
          'release_date': '1999',
          'rt_score': '75',
        },
        {
          'id': 'dc2e6bd1-8156-4886-adff-b39e6043af0c',
          'title': 'Spirited Away',
          'director': 'Hayao Miyazaki',
          'producer': 'Toshio Suzuki',
          'release_date': '2001',
          'rt_score': '97',
        },
        {
          'id': '90b72513-afd4-4570-84de-a56c312fdf81',
          'title': 'The Cat Returns',
          'director': 'Hiroyuki Morita',
          'producer': 'Toshio Suzuki',
          'release_date': '2002',
          'rt_score': '89',
        },
        {
          'id': 'cd3d059c-09f4-4ff3-8d63-bc765a5184fa',
          'title': 'Howl\'s Moving Castle',
          'director': 'Hayao Miyazaki',
          'producer': 'Toshio Suzuki',
          'release_date': '2004',
          'rt_score': '87',
        },
        {
          'id': '112c1e67-726f-40b1-ac17-6974127bb9b9',
          'title': 'Tales from Earthsea',
          'director': 'Gorō Miyazaki',
          'producer': 'Toshio Suzuki',
          'release_date': '2006',
          'rt_score': '41',
        },
        {
          'id': '758bf02e-3122-46e0-884e-67cf83df1786',
          'title': 'Ponyo',
          'director': 'Hayao Miyazaki',
          'producer': 'Toshio Suzuki',
          'release_date': '2008',
          'rt_score': '92',
        },
        {
          'id': '2de9426b-914a-4a06-a3a0-5e6d9d3886f6',
          'title': 'Arrietty',
          'director': 'Hiromasa Yonebayashi',
          'producer': 'Toshio Suzuki',
          'release_date': '2010',
          'rt_score': '95',
        },
        {
          'id': '45db04e4-304a-4933-9823-33f389e8d74d',
          'title': 'From Up on Poppy Hill',
          'director': 'Gorō Miyazaki',
          'producer': 'Toshio Suzuki',
          'release_date': '2011',
          'rt_score': '83',
        },
        {
          'id': '67405111-37a5-438f-81cc-4666af60c800',
          'title': 'The Wind Rises',
          'director': 'Hayao Miyazaki',
          'producer': 'Toshio Suzuki',
          'release_date': '2013',
          'rt_score': '89',
        },
        {
          'id': '578ae244-7750-4d9f-867b-f3cd3d6fecf4',
          'title': 'The Tale of the Princess Kaguya',
          'director': 'Isao Takahata',
          'producer': 'Yoshiaki Nishimura',
          'release_date': '2013',
          'rt_score': '100',
        },
        {
          'id': '5fdfb320-2a02-49a7-94ff-5ca418cae602',
          'title': 'When Marnie Was There',
          'director': 'Hiromasa Yonebayashi',
          'producer': 'Yoshiaki Nishimura',
          'release_date': '2014',
          'rt_score': '92',
        }
      ]}
      columns={[
        {
          Header: 'Title',
          accessor: 'title',

        },
        {
          Header: 'Director',
          accessor: 'director',
        },
        {
          Header: 'Release date',
          accessor: 'release_date',
        },
      ]}
      bulkActions={[
        <DownloadCSVAction />,
        <ClearAction />,
      ]}
    >
      <TableControlBar />
      <CardView CardComponent={MiyazakiCard} />
      <TableFooter />
    </DataTable>
  );
};
```

### Customizing number of Cards shown per row
Use `columnSizes` prop of `CardView` component to define how many `Cards` are shown per row at each breakpoint.

`columnSizes` is an object containing the desired column size at each breakpoint. The example below shows 1 `Card` per row at `xs` breakpoint, 2 `Cards` at `sm` and `md`, and 4 `Cards` at `lg` and higher. You can read more about the API at [React-Bootstrap's grid documentation](https://react-bootstrap-v4.netlify.app/layout/grid/).

```jsx live
() => {
  const columnSizes = { xs: 12, sm: 6, lg: 3 };

  const ExampleCard = ({ className, original }) => {
    const { name, color, famous_for: famousFor } = original;
		
    return (
      <Card className={className}>
        <Card.ImageCap src="https://picsum.photos/360/200/" srcAlt="Card image" />
        <Card.Body>
          <Card.Header title={name} />
          <Card.Section>
            <dl>
              <dt>Color</dt>
              <dd>{color}</dd>
              <dt>Famous For</dt>
              <dd>{famousFor}</dd>
            </dl>
          </Card.Section>
          </Card.Body>
      </Card>
    );
  };

  return (
    <DataTable
      itemCount={5}
      defaultColumnValues={{ Filter: TextFilter }}
      isFilterable
      isSortable
      data={[
        {
          name: 'Lil Bub',
          color: 'brown tabby',
          famous_for: 'weird tongue',
        },
        {
          name: 'Grumpy Cat',
          color: 'siamese',
          famous_for: 'serving moods',
        },
        {
          name: 'Smoothie',
          color: 'orange tabby',
          famous_for: 'modeling',
        },
        {
          name: 'Maru',
          color: 'brown tabby',
          famous_for: 'being a lovable oaf',
        },
        {
          name: 'Keyboard Cat',
          color: 'orange tabby',
          famous_for: 'piano virtuoso',
        },
      ]}
      columns={[
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Color',
          accessor: 'color',
        },
        {
          Header: 'Famous For',
          accessor: 'famous_for',
        },
      ]}
    >
      <TableControlBar />
      <CardView CardComponent={ExampleCard} columnSizes={columnSizes} />
      <TableFooter />
    </DataTable>
  );
};
```

### Horizontal view
You can also display `Cards` with horizontal view. If the table is selectable control position of selection checkbox with `selectionPlacement` prop, accepts `right` or `left` positions (relative to the `Card`).

```jsx live
() => {
  const columnSizes = { xs: 12 };

  const ExampleCard = ({ className, original }) => {
    const { name, color, famous_for: famousFor } = original;

    return (
      <Card className={className} orientation="horizontal">
        <Card.ImageCap src="https://picsum.photos/360/200/" srcAlt="Card image" />
        <Card.Body>
          <Card.Header title={name} />
          <Card.Section>
            <dl>
              <dt>Color</dt>								
              <dd>{color}</dd>
              <dt>Famous For</dt>
              <dd>{famousFor}</dd>
            </dl>
          </Card.Section>
        </Card.Body>
      </Card>
    );
  };

  return (
    <DataTable
      isSelectable
      defaultColumnValues={{ Filter: TextFilter }}
      isFilterable
      itemCount={3}
      data={[
        {
          name: 'Lil Bub',
          color: 'brown tabby',
          famous_for: 'weird tongue',
        }, 
        {
          name: 'Grumpy Cat',
          color: 'siamese',
          famous_for: 'serving moods',
        },
        {
          name: 'Smoothie',
          color: 'orange tabby',
          famous_for: 'modeling',
        },
      ]}
      columns={[
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Color',
          accessor: 'color',
        },
        {
          Header: 'Famous For',
          accessor: 'famous_for',
        },
      ]}
    >
      <TableControlBar />
      <CardView CardComponent={ExampleCard} columnSizes={columnSizes} selectionPlacement="left" />
      <TableFooter />
    </DataTable>
  );
};
```

## Sidebar Filter
For a more desktop friendly view, you can move filters into a sidebar by providing ``showFiltersInSidebar`` prop, try it out!

```jsx live
  <DataTable
    showFiltersInSidebar
    isFilterable
    isSortable
    defaultColumnValues={{ Filter: TextFilter }}
    itemCount={5}
    data={[
      {
        name: 'Lil Bub',
        color: 'brown tabby',
        famous_for: 'weird tongue',
      },
      {
        name: 'Grumpy Cat',
        color: 'siamese',
        famous_for: 'serving moods',
      },
      {
        name: 'Smoothie',
        color: 'orange tabby',
        famous_for: 'modeling',
      },
      {
        name: 'Maru',
        color: 'brown tabby',
        famous_for: 'being a lovable oaf',
      },
      {
        name: 'Keyboard Cat',
        color: 'orange tabby',
        famous_for: 'piano virtuoso',
      }
    ]}
    columns={[
      {
        Header: 'Name',
        accessor: 'name',

      },
      {
        Header: 'Famous For',
        accessor: 'famous_for',
      },
      {
        Header: 'Coat Color',
        accessor: 'color',
        Filter: CheckboxFilter,
        filter: 'includesValue',
        filterChoices: [{
          name: 'orange tabby',
          number: 2,
          value: 'orange tabby',
        },
        {
          name: 'brown tabby',
          number: 2,
          value: 'brown tabby',
        },
        {
          name: 'siamese',
          number: 1,
          value: 'siamese',
        }]
      },
    ]}
  >
    <DataTable.TableControlBar />
    <DataTable.Table />
    <DataTable.EmptyTable content="No results found" />
    <DataTable.TableFooter />
  </DataTable>
```

## Expandable rows
`DataTable` supports expandable rows which once expanded render additional content under the row. Displayed content 
is controlled by the `renderRowSubComponent` prop, which is a function that receives `row` as its single prop and renders expanded view, you also
need to pass `isEpandable` prop to `DataTable` to indicate that it should support expand behavior for rows.
Finally, an additional column is required to be included into `columns` prop which will contain handlers for expand / collapse behavior, see examples below. 

### Default view

Here we use default expander column offered by Paragon and for each row render value of the `name` attribute as its subcomponent.

```jsx live
<DataTable 
  isExpandable
  itemCount={7}
  renderRowSubComponent={({ row }) => <div className='text-center'>{row.values.name}</div>}
  data={[
    {
      name: 'Lil Bub',
      color: 'brown tabby',
      famous_for: 'weird tongue',
    },
    {
      name: 'Grumpy Cat',
      color: 'siamese',
      famous_for: 'serving moods',
    },
    {
      name: 'Smoothie',
      color: 'orange tabby',
      famous_for: 'modeling',
    },
    {
      name: 'Maru',
      color: 'brown tabby',
      famous_for: 'being a lovable oaf',
    },
    {
      name: 'Keyboard Cat',
      color: 'orange tabby',
      famous_for: 'piano virtuoso',
    },
    {
      name: 'Long Cat',
      color: 'russian white',
      famous_for: 'being loooooooooooooooooooooooooooooooooooooooooooooooooooooong',
    },
    {
      name: 'Zeno',
      color: 'brown tabby',
      famous_for: 'getting halfway there'
    },
  ]}
  columns={[
    {
      id: 'expander',
      Header: DataTable.ExpandAll,
      Cell: DataTable.ExpandRow,
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Famous For',
      accessor: 'famous_for',
    },
    {
      Header: 'Coat Color',
      accessor: 'color',
    },
  ]}
>
  <DataTable.TableControlBar />
  <DataTable.Table />
  <DataTable.TableFooter />
</DataTable>
```

### With custom expander column

You can create your own custom expander column and use it, see code example below.

```jsx live
() => {
  const expanderColumn = {
    id: 'expander',
    // getToggleAllRowsExpandedProps and isAllRowsExpanded props will be automatically passed to the component
    Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
      <span {...getToggleAllRowsExpandedProps()}>
        {isAllRowsExpanded ? <Remove /> : <Add />}
      </span>
    ),
    // Cell will receive row prop
    Cell: ({ row }) => (
      <span {...row.getToggleRowExpandedProps()}>
        {row.isExpanded ? 'Collapse' : 'Expand'}
      </span>
    ),
  };

  const currentDate = new Date().toDateString();

  const renderSubComponent = ({ row }) => (
    <div className="ml-5 w-50">
      <DataTable
        itemCount={1}
        data={[
          {...row.original},
        ]}
        columns={[
          {
            Header: 'Date modified',
            accessor: 'date_modified',
          },
          {
            Header: 'Modified by',
            accessor: 'modified_by',
          },
          {
            Header: 'Reason',
            accessor: 'reason',
          },
        ]}
      >
        <DataTable.Table/>
      </DataTable>
    </div>
  )
	
  return (
    <DataTable
      isExpandable 
      renderRowSubComponent={renderSubComponent}
      itemCount={3}
      data={[
        {
          name: 'Lil Bub',
          color: 'brown tabby',
          famous_for: 'weird tongue',
          date_modified: currentDate,
          modified_by: 'Jane Doe',
          reason: 'Unknown',
        },
        {
          name: 'Grumpy Cat',
          color: 'siamese',
          famous_for: 'serving moods',
          date_modified: currentDate,
          modified_by: 'Jane Doe',
          reason: 'Felt like it',
        },
        {
          name: 'Smoothie', 
          color: 'orange tabby',
          famous_for: 'modeling',
          date_modified: currentDate,
          modified_by: 'Jane Doe',
          reason: 'Felt like it',
        },
      ]}
      columns={[
        { ...expanderColumn },
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Famous For',
          accessor: 'famous_for',
        },
        {
          Header: 'Coat Color',
          accessor: 'color',
        },
      ]}
    >
      <DataTable.TableControlBar/>
      <DataTable.Table/>
      <DataTable.TableFooter/>
    </DataTable>
  );
}
```

## Custom cell content

You can create your own cell content by passing the `Cell` property to a specific column.

```jsx live
() => {
  const variants = ['primary', 'warning', 'success', 'danger'];
  const [cellColors, setCellColors] = useState([0, 1, 2]);

  const handleColorChange = (index) => {
    const newColors = cellColors.slice();
    newColors[index] = cellColors[index] < 3 ? cellColors[index] + 1 : 0;
    setCellColors(newColors);
  };
  
  return (
    <DataTable
      isExpandable
      itemCount={3}
      data={[
        {
          name: 'Lil Bub',
          color: 'brown tabby',
          famous_for: 'weird tongue',
        },
        {
          name: 'Grumpy Cat',
          color: 'siamese',
          famous_for: 'serving moods',
        },
        {
          name: 'Smoothie', 
          color: 'orange tabby',
          famous_for: 'modeling',
        },
      ]}
      columns={[
        {
          Header: 'Name',
          Cell: ({ row }) => (
            <Badge variant={variants[cellColors[row.id] % 4]}>
              {row.original.name}
            </Badge>
          ),
        },
        {
          Header: 'Famous For',
          Cell: ({ row }) => (
            <Badge variant={variants[(cellColors[row.id] + 1) % 4]}>
              {row.original.famous_for}
            </Badge>
          ),
        },
        {
          Header: 'Coat Color',
          Cell: ({ row }) => (
            <Badge variant={variants[(cellColors[row.id] + 2) % 4]}>
              {row.original.color}
            </Badge>
          ),
        },
      ]}
      additionalColumns={[
        {
          id: 'action',
          Header: 'Action',
          Cell: ({ row }) => <Button variant="link" size="sm" onClick={() => handleColorChange(row.id)}>Change</Button>,
        }
      ]}
    >
      <DataTable.TableControlBar/>
      <DataTable.Table/>
      <DataTable.TableFooter/>
    </DataTable>
  );
}

```
##  maxSelectedRows and onMaxSelectedRows props

These props will allow us to handle the maximum number of selectable rows, which is necessary for validation. Using the `maxSelectedRows` prop, the implementation process can be simplified. You only need to pass the maximum number of rows you want to have selected.

After selecting the maximum possible number of rows, you can display an error message or perform other actions. This is achieved through the  `onMaxSelectedRows`  callback. In the example below, the callback will be executed when the table has 3 rows selected.

```jsx live
() => {
  return (
    <DataTable
      isPaginated
      isSelectable
      maxSelectedRows={3}
      onMaxSelectedRows={() => console.log('this is the last row allowed')}
      itemCount={7}
      data={[
        {
          name: 'Lil Bub',
          color: 'brown tabby',
          famous_for: 'weird tongue',
        },
        {
          name: 'Grumpy Cat',
          color: 'siamese',
          famous_for: 'serving moods',
        },
        {
          name: 'Smoothie',
          color: 'orange tabby',
          famous_for: 'modeling',
        },
        {
          name: 'Maru',
          color: 'brown tabby',
          famous_for: 'being a lovable oaf',
        },
        {
          name: 'Keyboard Cat',
          color: 'orange tabby',
          famous_for: 'piano virtuoso',
        },
        {
          name: 'Long Cat',
          color: 'russian white',
          famous_for: 'being looooooooooooooooooooooooooong',
        },
        {
          name: 'Zeno',
          color: 'brown tabby',
          famous_for: 'getting halfway there',
        },
      ]}
      columns={[
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Famous For',
          accessor: 'famous_for',
        },
        {
          Header: 'Coat Color',
          accessor: 'color',
          filter: 'includesValue',
          filterChoices: [
            {
              name: 'russian white',
              number: 1,
              value: 'russian white',
            },
            {
              name: 'orange tabby',
              number: 2,
              value: 'orange tabby',
            },
            {
              name: 'brown tabby',
              number: 3,
              value: 'brown tabby',
            },
            {
              name: 'siamese',
              number: 1,
              value: 'siamese',
            },
          ],
        },
      ]}
    >
      <DataTable.TableControlBar />
      <DataTable.Table />
      <DataTable.EmptyTable content="No results found" />
      <DataTable.TableFooter />
    </DataTable>
  );
}
```
