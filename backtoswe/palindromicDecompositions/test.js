const {decompose} = require('./index');

test('it works 1', () => {
    const result = decompose('aab');
    expect(result).toEqual([
        ['a', 'a', 'b'],
        ['aa', 'b'],
    ]);
});

test('it works 2', () => {
    const result = decompose('a');
    expect(result).toEqual([
        ['a']
    ]);
});

test('it works 3', () => {
    const result = decompose('nitin');
    expect(result).toEqual([
        ['n', 'i', 't', 'i', 'n'],
        ['n', 'iti', 'n'],
        ['nitin']
    ]);
});


test('it works 4', () => {
    const result = decompose('geeks');
    expect(result).toEqual([
        ['g', 'e', 'e', 'k', 's'],
        ['g', 'ee', 'k', 's'],
    ]);
});