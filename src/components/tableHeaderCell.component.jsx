import React from 'react';

const TableHeaderCell = ({
    columnName, columnLength, sortFn
}) => {
    const handleSort = () => {
        return sortFn(columnName);
    };
    return (
        <th className="hover:cursor-pointer" style={{
            width: (columnName === "id") ? "30px" : `${1000 / columnLength}px`,
            minWidth: (columnName === "id") ? "30px" : '300px'
        }}
            onClick={handleSort}
        >
            {
                columnName
            }
        </th>
    );
};

export default TableHeaderCell;
