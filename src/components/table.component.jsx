import React, { useEffect, useState } from 'react';
import { CompileHeadersFromData } from '../lib/utils';
import TableHeaderCell from './tableHeaderCell.component';
import TableRow from './tableRow.component';
import useSort from '../hooks/useSort';
import useFilter from '../hooks/useFilter';

const Table = ({
    data = [],
    columns = [],
    rows = 10,
    tableName = "",
}) => {

    const [columnList, setColumnList] = useState([]);
    const [sortColumn, setSortColumn] = useState("");
    const [filter, setFilter] = useState("");
    const [intData, setIntData] = useState([]);

    // compute the table columns on mount and set into columns list
    useEffect(() => {
        if (columns.length > 0) {
            setColumnList(columns);
        }
        if (columns.length < 1) {
            let columns = CompileHeadersFromData(data);
            setColumnList(columns);
        }

        // if the columns contains an id column, move it to leftmost column on the table
        if (columnList.indexOf("id") > -1) {
            let index = columnList.indexOf("id");
            columnList.splice(index, 1);
            columnList.unshift("id"); console.log(columnList);

            setColumnList(columnList);
        }
    }, [data]);

    useSort(data, sortColumn, setIntData);
    useFilter(data, filter, setIntData);

    const sortTable = (columnName) => {
        // call the useSort hook with the data and 
        console.log(columnName);
        setSortColumn(columnName);
    };
    const filterTable = (value) => { };

    return (
        <div id="table_container" className="w-[1000px] h-[500px] mr-auto ml-auto border border-slate-400 p-5 rounded-lg overflow-scroll">
            <div className="py-1 justify-between items-center flex flex-row flex-nowrap">
                <p className="w-72 text-lg font-bold">
                    {
                        tableName || "React Table"
                    }
                </p>
                <input type="text" className="w-60 h-10 px-4 border-slate-400 rounded-lg border" placeholder="Search for an item" />
            </div>

            <table id="table">
                {/* Table Header */}
                <thead>
                    <tr>
                        {
                            columnList?.map((column, _idx) => (<TableHeaderCell sortFn={sortTable} columnLength={columnList.length} columnName={column} key={_idx} />))
                        }
                    </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                    {
                        intData?.map((data, _idx) => (
                            <TableRow key={_idx} columnList={columnList} rowData={data} rowIndex={_idx} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

Table.defaultProps = {
    data: [],
    columns: [],
    rows: 10
};

export default Table;