const {nextPermutation, nextChar} = require('./index');

test('nextChar returns next character in string', () => {
    expect(nextChar(['0', '1', '3', '4', '5'], '1')).toEqual('3');
    expect(nextChar(['0', '1', '3', '4', '5'], '0')).toEqual('1');
    expect(nextChar(['0', '1', '3', '4', '5'], '4')).toEqual('5');
    expect(nextChar(['0', '1', '3', '4', '5'], '5')).toEqual(null);
    expect(nextChar(['0', '1', '3', '4', '5'], '7')).toEqual(null);
});

test('it works', () => {
    expect(nextPermutation('6215430')).toEqual('6230145')
    expect(nextPermutation('12345')).toEqual('12354')
    expect(nextPermutation('13542')).toEqual('14235')
    expect(nextPermutation('54321')).toEqual(null)
});