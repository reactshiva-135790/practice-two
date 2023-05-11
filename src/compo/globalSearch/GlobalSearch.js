import React from 'react'
import { useTable, useGlobalFilter, useAsyncDebounce } from 'react-table'  // new

// Define a default UI for filtering
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <div className="mt-3">
            <form className="form-inline my-2 my-lg-0">
                <input
                    className="form-control mr-sm-2"
                    value={value || ""}
                    onChange={e => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }}
                    placeholder="search here..."
                />
            </form>
        </div>
    )
}

export default GlobalFilter;
