const { isMatched } = require('./index');

test('it works', () => {
    expect(isMatched('abc', 'def')).toEqual(true);
    expect(isMatched('abb', 'dee')).toEqual(true);
    expect(isMatched('abbcc', 'deezz')).toEqual(true);
    expect(isMatched('abb', 'deef')).toEqual(false);
    expect(isMatched('abb', 'def')).toEqual(false);
    expect(isMatched('ab', 'cc')).toEqual(false);
});