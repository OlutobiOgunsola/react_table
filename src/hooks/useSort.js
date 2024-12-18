import { useEffect, useMemo } from 'react';
import { sortData } from '../lib/utils';

export default function useSort(data, sortColumn, setDataFn) {
    const sorted = useMemo(() => sortData(data, sortColumn), [sortColumn, data]);
    useEffect(() => {
        setDataFn(sorted);
    }, [sortColumn]);
}