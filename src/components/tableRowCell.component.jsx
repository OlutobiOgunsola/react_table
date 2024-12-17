import React from 'react';

const TableRowCell = ({
    cell
}) => {
    return (
        <td className="px-4">
            {(typeof cell === "string" || typeof cell === "number") ? cell : "N/A"}
        </td>
    );
};

export default TableRowCell;