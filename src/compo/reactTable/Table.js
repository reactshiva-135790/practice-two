import React, { useState } from "react";
import { useTable, useFilters, useSortBy, useGlobalFilter } from "react-table";
import GlobalFilter from "../globalSearch/GlobalSearch";


export default function Table({ columns, data }) {
    // Create a state
    const [filterInput, setFilterInput] = useState("");
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state, // new
        preGlobalFilteredRows, // new
        setGlobalFilter, // new
    } = useTable(
        {
            columns,
            data
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        
    );

    return (
        <>
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />

            <table className="table table-hover text-center mt-3" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th scope="col"
                                    {...column.getHeaderProps(column.getSortByToggleProps())}

                                >
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' ▼'
                                                : ' ▲'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                {/*<tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                  </tbody>*/}

            </table>
        </>
    );
}
