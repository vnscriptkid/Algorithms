const {evaluate} = require('./index') 

test('evaluate postfix expression correctly', () => {
    const result = evaluate("5 4 6 + * 4 9 3 / + *");

    expect(result).toEqual(350);  
});

// the greedy algorithm can fail when it chooses a set of items that don't take up the whole available capacity