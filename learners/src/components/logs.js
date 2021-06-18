// This is for displaying the log activity of the user
// Created by @author Sireesha on 3-6-2021
// Html by @author Prathyusha 
// Styles and bootstrap by @author Nikhil 
// Constructor and componentDidMount by @author Ashish 
// Displaying log activity by @author Sireesha
// import React from 'react';
import React, { useMemo } from 'react'
import { useTable, usePagination, useSortBy, useGlobalFilter} from 'react-table'
import { GlobalFilter } from './GlobalFilter'
// import MOCK from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import '../styles/table.css'

//pagenation table created by @author Sri Charan
// created logs function to display logs using pagenation
const Logs = () => {
    var MOCK = JSON.parse(localStorage.getItem("list1"));
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK, [])

    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setGlobalFilter,

        prepareRow,
    } = useTable({
        columns,
        data,
    },
    useGlobalFilter,
        useSortBy,

        usePagination)
        const { globalFilter } = state
        const { pageIndex, pageSize } = state

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <br />
                        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                            {
                                [10, 25, 50].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))
                            }
                        </select>
                        &emsp;&emsp;
                        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                        <br /><br />

                        <center>
                            <table {...getTableProps()}>
                                <thead>
                                    {
                                        headerGroups.map((headerGroup) => (

                                            <tr {...headerGroup.getHeaderGroupProps()}>
                                                {
                                                    headerGroup.headers.map((column) => (
                                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                                            <span>
                                                                {column.isSorted ? (column.isSortedDesc ? ' descending ' : ' ascending') : ''}
                                                            </span>

                                                        </th>

                                                    ))
                                                }

                                            </tr>
                                        ))}
                                </thead>

                                <tbody {...getTableBodyProps()}>
                                    {
                                        page.map(row => {
                                            prepareRow(row)
                                            return (
                                                <tr {...row.getRowProps()}>
                                                    {
                                                        row.cells.map((cell) => {

                                                            return (

                                                                <td {...cell.getCellProps()}>
                                                                    <center>{cell.render('Cell')}</center>

                                                                </td>
                                                            )
                                                        })
                                                    }
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                            <div>
                            <span>
                                    Page{' '}
                                    <strong>
                                        {pageIndex + 1} of {pageOptions.length}
                                    </strong>{' '}
                                </span>
                                <span>
                                    | Go to page: {' '}
                                    <input type='number' defaultValue={pageIndex + 1}
                                        onChange={e => {
                                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                            gotoPage(pageNumber)
                                        }}
                                        style={{ width: '50px' }} />

                                </span>

                                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                                    {'<<'}
                                </button>

                                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous

                                </button>
                                <button onClick={() => nextPage()} disabled={!canNextPage}>Next
                                </button>   
                                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                                    {'>>'}
                                </button> 
                            </div>
                        </center>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </>

    )

}

export default Logs;