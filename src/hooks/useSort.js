import { useEffect, useMemo } from 'react';
import { sortData } from '../lib/utils';

/**
 * Sorting hook for returning sorted data back to the data table
 * @param {Object} data The data to be sorted
 * @param {String} sortColumn The column to be sorted
 * @param {Function} setDataFn The function for setting the sorted data back into state
 */
export default function useSort(data, sortColumn, setDataFn) {
    const sorted = useMemo(() => sortData(data, sortColumn), [sortColumn, data]);
    useEffect(() => {
        setDataFn(sorted);
    }, [sortColumn]);
}