const {generate} = require('./index');

test('it works', () => {
    const result = generate('abc');
    expect(result).toEqual([
        'abc', 'acb', 'bac', 'bca', 'cab', 'cba'
    ]);
});