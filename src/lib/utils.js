import sortBy from 'lodash/sortBy';

/**
 * Function for automatically extracting headers from the array of objects
 * @param {Array} data Array of JSON objects from which to extract headers from
 * @returns An array of extracted headers
 */
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

/**
 * Sorts an array of objects by a specified predicate 
 * @param {Array} data Array of JSON objects to be sorted
 * @param {String} predicate String specifying the key to use while sorting the array, corresponding to the column being sorted
 * @returns An array of sorted objects by specified key
 */
export const sortData = (data, predicate) => {
    return sortBy(data, [predicate]);
};

/**
 * Filters an array of objects by a case insensitive predicate
 * @param {Array} data An array of objects to be filtered for a specified predicate
 * @param {String} filterStr The string predicate to filter the array for
 * @returns An array of objects containing strings that match the predicate. Case insensitive.
 */
export const filterData = (data, filterStr) => {

    // if no filter predicate is passed, return data as is.
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

/**
 * Paginates an array of objects by given page number and returns specified number of elements
 * @param {Array} data An array of objects to be paginated
 * @param {Number} page The page to be returned by function
 * @param {Number} rowsPerPage The number of elements to be returned in the page
 * @returns An array containing specified number of elements of paginated data
 */
export const paginateData = (data, page, rowsPerPage) => {

    let paginated = [];
    if (page === 1) {
        paginated = data.slice(0, rowsPerPage);
    } else {
        paginated = data.slice((page - 1) * rowsPerPage, rowsPerPage * page);
    }

    return paginated;
};