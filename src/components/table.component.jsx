import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { CompileHeadersFromData } from '../lib/utils';
import TableHeaderCell from './tableHeaderCell.component';
import TableRow from './tableRow.component';
import useSort from '../hooks/useSort';
import useFilter from '../hooks/useFilter';
import usePagination from '../hooks/usePagination';
import { TableWrapper } from './styles';
import { COLORS } from '../lib/settings';

const Table = ({
    data = [],
    columns = [],
    tableName = "",
    config = {}
}) => {

    const [columnList, setColumnList] = useState([]);
    const [sortColumn, setSortColumn] = useState("");
    const [page, setPage] = useState(1);
    const [rowCount, setRowCount] = useState(config?.rowsPerPageOptions?.sort()[0] || 10);
    const [filter, setFilter] = useState("");
    const [filterStr, setFilterStr] = useState("");
    const [intData, setIntData] = useState(data);
    const [pageData, setPageData] = useState(data);
    const [maxPages, setMaxPages] = useState(data);

    // compute the table columns on mount and set into columns list
    useEffect(() => {
        if (columns?.length > 0) {
            setColumnList(columns);
        }
        if (columns?.length < 1) {
            let columns = CompileHeadersFromData(data);
            setColumnList(columns);
        }

        // if the columns contains an id column, move it to leftmost column on the table
        if (columnList.indexOf("id") > -1) {
            let index = columnList.indexOf("id");
            columnList.splice(index, 1);
            columnList.unshift("id");

            setColumnList(columnList);
        }

        // set row count to config row count if available
        if (config?.rowsPerPageOptions && !config?.rowsPerPageOptions?.some(isNaN)) {
            const startingRowCount = config?.rowsPerPageOptions?.sort()[0];
            setRowCount(rowC => (+startingRowCount));

            // set maximum number of pages
            const maxPageCount = data?.length / rowCount;
            setMaxPages(maxPageCount);
        } else {
            setRowCount(10);

            // set maximum number of pages
            const maxPageCount = data?.length / rowCount;
            setMaxPages(maxPageCount);
        }
    }, [data, config?.rowsPerPageOptions]);

    useEffect(() => {
        // set maximum number of pages
        const maxPageCount = data?.length / rowCount;
        setMaxPages(maxPageCount);
    }, [rowCount]);

    usePagination(intData, page, rowCount, setPageData);

    useFilter(data, filterStr, setIntData, setPage);

    useSort(intData, sortColumn, setIntData);

    const sortTable = (columnName) => {
        // call the useSort hook with the data and 
        setSortColumn(columnName);
    };
    const filterTable = (e) => {
        setFilter(e.target.value);
        const f = debounce(() => {
            setFilterStr(e.target.value);
        }, 2000);
        f();
    };

    return (
        <TableWrapper {...config?.style}>
            <div id="table_container" className="w-full h-full mr-auto ml-auto border border-slate-400 p-5 rounded-lg overflow-clip">
                <div id="table_header_container" className="py-1 justify-between items-center flex flex-row flex-nowrap mb-4">
                    <p className="w-72 text-lg font-bold">
                        {
                            tableName || "React Table"
                        }
                    </p>
                    <input type="text" className="w-60 h-10 px-4 border-slate-400 rounded-lg border" placeholder="Search for an item" value={filter} onChange={filterTable} />
                </div>

                <div id="table_inner_container" className="w-full overflow-scroll scrollbar-hide">
                    <table id="table">
                        {/* Table Header */}
                        <thead className="h-20">
                            <tr>
                                {
                                    columnList?.map((column, _idx) => (<TableHeaderCell sortFn={sortTable} width={config?.style?.width || `100%`} columnLength={columnList?.length} columnName={column} key={_idx} />))
                                }
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {
                                pageData ? pageData?.map((data, _idx) => (
                                    <TableRow bandColor={config?.style?.bandColor || COLORS.DEFAULT_BAND_COLOR} key={_idx} columnList={columnList} rowData={data} rowIndex={_idx} />
                                )) : intData?.map((data, _idx) => (
                                    <TableRow bandColor={config?.style?.bandColor || COLORS.DEFAULT_BAND_COLOR} key={_idx} columnList={columnList} rowData={data} rowIndex={_idx} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div id="pagination" className="flex flex-row flex-nowrap w-full justify-between">
                    <div id="page_btns">
                        {page < maxPages && <span className="mr-4 hover:cursor-pointer" onClick={() => {
                            setPage(page => {
                                return page + 1;
                            });
                        }}>Next Page</span>}
                        {page > 1 && <span className="hover:cursor-pointer" onClick={() => {
                            setPage(page => {
                                return page - 1;
                            });
                        }}>Previous Page</span>}
                    </div>
                    <div id="rows_per_page_input" className="flex flex-nowrap flex-row">
                        <p className="mr-2">Rows Per Page</p>
                        <select name="rows_per_page" id="rows_per_page" className="" onChange={(e) => { setRowCount(e.target.value); }}>
                            {
                                config?.rowsPerPageOptions ? !config?.rowsPerPageOptions?.some(isNaN) ?
                                    config?.rowsPerPageOptions?.sort().map((option, _idx) => (
                                        <option id={`option_${option}`} value={+option} key={_idx} onClick={() => { setRowCount(option); }}>{+option}</option>
                                    )) : <>
                                        <option value="10">10</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </> : <>
                                    <option value="10">10</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </>
                            }
                        </select>
                    </div>
                </div>
            </div>
        </TableWrapper>
    );
};;
Table.defaultProps = {
    data: [],
    columns: [],
    rows: 10
};

export default Table;