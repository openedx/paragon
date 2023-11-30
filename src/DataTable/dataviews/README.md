---
title: 'Data views'
type: 'component'
components:
- DataTable
- DataTableTable
- TableControlBar
- TableFooter
- Table
- TableCell
- TableHeaderCell
- TableHeaderRow
- TableRow
- CardView
categories:
- Table
tabName: 'implementation'
status: 'New'
designStatus: 'Done'
devStatus: 'In progress'
---


<Link to="/components/datatable/">Main DataTable page</Link>

There are currently two built-in options for displaying the data `DataTable.Table` and `CardView`, but you can also build your own.

## DataTable.Table

The `Table` component is meant to be rendered within a `DataTableContext` (provided by `DataTable` here).
It displays the data provided by the `DataTableContext` as an html table.

```jsx live
<DataTable
  isSelectable
  columns={[
    {
      Header: 'Name',
      accessor: 'name',

    },
    {
      Header: 'Age',
      accessor: 'age',
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
  itemCount={7}
  data={[
    {
      name: 'Lil Bub',
      color: 'brown tabby',
      famous_for: 'weird tongue',
      age: 4,
    },
    {
      name: 'Grumpy Cat',
      color: 'siamese',
      famous_for: 'serving moods',
      age: 4,
    },
    {
      name: 'Smoothie',
      color: 'orange tabby',
      famous_for: 'modeling',
      age: 1,
    },
    {
      name: 'Maru',
      color: 'brown tabby',
      famous_for: 'being a lovable oaf',
      age: 12,
    },
    {
      name: 'Keyboard Cat',
      color: 'orange tabby',
      famous_for: 'piano virtuoso',
      age: 9,
    },
    {
      name: 'Long Cat',
      color: 'russian white',
      famous_for:
        'being loooooooooooooooooooooooooooooooooooooooooooooooooooooong',
      age: 9,
    },
    {
      name: 'Zeno',
      color: 'brown tabby',
      famous_for: 'getting halfway there',
      age: 17,
    },
  ]}
  additionalColumns={[
      {
        id: 'action',
        Header: 'Action',
        // Proptypes disabled as this prop is passed in separately
        Cell: ({ row }) => <Button variant="link" onClick={() => console.log("Assign", row)}>Assign</Button>,
      }
    ]}
>
  <DataTable.Table />
</DataTable>
```

<PropsTable displayName="Table" content='The DataTable.Table component expects to receive a react-table instance from the DataTableContext.' />

## Table Subcomponents

Subcomponents of `DataTable.Table` can be used independently of the main component. They are designed for use with a `react-table` instance.

<PropsTable displayName="TableRow" />
<PropsTable displayName="TableCell" />
<PropsTable displayName="TableHeaderCell" />
<PropsTable displayName="TableHeaderRow" />

## CardView and alternate table components

You may choose to use any table component by using the following code in your display component:
```jsx
const instance = useContext(DataTableContext)
```
The CardView takes a `CardComponent` that is personalized to the table in question and displays
a responsive grid of cards.

```jsx live
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
  fetchData={(currentState) => console.log(`This function will be called with the value: ${JSON.stringify(currentState)}}`)}
  data={[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95",
  },
  {
    "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
    "title": "Grave of the Fireflies",
    "director": "Isao Takahata",
    "producer": "Toru Hara",
    "release_date": "1988",
    "rt_score": "97",
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1989",
    "rt_score": "96",
  },
  {
    "id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
    "title": "Only Yesterday",
    "director": "Isao Takahata",
    "producer": "Toshio Suzuki",
    "release_date": "1991",
    "rt_score": "100",
  },
  {
    "id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
    "title": "Porco Rosso",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "1992",
    "rt_score": "94",
  },
  {
    "id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
    "title": "Pom Poko",
    "director": "Isao Takahata",
    "producer": "Toshio Suzuki",
    "release_date": "1994",
    "rt_score": "78",
  },
  {
    "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
    "title": "Whisper of the Heart",
    "director": "Yoshifumi Kondō",
    "producer": "Toshio Suzuki",
    "release_date": "1995",
    "rt_score": "91",
  },
  {
    "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
    "title": "Princess Mononoke",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "1997",
    "rt_score": "92",
  },
  {
    "id": "45204234-adfd-45cb-a505-a8e7a676b114",
    "title": "My Neighbors the Yamadas",
    "director": "Isao Takahata",
    "producer": "Toshio Suzuki",
    "release_date": "1999",
    "rt_score": "75",
  },
  {
    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c",
    "title": "Spirited Away",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "2001",
    "rt_score": "97",
  },
  {
    "id": "90b72513-afd4-4570-84de-a56c312fdf81",
    "title": "The Cat Returns",
    "director": "Hiroyuki Morita",
    "producer": "Toshio Suzuki",
    "release_date": "2002",
    "rt_score": "89",
  },
  {
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
    "title": "Howl's Moving Castle",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "2004",
    "rt_score": "87",
  },
  {
    "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",
    "title": "Tales from Earthsea",
    "director": "Gorō Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "2006",
    "rt_score": "41",
  },
  {
    "id": "758bf02e-3122-46e0-884e-67cf83df1786",
    "title": "Ponyo",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "2008",
    "rt_score": "92",
  },
  {
    "id": "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
    "title": "Arrietty",
    "director": "Hiromasa Yonebayashi",
    "producer": "Toshio Suzuki",
    "release_date": "2010",
    "rt_score": "95",
  },
  {
    "id": "45db04e4-304a-4933-9823-33f389e8d74d",
    "title": "From Up on Poppy Hill",
    "director": "Gorō Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "2011",
    "rt_score": "83",
  },
  {
    "id": "67405111-37a5-438f-81cc-4666af60c800",
    "title": "The Wind Rises",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "2013",
    "rt_score": "89",
  },
  {
    "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
    "title": "The Tale of the Princess Kaguya",
    "director": "Isao Takahata",
    "producer": "Yoshiaki Nishimura",
    "release_date": "2013",
    "rt_score": "100",
  },
  {
    "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
    "title": "When Marnie Was There",
    "director": "Hiromasa Yonebayashi",
    "producer": "Yoshiaki Nishimura",
    "release_date": "2014",
    "rt_score": "92",
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
    {
      buttonText: 'Download CSV',
      handleClick: (selectedRows) => console.log('Downloading CSV ', selectedRows),
    },
  ]}
>
  <TableControlBar />
  <CardView CardComponent={MiyazakiCard} />
  <TableFooter />
</DataTable>
```

### Sample Card component for use with CardView

The `CardComponent` prop on `CardView` represents a table row, and will receive the row that `react-table`
provides as props.

<PropsTable displayName="CardView" />

```jsx
const MiyazakiCard = ({ className, original  }) => {
  const { title, director, release_date } = original;

  return (
    <Card className={className}>
      <Card.ImageCap src="https://picsum.photos/360/200/" srcAlt="Card image" />
      <Card.Section title={title}>
        <dl>
          <dt>Director</dt><dd>{director}</dd>
          <dt>Release Date</dt><dd>{release_date}</dd>
        </dl>
      </Card.Section>
    </Card>
  );
};
```
