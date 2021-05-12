const {findMinNumOfCoins} = require('./index');

test('it works', () => {
    const result = findMinNumOfCoins([1,2,5], 11); // 527 vs 29 times with and without caching
    expect(result).toEqual(3);
});