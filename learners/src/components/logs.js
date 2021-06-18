// This is for displaying the log activity of the user
// Created by @author Sireesha on 3-6-2021
// Html by @author Prathyusha 
// Styles and bootstrap by @author Nikhil 
// Constructor and componentDidMount by @author Ashish 
// Displaying log activity by @author Sireesha
// import React from 'react';
import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
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
        prepareRow,
    } = useTable({
        columns,
        data,
    },
        usePagination)

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <br />
                        <center>
                            <table {...getTableProps()}>
                                <thead>
                                    {
                                        headerGroups.map((headerGroup) => (

                                            <tr {...headerGroup.getHeaderGroupProps()}>
                                                {
                                                    headerGroup.headers.map((column) => (
                                                        <th {...column.getHeaderProps()}>{column.render('Header')}
                                                            

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

                                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous

                                </button>
                                <button onClick={() => nextPage()} disabled={!canNextPage}>Next
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