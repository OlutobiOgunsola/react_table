import { useEffect, useMemo } from 'react';
import { filterData } from "../lib/utils";

/**
 * Case insensitive filtering hook for searching the data table for a specified string
 * @param {Object} data The data object to be filtered
 * @param {String} filter The string to filter the table for
 * @param {Function} setDataFn The function for setting filtered data back into table state
 * @param {Function} resetPageFn The function for resetting table page state to the first page
 */
export default function useFilter(data, filter, setDataFn, resetPageFn) {
    const filtered = useMemo(() => filterData(data, filter.toLowerCase()), [filter, data]);
    useEffect(() => {
        setDataFn(filtered);
        resetPageFn(1);
    }, [filter]);
}