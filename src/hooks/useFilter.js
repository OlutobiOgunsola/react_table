import { useEffect, useMemo } from 'react';
import { filterData } from "../lib/utils";

export default function useFilter(data, filter, setDataFn, resetPageFn) {
    const filtered = useMemo(() => filterData(data, filter.toLowerCase()), [filter, data]);
    useEffect(() => {
        setDataFn(filtered);
        resetPageFn(1);
    }, [filter]);
}