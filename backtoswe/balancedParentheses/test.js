const {isBalanced} = require('./index')

test('it works', () => {
    expect(isBalanced('(())')).toEqual(true);
    expect(isBalanced('([({})])')).toEqual(true);
    expect(isBalanced('))((')).toEqual(false);
    expect(isBalanced('))))')).toEqual(false);
    expect(isBalanced('((((')).toEqual(false);
    expect(isBalanced('{(})')).toEqual(false);
    expect(isBalanced('{(}')).toEqual(false);
})