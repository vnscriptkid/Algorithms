const {generate} = require('./index');

test('it works', () => {
    const result = generate('23');
    expect(result).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
});
