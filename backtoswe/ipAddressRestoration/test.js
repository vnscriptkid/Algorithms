const {findAll, isValidSegment} = require('./index');

test('it works', () => {
    const result = findAll('25525511135');

    expect(Array.isArray(result));
    expect(result.length).toEqual(2);
    expect(result.includes('255.255.111.35')).toEqual(true);
    expect(result.includes('255.255.11.135')).toEqual(true);
});

test('isValidSegment() works', () => {
    // valid
    expect(isValidSegment('0')).toEqual(true)
    expect(isValidSegment('255')).toEqual(true)
    expect(isValidSegment('100')).toEqual(true)
    // invalid
    expect(isValidSegment('256')).toEqual(false)
    expect(isValidSegment('-1')).toEqual(false)
    expect(isValidSegment('01')).toEqual(false)
    expect(isValidSegment('00')).toEqual(false)
    expect(isValidSegment('abc')).toEqual(false)
})