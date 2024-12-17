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