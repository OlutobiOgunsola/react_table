import { useMemo, useEffect } from 'react';
import { paginateData } from '../lib/utils';

/**
 * Pagination hook for returning pages of data to the table
 * @param {Object} data The data to be paginated
 * @param {Number} page The page to be returned
 * @param {Number} rowsPerPage The number of elements to be returned per page
 * @param {Function} setDataFn The function for setting the data back into table state
 */
export default function usePagination(
    data, page, rowsPerPage, setDataFn
) {
    // grab and memoize the number of rows from the data object, starting from the page
    const paginated = useMemo(() => paginateData(data, page, rowsPerPage), [page, rowsPerPage, data]);
    useEffect(() => {
        setDataFn(paginated);
    }, [page, rowsPerPage, data, setDataFn, paginated]);
}