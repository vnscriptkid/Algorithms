const {minimumSubString} = require('./index');

test('it works in case found', () => {
    const string = 'ABCDECF';
    const target = 'CCE';
    const result = minimumSubString(string, target);
    expect(result).toEqual('CDEC');
})

test('it works in case not found', () => {
    const string = 'ABCDECF';
    const target = 'CCEG';
    const result = minimumSubString(string, target);
    expect(result).toEqual(null);
})