// import React from 'react';
// import { useTable, useSortBy } from 'react-table';
// import makeData from './makeData';

// // const TableWrapper = () => {
// //   const columns = React.useMemo(
// //     () => [
// //       {
// //         Header: 'First Name',
// //         accessor: 'firstName',
// //         // Use a two-stage aggregator here to first
// //         // count the total rows being aggregated,
// //         // then sum any of those counts if they are
// //         // aggregated further
// //         aggregate: 'count',
// //         Aggregated: ({ value }) => `${value} Names`,
// //       },
// //       {
// //         Header: 'Last Name',
// //         accessor: 'lastName',
// //         // Use our custom `fuzzyText` filter on this column
// //         filter: 'fuzzyText',
// //         // Use another two-stage aggregator here to
// //         // first count the UNIQUE values from the rows
// //         // being aggregated, then sum those counts if
// //         // they are aggregated further
// //         aggregate: 'uniqueCount',
// //         Aggregated: ({ value }) => `${value} Unique Names`,
// //       },
// //     ],
// //     [],
// //   );

// //   const [data, setData] = React.useState(() => makeData(10000));

// //   return (
// //     <Table columns={columns} data={data} />
// //   );
// // };

// function Table({ columns, data }) {
//   // Use the state and functions returned from useTable to build your UI
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({
//     columns,
//     data,
//   }, useSortBy);

//   // Render the UI for your table
//   return (
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map(headerGroup => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map(column => (
//               <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row, i) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

// export default TableWrapper;
