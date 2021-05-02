const {twoSumUnsorted} = require('./index')

test('it works', () => {
    const result = twoSumUnsorted([1, 2, 3, 8, 6, 4, 10, 9], 7);

    expect(result.length).toEqual(2);
    expect(result).toEqual([[ 0, 4 ], [ 2, 5 ]]);
})