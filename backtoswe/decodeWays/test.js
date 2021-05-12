const {decodeWays, generateMap, isValidNum} = require('./index');

test('generateMap() works', () => {
    const mapping = generateMap();
    expect(Object.keys(mapping).length).toEqual(26);
    expect(Object.keys(mapping)[0]).toEqual('1')
    expect(Object.keys(mapping)[25]).toEqual('26')
    expect(Object.values(mapping)[0]).toEqual('A')
    expect(Object.values(mapping)[25]).toEqual('Z')
})

test('decodeWays() works', () => {
    const result = decodeWays(223);
    expect(result).toEqual(3);
})

test('isValidNum() works', () => {
    expect(isValidNum('1')).toEqual(true);
    expect(isValidNum('26')).toEqual(true);
    expect(isValidNum('10')).toEqual(true);
    expect(isValidNum('0')).toEqual(false);
    expect(isValidNum('27')).toEqual(false);
    expect(isValidNum('01')).toEqual(false);
})

