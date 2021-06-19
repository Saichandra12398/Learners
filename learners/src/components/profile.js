// This is for displaying the profile page of the user
// Created by @author Nikhil on 4-6-2021
// Html by @author Prathyusha
// Styles and bootstrap by @author Ashish
// Constructor and componentDidMount by @author Nikhil
// Displaying log Summary by @author Sireesha
//Updating profile page to add pagenation on 19/06/2021
//By : @author Saichandra - Added image, email, name, table structure
//By : @author Ashish - Added global filter and sort by individual columns
//By : @author Sireesha - Added First, Last buttons, Goto and display functionalities 

import React, { useMemo } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import { COLUMNS } from "./profilecolumns";
import { GlobalFilter } from "./GlobalFilter";
import "../styles/table.css";

const Profile = () => {
  var jsonResult = localStorage.getItem("list1");
  var parsed = JSON.parse(jsonResult);
  var di = {};
  var li = [];
  for (var i = 0; i < parsed.length; i++) {
    var element = parsed[i].task;
    if (element in di) {
      di[element] += 1;
    } else {
      di[element] = 1;
    }
  }
  for (const [key, val] of Object.entries(di)) {
    li = [...li, { task: key, count: val }];
  }
  var name = localStorage.getItem("profileName");
  var email = localStorage.getItem("profileEmail");
  var picture = localStorage.getItem("profilePicture");
  var MOCK = li;
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK, []);
  const {
    getTableProps,
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
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,

    usePagination
  );
  const { globalFilter } = state;
  const { pageIndex, pageSize } = state;
  return (
    <>
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-11">
            <h1 style={{ fontFamily: "fantasy" }}> Name- {name}</h1>
            <h1 style={{ fontFamily: "fantasy" }}> Email-{email}</h1>
          </div>
          <div class="col-md-1">
            <img
              src={picture}
              alt=""
              width="80"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <br />
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 25, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
            &emsp;&emsp;
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <br />
            <br />
            <center>
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          {column.render("Header")}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " descending "
                                : " ascending"
                              : ""}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              <center>{cell.render("Cell")}</center>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div>
                <span>
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </span>
                <span>
                  | Go to page:{" "}
                  <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                      const pageNumber = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(pageNumber);
                    }}
                    style={{ width: "50px" }}
                  />
                </span>

                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                  {"<<"}
                </button>

                <button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Previous
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                  Next
                </button>
                <button
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  {">>"}
                </button>
              </div>
            </center>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
