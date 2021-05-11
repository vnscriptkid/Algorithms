const {maxProfit, findMaxProfitNaive} = require('./index');

test('findMaxProfitNaive() works', () => {
    const result = findMaxProfitNaive([7, 1, 5, 3, 6, 4]);

    expect(result).toEqual(5);
});

test('maxProfit() works using DP', () => {
    const result = maxProfit([7, 1, 5, 3, 6, 4]);

    expect(result).toEqual(5);
});