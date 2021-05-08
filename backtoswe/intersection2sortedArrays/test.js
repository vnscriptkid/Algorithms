const {findIntersection} = require('./index');

test('it works', () => {
    const arr1 = [2, 2, 2, 4, 5];
    const arr2 = [1, 2, 2, 3, 5, 6, 7];

    const result = findIntersection(arr1, arr2);

    expect(result).toEqual([2, 5]);
}); 