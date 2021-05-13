const {maximizeKnapsackValue} = require('./index')

test('it works', () => {
    const valueWeightPairs = [[60, 5], [50, 3], [70, 4], [30, 2]];
    const maxWeightOfKnapsack = 5;

    const result = maximizeKnapsackValue(valueWeightPairs, maxWeightOfKnapsack);
    expect(result).toEqual(80);
})

test('it works with another set of data', () => {
    const valueWeightPairs = [[60, 10], [100, 20], [120, 30]];
    const maxWeightOfKnapsack = 50

    const result = maximizeKnapsackValue(valueWeightPairs, maxWeightOfKnapsack);
    expect(result).toEqual(220);
})

