const {twoSumSorted} = require('./index')

test('it works', () => {
    const result = twoSumSorted([-5, -2, -1, 3, 9, 10], 7);

    expect(result).toEqual([ [1, 4] ]);
})