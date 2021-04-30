const {removeCharAtIndex, permutations} = require('./index')

test('remove char at index of string', () => {
    expect(removeCharAtIndex('abc', 1)).toEqual('ac');
})

test('find all the permutations', () => {
    expect(permutations('abc')).toEqual([
        'abc', 'acb', 'bac', 'bca', 'cab', 'cba'
    ]);
})
