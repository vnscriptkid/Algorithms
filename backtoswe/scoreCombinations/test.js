const {countCombinationSum, findCombinationSum} = require('./index');

test('countCombinationSum() works', () => {
    const result = countCombinationSum([2,3,6,7], 7);
    expect(result).toEqual(2);
});

test('countCombinationSum() works with another dataset', () => {
    const result = countCombinationSum([2,3,5], 8);
    expect(result).toEqual(3);
});

test('findCombinationSum() works', () => {
    const result = findCombinationSum([2,3,5], 8);
    expect(Array.isArray(result));
    expect(result.length).toEqual(3);
    expect(result).toEqual([[2,2,2,2],[2,3,3],[3,5]]);
})