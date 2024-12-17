import React from 'react';
import TableRowCell from './tableRowCell.component';

const TableRow = ({
    columnList = [], rowData = {}, rowIndex = 0
}) => {
    return (
        <tr className="py-2" style={{
            background: rowIndex % 2 === 1 ? "#F5F5F5" : ""
        }}>
            {
                columnList.map((column, _idx) => (
                    <TableRowCell key={_idx} cell={rowData[column]} />
                ))
            }
        </tr>
    );
};

export default TableRow;
