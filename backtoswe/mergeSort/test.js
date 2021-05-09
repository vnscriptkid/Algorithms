const {sort, merge} = require('./index');

test('sort() works', () => {
    const arr = [3,1,7,2,9,6];

    const result = sort(arr);

    expect(result).toEqual([1,2,3,6,7,9]);
});

test('merge() works', () => {
    const arr1 = [1,4,5];
    const arr2 = [2,3,4,6,7,8];

    const result = merge(arr1, arr2);

    expect(result).toEqual([1,2,3,4,4,5,6,7,8]);
});