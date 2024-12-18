import { useMemo, useEffect } from 'react';
import { paginateData } from '../lib/utils';

export default function usePagination(
    data, page, rowsPerPage, setDataFn
) {
    // grab the number of rows from the data object, starting from the page
    const paginated = useMemo(() => paginateData(data, page, rowsPerPage), [page, rowsPerPage, data]);
    useEffect(() => {
        setDataFn(paginated);
    }, [page, rowsPerPage, data, setDataFn, paginated]);
}