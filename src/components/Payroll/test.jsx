import React, { useEffect, useMemo } from 'react'
import { useTable, useRowSelect } from 'react-table'
// import MOCK_DATA from '../MOCK_DATA.json'
import { COLUMNS } from '../utils/columns'
import { Checkbox } from '../checkbox'
import { toast } from 'react-toastify'
const Test = ({ MOCK_DATA }) => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, selectedFlatRows } =
    useTable(
      {
        columns,
        data,
      },
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) => [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
          },
          ...columns,
        ])
      }
    )
console.log(selectedFlatRows);
  const firstPageRows = rows.slice(0, 10)
  const handlePayroll = () => {
    toast('Payroll Generated', { hideProgressBar: true, autoClose: 2000, type: 'success' })
  }

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <pre>
        <div className="flex justify-start mt-6">
          {selectedFlatRows.map((se,index)=>(
            <p key={index}>{se.firstName}</p> 
          ))}
          {/* {} */}
          <button
            type="submit"
            className="bg-indigo-500 text-white rounded-md px-4 py-2 focus:outline-none focus:bg-indigo-600"
            disabled={selectedFlatRows.length === 0}
            onClick={handlePayroll}
          >
            Generate Payroll
          </button>
        </div>
      </pre>
    </>
  )
}
export default Test
