import react, { useState, useEffect, useMemo } from 'react';
import { sortData } from '../lib/utils';

export default function useSort(data, sortColumn, setDataFn) {
    const sorted = useMemo(() => sortData(data, sortColumn), [sortColumn, data]);
    useEffect(() => {
        console.log("sort column changed", sortColumn);
        setDataFn(sorted);
    }, [sortColumn]);
}