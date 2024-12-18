import sortBy from 'lodash/sortBy';

export const CompileHeadersFromData = (data) => {
    let headers = [];
    data.forEach(data => {
        let keyArray = Object.keys(data);
        keyArray.forEach(key => {
            if (headers.indexOf(key) < 0) {
                headers.push(key);
            }
        });
    });

    return headers;
};

export const sortData = (data, predicate) => {
    return sortBy(data, [predicate]);
};

export const filterData = (data, filterStr) => {
    if (!filterStr || filterStr.trim() === "") {
        return data;
    }
    let objectsWithValue = [];
    data.forEach(item => {
        let values = Object.values(item).toString().toLowerCase();
        if (values.includes(filterStr)) {
            objectsWithValue.push(item);
        }
    });
    return objectsWithValue;
};

export const paginateData = (data, page, rowsPerPage) => {
    let paginated = [];
    if (page === 1) {
        paginated = data.slice(0, rowsPerPage);
    } else {
        paginated = data.slice((page - 1) * rowsPerPage, rowsPerPage * page);
    }

    return paginated;
};