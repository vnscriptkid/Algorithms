const {knapsack} = require('./index') 

test('knapsack contains correct items using greedy', () => {
    const volumns = [3, 2, 3, 1, 5];
    const prices = [4, 3, 5, 2, 9];
    const capacity = 7;

    const result = knapsack(capacity, volumns, prices);

    expect(result).toEqual(11);  
});

// the greedy algorithm can fail when it chooses a set of items that don't take up the whole available capacity